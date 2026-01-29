import React from 'react';
import { PollOption } from '../types';
import { usePollVotes } from '../hooks/usePollVotes';
import { BarChart3 } from 'lucide-react';

interface Props {
  slideId: number;
  title: string;
  content: string[];
  pollOptions: PollOption[];
}

const PollSlide: React.FC<Props> = ({ slideId, title, content, pollOptions }) => {
  const { votes, totalVotes, hasVoted, userVote, loading, submitVote } = usePollVotes(slideId);

  const getPercentage = (optionId: string) => {
    if (totalVotes === 0) return 0;
    return Math.round(((votes[optionId] || 0) / totalVotes) * 100);
  };

  return (
    <div className="flex flex-col h-full justify-center">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      <p className="text-xl mb-8 text-gray-600">{content[0]}</p>
      
      <div className="grid grid-cols-1 gap-4">
        {pollOptions.map((option) => {
          const voteCount = votes[option.id] || 0;
          const percentage = getPercentage(option.id);
          const isSelected = userVote === option.id;

          return (
            <button
              key={option.id}
              onClick={() => !hasVoted && submitVote(option.id)}
              disabled={hasVoted || loading}
              className={`relative overflow-hidden p-6 text-left border-2 rounded-lg transition-all duration-300 group ${
                isSelected
                  ? 'border-black bg-black text-white'
                  : hasVoted
                  ? 'border-gray-200 cursor-default'
                  : 'border-gray-200 hover:border-gray-400 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {/* 投票进度条背景 */}
              {hasVoted && (
                <div
                  className="absolute inset-0 bg-gray-100 transition-all duration-700 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              )}

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <span
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold mr-4 transition-colors ${
                      isSelected
                        ? 'bg-white text-black'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}
                  >
                    {option.id}
                  </span>
                  <div className="flex-1">
                    <div className="font-bold text-lg">{option.label}</div>
                    <div
                      className={`text-sm ${
                        isSelected ? 'text-gray-300' : 'text-gray-500'
                      }`}
                    >
                      {option.description}
                    </div>
                  </div>
                </div>

                {/* 投票结果显示 */}
                {hasVoted && (
                  <div className="ml-4 text-right">
                    <div className="text-2xl font-bold">{percentage}%</div>
                    <div className="text-sm text-gray-500">{voteCount} 票</div>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {hasVoted && (
        <div className="mt-8 flex items-center justify-center text-gray-500 animate-fade-in">
          <BarChart3 className="w-5 h-5 mr-2" />
          <span className="text-sm">
            共 {totalVotes} 人参与投票 · 实时更新中
          </span>
        </div>
      )}

      {!hasVoted && !loading && (
        <div className="mt-6 text-center text-sm text-gray-400 animate-pulse">
          点击选项参与投票
        </div>
      )}
    </div>
  );
};

export default PollSlide;
