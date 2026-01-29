import React, { useState } from 'react';
import { Hand } from 'lucide-react';

interface Props {
  title: string;
  content: string[];
}

const InteractionSlide: React.FC<Props> = ({ title, content }) => {
  const [raisedHands, setRaisedHands] = useState<boolean[]>(content.map(() => false));

  const toggleHand = (index: number) => {
    setRaisedHands(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="flex flex-col h-full justify-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 border-b-2 border-black pb-4 break-words">
        {title}
      </h2>
      
      <div className="space-y-6 md:space-y-8">
        {content.map((question, idx) => (
          <div
            key={idx}
            className="group p-6 md:p-8 border-2 border-gray-200 rounded-lg hover:border-black hover:shadow-xl transition-all duration-300 hover-lift cursor-pointer"
            onClick={() => toggleHand(idx)}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-lg md:text-xl lg:text-2xl font-medium flex-1 break-words">
                {question}
              </p>
              
              <button
                className={`ml-6 p-4 rounded-full transition-all duration-300 ${
                  raisedHands[idx]
                    ? 'bg-black text-white scale-110'
                    : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                }`}
              >
                <Hand
                  className={`w-6 h-6 ${raisedHands[idx] ? 'animate-bounce' : ''}`}
                />
              </button>
            </div>
            
            {raisedHands[idx] && (
              <div className="mt-4 text-sm text-gray-500 animate-fade-in">
                ✓ 已举手回应
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-500">
        <p className="text-lg">点击问题卡片举手回应</p>
      </div>
    </div>
  );
};

export default InteractionSlide;
