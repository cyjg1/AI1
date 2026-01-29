import React, { useState } from 'react';
import { parseTextWithRefs } from '../utils/textParser';

interface TimelineStage {
  number: string;
  period: string;
  title: string;
  description: string[];
  image?: string;
  caption?: string;
  tools: string[];
}

interface Props {
  title: string;
  subtitle?: string;
  stages: TimelineStage[];
}

const TimelineSlide: React.FC<Props> = ({ title, subtitle, stages }) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // ESC键关闭图片
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedImage) {
        setExpandedImage(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [expandedImage]);

  const stageColors = ['#3B82F6', '#8B5CF6', '#10B981']; // 蓝、紫、绿

  return (
    <>
      <div className="flex flex-col h-full justify-start py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2 break-words">{title}</h2>
          {subtitle && (
            <p className="text-base md:text-lg text-gray-600 italic break-words">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 flex-1 overflow-y-auto pb-4">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-gray-300 flex flex-col"
            >
              {/* 标题区 */}
              <div className="mb-4">
                <div
                  className="text-5xl font-black mb-2"
                  style={{ color: stageColors[index] }}
                >
                  {stage.number}
                </div>
                <div className="text-sm text-gray-500 mb-3">{stage.period}</div>
                <h3 className="text-xl font-bold">{stage.title}</h3>
              </div>

              {/* 描述文字 */}
              <div className="mb-4 space-y-2.5 text-sm text-gray-700 flex-shrink-0">
                {stage.description.map((desc, idx) => (
                  <div key={idx} className="leading-relaxed flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-1.5 bg-current rounded-full flex-shrink-0" style={{ color: stageColors[index] }} />
                    <span className="flex-1">{parseTextWithRefs(desc)}</span>
                  </div>
                ))}
              </div>

              {/* 图片展示 */}
              {stage.image && (
                <div className="mb-4 flex-1 flex flex-col min-h-[180px]">
                  <div
                    className="relative rounded-lg overflow-hidden border-2 border-gray-200 cursor-pointer hover:border-gray-400 transition-all group flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg"
                    onClick={() => setExpandedImage(stage.image!)}
                  >
                    <img
                      src={stage.image}
                      alt={stage.caption || stage.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <span className="text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full">
                        点击放大
                      </span>
                    </div>
                  </div>
                  {stage.caption && (
                    <p className="text-xs text-gray-500 italic text-center mt-2">
                      {stage.caption}
                    </p>
                  )}
                </div>
              )}

              {/* 工具标签 */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                {stage.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold hover:bg-gray-800 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 图片放大模态框 */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop animate-fadeIn"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] p-4">
            <img
              src={expandedImage}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl zoom-in"
              crossOrigin="anonymous"
            />
            <button
              className="absolute top-8 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              onClick={() => setExpandedImage(null)}
            >
              <span className="text-2xl text-gray-600">×</span>
            </button>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
              点击任意位置关闭 · ESC键关闭
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TimelineSlide;
