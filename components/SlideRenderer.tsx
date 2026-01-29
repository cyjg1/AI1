import React, { useState } from 'react';
import { SlideData, SlideType } from '../types';
import { parseTextWithRefs } from '../utils/textParser';

interface Props {
  slide: SlideData;
}

const SlideRenderer: React.FC<Props> = ({ slide }) => {
  const [pollSelection, setPollSelection] = useState<string | null>(null);

  const renderContent = () => {
    switch (slide.type) {
      case SlideType.TITLE:
        return (
          <div className="flex flex-col items-start justify-center h-full space-y-8">
             <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
              {slide.module}
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="space-y-4 text-2xl text-gray-600 font-light">
              {slide.content?.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
        );

      case SlideType.QUOTE:
        return (
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl font-bold mb-12 border-b-2 border-black pb-4">{slide.title}</h2>
            <blockquote className="text-4xl md:text-5xl font-serif italic text-gray-900 border-l-8 border-black pl-8 py-4 mb-12 leading-snug">
              "{slide.quote}"
            </blockquote>
            <div className="space-y-6">
              {slide.content?.map((item, idx) => (
                <div key={idx} className="text-xl text-gray-700">
                  {parseTextWithRefs(item)}
                </div>
              ))}
            </div>
          </div>
        );

      case SlideType.POLL:
        return (
          <div className="flex flex-col h-full justify-center">
            <h2 className="text-4xl font-bold mb-8">{slide.title}</h2>
            <p className="text-xl mb-8 text-gray-600">{slide.content?.[0]}</p>
            <div className="grid grid-cols-1 gap-4">
              {slide.pollOptions?.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setPollSelection(option.id)}
                  className={`p-6 text-left border-2 rounded-lg transition-all duration-200 group ${
                    pollSelection === option.id
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold mr-4 ${
                       pollSelection === option.id ? 'bg-white text-black' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {option.id}
                    </span>
                    <div>
                      <div className="font-bold text-lg">{option.label}</div>
                      <div className={`text-sm ${pollSelection === option.id ? 'text-gray-300' : 'text-gray-500'}`}>
                        {option.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {pollSelection && (
               <div className="mt-6 text-center text-sm text-gray-400 animate-fade-in">
                  Poll Answer Recorded (Simulation)
               </div>
            )}
          </div>
        );

      case SlideType.TABLE:
        return (
          <div className="flex flex-col h-full justify-center">
             <div className="flex justify-between items-baseline mb-8 border-b border-gray-200 pb-4">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <span className="text-gray-400">{slide.module}</span>
            </div>
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <div className="grid grid-cols-4 bg-gray-50 p-4 font-bold border-b border-gray-200">
                {slide.tableData?.headers.map((h, i) => (
                  <div key={i} className={i === 3 ? "text-black" : "text-gray-600"}>{h}</div>
                ))}
              </div>
              {slide.tableData?.rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-4 p-4 border-b border-gray-100 items-start hover:bg-gray-50 transition-colors">
                  <div className="font-semibold">{row.col1}</div>
                  <div className="text-gray-600">{row.col2}</div>
                  <div className="text-gray-600">{row.col3}</div>
                  <div className="font-bold bg-black text-white -m-2 p-2 rounded transform scale-105 shadow-lg">
                    {row.col4}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case SlideType.CONTENT:
      default:
        return (
          <div className="flex flex-col h-full justify-center">
            <div className="flex justify-between items-baseline mb-12 border-b-2 border-black pb-4">
                <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
                {slide.quote && <span className="text-sm font-serif italic text-gray-500 hidden md:block max-w-md text-right">"{slide.quote}"</span>}
            </div>
            
            <ul className="space-y-8">
              {slide.content?.map((item, idx) => (
                <li key={idx} className="flex items-start text-xl md:text-2xl leading-relaxed text-gray-800">
                  <span className="inline-block w-2 h-2 mt-3 mr-6 bg-black rounded-full flex-shrink-0" />
                  <span>{parseTextWithRefs(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full p-8 md:p-16 max-w-6xl mx-auto animate-fadeIn">
      {/* Module Label (except for Title slide which handles it differently) */}
      {slide.type !== SlideType.TITLE && (
        <div className="absolute top-8 left-8 md:left-16 text-xs font-bold text-gray-400 uppercase tracking-widest">
           {slide.module} {slide.duration ? `• ${slide.duration}` : ''}
        </div>
      )}
      
      {renderContent()}
    </div>
  );
};

export default SlideRenderer;