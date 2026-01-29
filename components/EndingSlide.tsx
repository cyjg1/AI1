import React, { useState } from 'react';
import { RotateCcw, Sparkles, CheckCircle2, X } from 'lucide-react';

interface Props {
  title: string;
  content: string[];
  onRestart?: () => void;
}

const EndingSlide: React.FC<Props> = ({ title, content, onRestart }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowQRCode(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      {/* 背景动画元素 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-200 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            AI
          </div>
        ))}
      </div>

      {/* 主内容 */}
      <div className="z-10 text-center max-w-4xl px-8">
        <div className="mb-8 animate-fadeIn">
          <CheckCircle2 className="w-20 h-20 mx-auto mb-6 text-black animate-bounce" />
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-12 leading-tight animate-fadeIn">
          {title}
        </h1>

        <div className="space-y-6 mb-16">
          {content.map((item, idx) => (
            <p
              key={idx}
              className="text-xl md:text-2xl text-gray-700 animate-fadeIn stagger-item"
            >
              {item}
            </p>
          ))}
        </div>

        {/* 交互按钮 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {onRestart && (
            <button
              onClick={onRestart}
              className="group px-10 py-5 bg-white border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-3 hover-lift text-lg font-semibold"
            >
              <RotateCcw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              <span>重新开始</span>
            </button>
          )}

          <button
            onClick={handleClick}
            className="group px-12 py-6 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 hover-lift relative overflow-hidden text-xl font-bold shadow-2xl hover:scale-110"
          >
            <Sparkles className="w-7 h-7" />
            <span>开始实践</span>
            
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-confetti"
                    style={{
                      left: '50%',
                      top: '50%',
                      '--tx': `${(Math.random() - 0.5) * 300}px`,
                      '--ty': `${(Math.random() - 0.5) * 300}px`,
                      animationDelay: `${Math.random() * 0.3}s`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* 二维码模态框 */}
      {showQRCode && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop animate-fadeIn"
          onClick={() => setShowQRCode(false)}
        >
          <div className="relative bg-white rounded-2xl p-8 shadow-2xl zoom-in" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              onClick={() => setShowQRCode(false)}
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">一个平平无奇的二维码</h3>
              <p className="text-gray-600 mb-6">要交作业哦</p>
              
              <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
                <img
                  src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100001572/0554.png"
                  alt="社群二维码"
                  className="w-64 h-64 object-contain"
                  crossOrigin="anonymous"
                />
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                点击任意位置关闭
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        @keyframes confetti {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-confetti {
          animation: confetti 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EndingSlide;
