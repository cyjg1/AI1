import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}

const Controls: React.FC<Props> = ({ current, total, onNext, onPrev }) => {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className="fixed bottom-8 right-8 flex items-center space-x-6 z-50">
      <div className="text-sm font-mono text-gray-400 select-none">
        {current + 1} <span className="mx-1">/</span> {total}
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`p-3 rounded-full transition-all duration-200 ${
            isFirst
              ? 'text-gray-200 cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-1'
          }`}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={onNext}
          disabled={isLast}
          className={`p-3 rounded-full transition-all duration-200 ${
            isLast
              ? 'text-gray-200 cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-1'
          }`}
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Controls;
