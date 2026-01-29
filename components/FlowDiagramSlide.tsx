import React, { useState } from 'react';

interface FlowNode {
  id: number;
  title: string;
  description: string;
  color: string;
}

interface Props {
  title: string;
  subtitle: string;
  nodes: FlowNode[];
}

const FlowDiagramSlide: React.FC<Props> = ({ title, subtitle, nodes }) => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center h-full py-8">
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black mb-3 break-words">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 break-words">
          {subtitle}
        </p>
      </div>

      {/* 流程图 */}
      <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center px-8">
        {/* 连接线 - 上排 */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {/* 上排三个节点的连接线 */}
          <line x1="20%" y1="35%" x2="50%" y2="35%" stroke="#e5e7eb" strokeWidth="3" strokeDasharray="5,5" />
          <line x1="50%" y1="35%" x2="80%" y2="35%" stroke="#e5e7eb" strokeWidth="3" strokeDasharray="5,5" />
          
          {/* 右侧往下的连接 */}
          <line x1="80%" y1="35%" x2="80%" y2="65%" stroke="#e5e7eb" strokeWidth="3" strokeDasharray="5,5" />
          
          {/* 下排三个节点的连接线 */}
          <line x1="80%" y1="65%" x2="50%" y2="65%" stroke="#e5e7eb" strokeWidth="3" strokeDasharray="5,5" />
          <line x1="50%" y1="65%" x2="20%" y2="65%" stroke="#e5e7eb" strokeWidth="3" strokeDasharray="5,5" />
        </svg>

        {/* 节点容器 */}
        <div className="relative w-full" style={{ zIndex: 1 }}>
          {/* 上排节点 */}
          <div className="grid grid-cols-3 gap-8 mb-32">
            {nodes.slice(0, 3).map((node, index) => (
              <div
                key={node.id}
                className="flex flex-col items-center"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* 圆圈 */}
                <div
                  className={`relative w-32 h-32 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    hoveredNode === node.id ? 'scale-125 shadow-2xl' : 'scale-100 shadow-lg'
                  }`}
                  style={{ backgroundColor: node.color }}
                >
                  <div className="absolute inset-0 rounded-full bg-white opacity-20"></div>
                  <span className="relative text-white font-bold text-lg text-center px-4 z-10">
                    {node.title}
                  </span>
                </div>

                {/* 描述文字 */}
                <div
                  className={`mt-6 text-center transition-all duration-300 ${
                    hoveredNode === node.id ? 'opacity-100 scale-105' : 'opacity-70 scale-100'
                  }`}
                >
                  <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
                    {node.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 下排节点 */}
          <div className="grid grid-cols-3 gap-8">
            {nodes.slice(3, 6).map((node, index) => (
              <div
                key={node.id}
                className="flex flex-col items-center"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* 圆圈 */}
                <div
                  className={`relative w-32 h-32 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    hoveredNode === node.id ? 'scale-125 shadow-2xl' : 'scale-100 shadow-lg'
                  }`}
                  style={{ backgroundColor: node.color }}
                >
                  <div className="absolute inset-0 rounded-full bg-white opacity-20"></div>
                  <span className="relative text-white font-bold text-lg text-center px-4 z-10">
                    {node.title}
                  </span>
                </div>

                {/* 描述文字 */}
                <div
                  className={`mt-6 text-center transition-all duration-300 ${
                    hoveredNode === node.id ? 'opacity-100 scale-105' : 'opacity-70 scale-100'
                  }`}
                >
                  <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
                    {node.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagramSlide;
