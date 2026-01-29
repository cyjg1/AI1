import { SlideData, SlideType, Reference } from './types';

export const REFERENCES: Record<string, Reference> = {
  'R1': { id: 'R1', url: 'https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/', title: 'GitHub Copilot Technical Preview' },
  'R2': { id: 'R2', url: 'https://www.cursor.com/', title: 'Cursor IDE' },
  'R3': { id: 'R3', url: 'https://www.cursor.com/blog', title: 'Cursor Composer Beta' },
  'R4': { id: 'R4', url: 'https://docs.anthropic.com/ja/docs/claude-code', title: 'Claude Code Documentation' },
  'R5': { id: 'R5', url: 'https://www.anthropic.com/news', title: 'Claude Code Launch' },
  'R6': { id: 'R6', url: 'https://windsurf.com/', title: 'Windsurf IDE' },
  'R7': { id: 'R7', url: 'https://arstechnica.com/', title: 'Vibe Coding Origin (Andrej Karpathy)' },
  'R8': { id: 'R8', url: 'https://lovable.dev/cloud/', title: 'Lovable.dev' },
  'R9': { id: 'R9', url: 'https://www.marscode.com/', title: 'MarsCode' },
};

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: SlideType.TITLE,
    module: "课程概览",
    title: "AI Coding 通识与新范式",
    content: [
      "从 Vibe Coding 到 Agent 创造者",
      "预计时长：120 分钟"
    ]
  },
  {
    id: 2,
    type: SlideType.QUOTE,
    module: "模块一：新时代已来",
    duration: "0:00 - 0:15",
    title: "不仅仅是工具的升级",
    quote: "AGI 时代已来，AI 不会淘汰人类，但会用 AI 的人一定会淘汰不会用的人。",
    content: [
      "核心隐喻：过去软件是“固定的锤子”，现在 AI 是“无限心智的管理者”。",
      "现状：代码正在自我转化，从静态资产变为动态生产力流。"
    ]
  },
  {
    id: 3,
    type: SlideType.POLL,
    module: "模块一：新时代已来",
    title: "你的位置在哪里？",
    content: ["请选择最符合你当前状态的描述："],
    pollOptions: [
      { id: 'A', label: '观望者', description: '听说过，没怎么用。' },
      { id: 'B', label: '使用者', description: '用 ChatGPT 问问题，写文案。' },
      { id: 'C', label: '协作者', description: '用 Copilot 补全代码。' },
      { id: 'D', label: 'Vibe Coder', description: '已经开始用 AI 生成完整应用。' },
    ]
  },
  {
    id: 4,
    type: SlideType.CONTENT,
    module: "模块二：行业演进",
    duration: "0:15 - 0:40",
    title: "演进总览",
    quote: "不要只看热闹，要看懂技术底层的逻辑变迁。",
    content: [
      "第一阶段：基于统计的自动补全 (2015-2020)",
      "第二阶段：生成式 Copilot 时代 (2021-2024)",
      "第三阶段：Agentic & Vibe Coding (2024-2026)"
    ]
  },
  {
    id: 5,
    type: SlideType.CONTENT,
    module: "模块二：行业演进",
    title: "第一阶段：基于统计的自动补全",
    content: [
      "时间：2015-2020",
      "技术原理：N-gram 或 LSTM。",
      "核心逻辑：像“鹦鹉”一样分析概率分布，预测下一个词。",
      "局限性：缺乏长上下文，只能看当前行。",
      "代表产品：Kite, Tabnine (早期)。"
    ]
  },
  {
    id: 6,
    type: SlideType.CONTENT,
    module: "模块二：行业演进",
    title: "第二阶段：生成式 Copilot 时代",
    content: [
      "时间：2021-2024 [R1]",
      "核心交互：“幽灵文本” (Ghost Text)。",
      "能力跃升：理解意图（读懂函数名/注释）、文件级感知。",
      "里程碑：2021年6月 GitHub Copilot 技术预览版发布。"
    ]
  },
  {
    id: 7,
    type: SlideType.CONTENT,
    module: "模块二：行业演进",
    title: "第三阶段：Agentic & Vibe Coding",
    content: [
      "核心定义：从“补全”变为“代理 (Agent)”。自主规划、执行、自我修正。",
      "2024.07：Cursor 发布 Composer，自然语言驱动整个项目。[R2][R3]",
      "2025.02：Andrej Karpathy 提出 \"Vibe Coding\" —— 只要 vibe 对，代码就对。[R7]",
      "2025：Claude Code 发布，AI 像黑客一样在终端操作。[R4][R5]"
    ]
  },
  {
    id: 8,
    type: SlideType.CONTENT,
    module: "模块三：入局玩家",
    duration: "0:40 - 1:00",
    title: "阵营一：面向非专业开发者",
    quote: "No-Code / Low-Code AI",
    content: [
      "目标人群：产品经理、运营、设计。",
      "核心价值：无需环境，Web 端直接生成。",
      "代表产品：Lovable [R8] (全栈生成), v0 / Replit。",
      "预测：未来 50%-60% 的中小需求将由此实现。"
    ]
  },
  {
    id: 9,
    type: SlideType.CONTENT,
    module: "模块三：入局玩家",
    title: "阵营二：面向专业开发者",
    quote: "AI IDE & Agent",
    content: [
      "目标人群：工程师、全栈开发者。",
      "IDE 类 (桌面)：Cursor, Windsurf [R6], Trae [R9]。",
      "CLI 类 (终端)：Claude Code (适合极客，Agent 能力极强)。",
      "核心价值：深度融入工程流，处理复杂逻辑。"
    ]
  },
  {
    id: 10,
    type: SlideType.CONTENT,
    module: "模块四：核心心法",
    duration: "1:00 - 1:30",
    title: "MVP 思维",
    content: [
      "定义：Minimum Viable Product (最小可行性产品)。",
      "原则：能跑起来 > 完美的架构。",
      "你的新角色：从“砌砖工匠”转变为“包工头 + 设计师”。"
    ]
  },
  {
    id: 11,
    type: SlideType.TABLE,
    module: "模块四：核心心法",
    title: "思维模式碰撞",
    tableData: {
      headers: ["维度", "产品思维 (PM)", "工程思维 (Dev)", "AI 融合思维"],
      rows: [
        { col1: "关注点", col2: "用户的问题是什么？", col3: "怎么实现这个功能？", col4: "如何描述问题？" }, // col4 is AI
        { col1: "产出", col2: "需求文档 (PRD)", col3: "源代码 / API", col4: "可运行的微应用" },
        { col1: "瓶颈", col2: "开发资源不足", col3: "技术栈 / 时间", col4: "想象力 / 描述精度" },
      ]
    }
  },
  {
    id: 12,
    type: SlideType.CONTENT,
    module: "模块四：核心心法",
    title: "新的范式：Agent 研发",
    content: [
      "从“命令式”到“目标导向”：不写 `if (a>b)`，而是写“分析数据，异常报警”。",
      "从“调试代码”到“调试思维链”：观察 AI 为什么选错工具，优化 Prompt。",
      "结果评判：从确定性到概率性。学会与不确定性共舞。"
    ]
  },
  {
    id: 13,
    type: SlideType.CONTENT,
    module: "模块五：实战演示",
    duration: "1:30 - 1:50",
    title: "Vibe Coding 三要素",
    content: [
      "1. Context (上下文)：一次性喂入所有资料（文档、数据库、旧代码）。",
      "2. Instruction (指令)：自然语言清晰描述“要什么”和“不要什么”。",
      "3. Feedback (反馈)：报错直接甩回给 AI，让它自我修正 (Human in the loop)。"
    ]
  },
  {
    id: 14,
    type: SlideType.CONTENT,
    module: "模块五：实战演示",
    title: "演示：从 0 到 1 (OCR 工具)",
    content: [
      "Step 1: 打开 Cursor/Lovable。",
      "Step 2: Prompt “做个网页，支持上传图片，识别导出 Markdown”。",
      "Step 3: 生成与预览。",
      "Step 4: 反馈调整 —— “换个 CSS 风格”，“用更高级的模型”。"
    ]
  },
  {
    id: 15,
    type: SlideType.CONTENT,
    module: "模块六：心态与作业",
    duration: "1:50 - 2:00",
    title: "建立三种心态",
    content: [
      "自主学习：文档和 Changelog 就是教材。",
      "碳硅融合 (AI Native)：把 AI 当环境，像呼吸一样使用。",
      "商业闭环：Code is cheap。能解决问题的成果才值钱。"
    ]
  },
  {
    id: 16,
    type: SlideType.CONTENT,
    module: "模块六：心态与作业",
    title: "课后作业：你的第一个 AI 产品",
    content: [
      "目标：提交一个“可运行的最小产品”。",
      "要求 1：能运行 (Web 或 程序)。",
      "要求 2：有清晰的输入输出流程。",
      "提交形式：1 分钟演示视频。"
    ]
  },
  {
    id: 17,
    type: SlideType.CONTENT,
    module: "附录",
    title: "资源清单",
    content: [
      "Lovable: [R8]",
      "MarsCode: [R9]",
      "Cursor: [R2] [R3]",
      "Windsurf: [R6]",
      "Claude Code: [R4] [R5]",
      "Vibe Coding: [R7]"
    ]
  }
];
