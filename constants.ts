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
      "核心隐喻：过去软件是「固定的锤子」，现在 AI 是「无限心智的管理者」。",
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
    type: SlideType.INTERACTION,
    module: "模块一：破冰环节",
    title: "三个问题",
    content: [
      "你过去一周有没有用过 AI？",
      "你有没有用 AI 帮你完成过一个完整任务？",
      "你有没有用 AI 完成过一个「能跑起来的东西」？"
    ],
    isInteractive: true
  },
  {
    id: 5,
    type: SlideType.CONTENT,
    module: "模块一：破冰环节",
    title: "常见心态误区",
    content: [
      "等着别人教 → 迭代速度太快，没人能把所有东西都教会你",
      "觉得 AI 发展没这么快 → 已经有人用 AI 几分钟做出你一周的工作量",
      "不知道 AI 到底是什么 → 今天就是来搞清楚的",
      "过渡语：先把心态放对，我们再进入主张与目标。"
    ]
  },
  {
    id: 6,
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
    id: 7,
    type: SlideType.CONTENT,
    module: "模块二：行业演进",
    title: "第一阶段：基于统计的自动补全",
    content: [
      "时间：2015-2020",
      "技术原理：N-gram 或 LSTM。",
      "核心逻辑：像「鹦鹉」一样分析概率分布，预测下一个词。",
      "局限性：缺乏长上下文，只能看当前行。",
      "代表产品：Kite, Tabnine (早期)。"
    ]
  },
  {
    id: 8,
    type: SlideType.CONTENT,
    module: "模块二：行业演进",
    title: "第二阶段：生成式 Copilot 时代",
    content: [
      "时间：2021-2024 [R1]",
      "核心交互：「幽灵文本」(Ghost Text)。",
      "能力跃升：理解意图（读懂函数名/注释）、文件级感知。",
      "里程碑：2021年6月 GitHub Copilot 技术预览版发布。"
    ]
  },
  {
    id: 9,
    type: SlideType.CONTENT,
    module: "模块二：行业演进",
    title: "第三阶段：Agentic & Vibe Coding",
    content: [
      "核心定义：从「补全」变为「代理」(Agent)。自主规划、执行、自我修正。",
      "2024.07：Cursor 发布 Composer，自然语言驱动整个项目。[R2][R3]",
      "2025.02：Andrej Karpathy 提出 \"Vibe Coding\" —— 只要 vibe 对，代码就对。[R7]",
      "2025：Claude Code 发布，AI 像黑客一样在终端操作。[R4][R5]"
    ]
  },
  {
    id: 10,
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
    id: 11,
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
    id: 12,
    type: SlideType.CONTENT,
    module: "模块三：场景案例",
    title: "场景案例：文档整理助手",
    content: [
      "需求：文档多、难检索、格式不统一",
      "输入：各类文档（PDF、Word、图片）",
      "处理流程：上传 → AI 归类 → 提取关键信息 → 生成摘要",
      "输出：结构化的知识库 + 智能检索",
      "技术选型：OCR + 文本理解模型 + 向量数据库"
    ]
  },
  {
    id: 13,
    type: SlideType.CONTENT,
    module: "模块三：场景案例",
    title: "场景案例：OCR 小工具",
    content: [
      "需求：图片内容难以复制和编辑",
      "输入：拍照或上传图片",
      "处理流程：图像识别 → 文字提取 → 格式优化",
      "输出：可编辑的 Markdown 或纯文本",
      "适用场景：会议白板、纸质资料、书籍摘录",
      "轻互动：你能想到一个自己的小需求吗？"
    ]
  },
  {
    id: 14,
    type: SlideType.CONTENT,
    module: "模块四：核心心法",
    duration: "1:00 - 1:30",
    title: "MVP 思维",
    content: [
      "定义：Minimum Viable Product (最小可行性产品)。",
      "原则：能跑起来 > 完美的架构。",
      "你的新角色：从「砌砖工匠」转变为「包工头 + 设计师」。",
      "课堂练习：请用一句话写出你的 MVP —— 输入 → 处理 → 输出"
    ]
  },
  {
    id: 15,
    type: SlideType.TABLE,
    module: "模块四：核心心法",
    title: "思维模式碰撞",
    tableData: {
      headers: ["维度", "产品思维 (PM)", "工程思维 (Dev)", "AI 融合思维"],
      rows: [
        { col1: "关注点", col2: "用户的问题是什么？", col3: "怎么实现这个功能？", col4: "如何描述问题？" },
        { col1: "产出", col2: "需求文档 (PRD)", col3: "源代码 / API", col4: "可运行的微应用" },
        { col1: "瓶颈", col2: "开发资源不足", col3: "技术栈 / 时间", col4: "想象力 / 描述精度" },
      ]
    }
  },
  {
    id: 16,
    type: SlideType.CONTENT,
    module: "模块四：核心心法",
    title: "新的范式：Agent 研发",
    content: [
      "从「命令式」到「目标导向」：不写 `if (a>b)`，而是写「分析数据，异常报警」。",
      "从「调试代码」到「调试思维链」：观察 AI 为什么选错工具，优化 Prompt。",
      "结果评判：从确定性到概率性。学会与不确定性共舞。"
    ]
  },
  {
    id: 17,
    type: SlideType.CONTENT,
    module: "模块四：Agent 流程",
    title: "Agent 工作流程拆解",
    content: [
      "1. 明确目标：理解用户意图，确定最终产物",
      "2. 拆解任务：将大目标分解为可执行的小步骤",
      "3. 调用工具：根据任务选择合适的工具和API",
      "4. 自检/纠错：执行后验证结果，发现问题自动修正",
      "5. 输出结果并复盘：总结经验，优化下次执行"
    ]
  },
  {
    id: 18,
    type: SlideType.CONTENT,
    module: "模块五：实战演示",
    duration: "1:30 - 1:50",
    title: "Vibe Coding 三要素",
    content: [
      "1. Context (上下文)：一次性喂入所有资料（文档、数据库、旧代码）。",
      "2. Instruction (指令)：自然语言清晰描述「要什么」和「不要什么」。",
      "3. Feedback (反馈)：报错直接甩回给 AI，让它自我修正 (Human in the loop)。"
    ]
  },
  {
    id: 19,
    type: SlideType.CONTENT,
    module: "模块五：Context 详解",
    title: "Context：上下文的艺术",
    content: [
      "为什么重要：AI 需要足够的信息才能做出正确决策",
      "怎么提供：文档、已有代码、数据格式、设计稿、参考案例",
      "最佳实践：使用 @文件名 直接引入上下文",
      "避免：信息过载，提供无关内容"
    ]
  },
  {
    id: 20,
    type: SlideType.CONTENT,
    module: "模块五：Instruction 详解",
    title: "Instruction：清晰的指令",
    content: [
      "好的指令：目标明确 + 约束条件 + 期望格式",
      "示例：「做一个任务管理网页，使用 React，卡片式布局，支持拖拽排序，不要使用第三方UI库」",
      "技巧：先说要什么，再说不要什么",
      "避免：模糊的需求，「做个好看的界面」"
    ]
  },
  {
    id: 21,
    type: SlideType.CONTENT,
    module: "模块五：Feedback 详解",
    title: "Feedback：迭代的力量",
    content: [
      "Human in the loop：人类负责判断和引导，AI 负责执行",
      "快速迭代：看到问题立即反馈，不要等到最后",
      "报错处理：直接把错误信息甩给 AI，它通常能自己修复",
      "精细调整：「按钮再大一点」、「颜色改成蓝色系」"
    ]
  },
  {
    id: 22,
    type: SlideType.CONTENT,
    module: "模块五：实战演示",
    title: "演示：从 0 到 1 (OCR 工具)",
    content: [
      "Step 1: 打开 Cursor/Lovable。",
      "Step 2: Prompt 「做个网页，支持上传图片，识别导出 Markdown」。",
      "Step 3: 生成与预览。",
      "Step 4: 反馈调整 —— 「换个 CSS 风格」，「用更高级的模型」。",
      "Step 5: 部署上线，分享给团队。"
    ]
  },
  {
    id: 23,
    type: SlideType.CONTENT,
    module: "模块六：心态与作业",
    duration: "1:50 - 2:05",
    title: "建立三种心态",
    content: [
      "自主学习：文档和 Changelog 就是教材。没人能把所有东西教给你。",
      "碳硅融合 (AI Native)：把 AI 当环境，像呼吸一样使用。",
      "商业闭环：Code is cheap。能解决问题的成果才值钱。"
    ]
  },
  {
    id: 24,
    type: SlideType.CONTENT,
    module: "模块六：0→1 路径",
    title: "从 0 到 1 的四步路径",
    content: [
      "第一步：先会用 - 提问、总结、生成内容",
      "第二步：再会拆 - 把大任务拆成可执行的小步骤",
      "第三步：再会编排 - 让 AI 按流程自动执行",
      "第四步：最后会复盘 - 总结方法，形成可复制的模式"
    ]
  },
  {
    id: 25,
    type: SlideType.INTERACTION,
    module: "模块六：自我检视",
    title: "你现在在哪一步？",
    content: [
      "思考：你现在处于哪个阶段？",
      "行动：下一步要做什么？",
      "目标：下次课前，至少前进一步"
    ],
    isInteractive: true
  },
  {
    id: 26,
    type: SlideType.CONTENT,
    module: "模块六：作业说明",
    duration: "2:05 - 2:15",
    title: "课后作业：你的第一个 AI 产品",
    content: [
      "任务：下次课前，完成一个「可运行的最小产品」",
      "最低要求：能运行 + 有清晰输入/输出 + 有一条完整流程",
      "提交方式：1 分钟演示视频",
      "简短说明：问题是什么 / 你的方案 / MVP 定义 / 下一步计划"
    ]
  },
  {
    id: 27,
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
  },
  {
    id: 28,
    type: SlideType.ENDING,
    module: "课程结束",
    title: "从现在开始，做一个会用 AI 的人",
    content: [
      "今天你只需要得到一个「可以开始」的思路。",
      "记住：AI 不会淘汰人类，但会用 AI 的人会淘汰不会用的人。",
      "下次课见！"
    ]
  }
];
