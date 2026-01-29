import { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';

interface VoteCount {
  option_id: string;
  vote_count: number;
}

export function usePollVotes(slideId: number) {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [totalVotes, setTotalVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [userVote, setUserVote] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 获取或创建session ID
  const getSessionId = () => {
    let sessionId = localStorage.getItem('poll_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem('poll_session_id', sessionId);
    }
    return sessionId;
  };

  // 加载投票数据
  const loadVotes = async () => {
    try {
      // 获取所有投票
      const { data, error } = await supabase
        .from('poll_votes')
        .select('option_id')
        .eq('slide_id', slideId);

      if (error) throw error;

      // 统计每个选项的票数
      const voteCounts: Record<string, number> = {};
      data?.forEach(vote => {
        voteCounts[vote.option_id] = (voteCounts[vote.option_id] || 0) + 1;
      });

      setVotes(voteCounts);
      setTotalVotes(data?.length || 0);

      // 检查当前用户是否已投票
      const sessionId = getSessionId();
      const { data: userVoteData } = await supabase
        .from('poll_votes')
        .select('option_id')
        .eq('slide_id', slideId)
        .eq('session_id', sessionId)
        .maybeSingle();

      if (userVoteData) {
        setHasVoted(true);
        setUserVote(userVoteData.option_id);
      }
    } catch (error) {
      console.error('Error loading votes:', error);
    }
  };

  // 提交投票
  const submitVote = async (optionId: string) => {
    if (hasVoted) return;

    setLoading(true);
    try {
      const sessionId = getSessionId();

      const { error } = await supabase
        .from('poll_votes')
        .insert({
          slide_id: slideId,
          option_id: optionId,
          session_id: sessionId
        });

      if (error) throw error;

      setHasVoted(true);
      setUserVote(optionId);
      
      // 立即更新本地状态
      setVotes(prev => ({
        ...prev,
        [optionId]: (prev[optionId] || 0) + 1
      }));
      setTotalVotes(prev => prev + 1);
    } catch (error) {
      console.error('Error submitting vote:', error);
    } finally {
      setLoading(false);
    }
  };

  // 初始加载
  useEffect(() => {
    loadVotes();

    // 订阅实时更新
    const channel = supabase
      .channel(`poll_${slideId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'poll_votes',
          filter: `slide_id=eq.${slideId}`
        },
        () => {
          loadVotes();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [slideId]);

  return {
    votes,
    totalVotes,
    hasVoted,
    userVote,
    loading,
    submitVote
  };
}
