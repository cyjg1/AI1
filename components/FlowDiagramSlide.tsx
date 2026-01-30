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
    <div className="flex flex-col items-center justify-center h-full py-8 px-8">
      {/* 标题 */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-3 break-words">
          {title}
        </h2>
      </div>

      {/* 流程图 */}
      <div className="w-full max-w-6xl space-y-20">
        {/* 上排 - 4个节点 */}
        <div className="relative">
          {/* 连接线 */}
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-300" />
          
          {/* 节点 */}
          <div className="relative grid grid-cols-4 gap-4">
            {nodes.slice(0, 4).map((node) => (
              <div
                key={node.id}
                className="flex flex-col items-center group"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* 小圆圈 - 黑白风格 */}
                <div
                  className={`w-6 h-6 rounded-full bg-white border-2 border-blue-600 mb-4 transition-all duration-300 cursor-pointer ${
                    hoveredNode === node.id ? 'scale-150 bg-blue-600 shadow-lg' : ''
                  }`}
                />
                
                {/* 标题 */}
                <h3 className={`text-base font-semibold text-center mb-2 transition-colors duration-300 ${
                  hoveredNode === node.id ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {node.title}
                </h3>
                
                {/* 描述 */}
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {node.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 下排 - 2个节点 */}
        <div className="relative">
          {/* 连接线 */}
          <div className="absolute top-3 left-1/4 right-1/4 h-0.5 bg-gray-300" />
          
          {/* 节点 */}
          <div className="relative grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {nodes.slice(4, 6).map((node) => (
              <div
                key={node.id}
                className="flex flex-col items-center group"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* 小圆圈 - 黑白风格 */}
                <div
                  className={`w-6 h-6 rounded-full bg-white border-2 border-blue-600 mb-4 transition-all duration-300 cursor-pointer ${
                    hoveredNode === node.id ? 'scale-150 bg-blue-600 shadow-lg' : ''
                  }`}
                />
                
                {/* 标题 */}
                <h3 className={`text-base font-semibold text-center mb-2 transition-colors duration-300 ${
                  hoveredNode === node.id ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {node.title}
                </h3>
                
                {/* 描述 */}
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {node.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagramSlide;
