import React from 'react';
import { SlideData, SlideType } from '../types';
import { parseTextWithRefs } from '../utils/textParser';
import PollSlide from './PollSlide';
import EndingSlide from './EndingSlide';
import InteractionSlide from './InteractionSlide';
import TimelineSlide from './TimelineSlide';

interface Props {
  slide: SlideData;
  onRestart?: () => void;
}

const SlideRenderer: React.FC<Props> = ({ slide, onRestart }) => {

  const renderContent = () => {
    switch (slide.type) {
      case SlideType.TITLE:
        return (
          <div className="flex flex-col items-start justify-center h-full space-y-6 md:space-y-8">
             <div className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest mb-2 md:mb-4 animate-slideInLeft">
              {slide.module}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-tight animate-fadeIn break-words">
              {slide.title}
            </h1>
            <div className="space-y-3 md:space-y-4 text-xl md:text-2xl text-gray-600 font-light">
              {slide.content?.map((item, idx) => (
                <p key={idx} className="stagger-item break-words">{item}</p>
              ))}
            </div>
          </div>
        );

      case SlideType.QUOTE:
        return (
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 border-b-2 border-black pb-4 hover:border-gray-600 transition-colors duration-300 break-words">{slide.title}</h2>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-900 border-l-8 border-black pl-6 md:pl-8 py-4 mb-8 md:mb-12 leading-snug hover:border-gray-600 hover:pl-10 transition-all duration-300 break-words">
              "{slide.quote}"
            </blockquote>
            <div className="space-y-4 md:space-y-6">
              {slide.content?.map((item, idx) => (
                <div key={idx} className="text-lg md:text-xl text-gray-700 stagger-item hover-lift break-words">
                  {parseTextWithRefs(item)}
                </div>
              ))}
            </div>
          </div>
        );

      case SlideType.POLL:
        return (
          <PollSlide
            slideId={slide.id}
            title={slide.title}
            content={slide.content || []}
            pollOptions={slide.pollOptions || []}
          />
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
                <div key={idx} className="grid grid-cols-4 p-4 border-b border-gray-100 items-start hover:bg-gray-50 transition-all duration-200 group">
                  <div className="font-semibold">{row.col1}</div>
                  <div className="text-gray-600">{row.col2}</div>
                  <div className="text-gray-600">{row.col3}</div>
                  <div className="font-bold bg-black text-white -m-2 p-2 rounded transform group-hover:scale-105 shadow-lg transition-transform duration-200">
                    {row.col4}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case SlideType.ENDING:
        return (
          <EndingSlide
            title={slide.title}
            content={slide.content || []}
            onRestart={onRestart}
          />
        );

      case SlideType.INTERACTION:
        return (
          <InteractionSlide
            title={slide.title}
            content={slide.content || []}
          />
        );

      case SlideType.TIMELINE:
        return (
          <TimelineSlide
            title={slide.title}
            subtitle={slide.quote}
            stages={slide.timelineStages || []}
          />
        );

      case SlideType.IMAGE:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center break-words mb-4">
              {slide.title}
            </h2>
            
            {slide.imageUrl && (
              <div className="relative max-w-5xl w-full flex-1 flex items-center justify-center">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  crossOrigin="anonymous"
                />
              </div>
            )}
            
            {slide.imageCaption && (
              <p className="text-lg md:text-xl text-gray-600 italic text-center break-words">
                {slide.imageCaption}
              </p>
            )}
            
            {slide.content && slide.content.length > 0 && (
              <div className="space-y-3 md:space-y-4 text-center">
                {slide.content.map((item, idx) => (
                  <p key={idx} className="text-base md:text-lg text-gray-700 break-words">
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        );

      case SlideType.CONTENT:
      default:
        return (
          <div className="flex flex-col h-full justify-center">
            <div className="flex justify-between items-baseline mb-8 md:mb-12 border-b-2 border-black pb-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold break-words">{slide.title}</h2>
                {slide.quote && <span className="text-xs md:text-sm font-serif italic text-gray-500 hidden lg:block max-w-md text-right break-words">"{slide.quote}"</span>}
            </div>
            
            <ul className="space-y-6 md:space-y-8">
              {slide.content?.map((item, idx) => (
                <li key={idx} className="flex items-start text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 stagger-item hover-lift transition-all duration-200">
                  <span className="inline-block w-2 h-2 mt-2 md:mt-3 mr-4 md:mr-6 bg-black rounded-full flex-shrink-0" />
                  <span className="break-words">{parseTextWithRefs(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full p-6 md:p-12 lg:p-16 max-w-7xl mx-auto animate-fadeIn overflow-y-auto">
      {/* Module Label (except for Title, Ending, Interaction, Timeline, and Image slides) */}
      {slide.type !== SlideType.TITLE && 
       slide.type !== SlideType.ENDING && 
       slide.type !== SlideType.INTERACTION &&
       slide.type !== SlideType.TIMELINE &&
       slide.type !== SlideType.IMAGE && (
        <div className="absolute top-6 left-6 md:top-8 md:left-12 lg:left-16 text-xs font-bold text-gray-400 uppercase tracking-widest">
           {slide.module}
        </div>
      )}
      
      {renderContent()}
    </div>
  );
};

export default SlideRenderer;