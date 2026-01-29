export enum SlideType {
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  POLL = 'POLL',
  TABLE = 'TABLE',
  QUOTE = 'QUOTE',
  IMAGE = 'IMAGE',
  ENDING = 'ENDING',
  INTERACTION = 'INTERACTION',
}

export interface Reference {
  id: string;
  url: string;
  title: string;
}

export interface PollOption {
  id: string;
  label: string;
  description: string;
}

export interface TableRow {
  col1: string;
  col2: string;
  col3: string;
  col4?: string;
}

export interface SlideData {
  id: number;
  type: SlideType;
  module: string; // The module name (e.g., "模块一")
  title: string;
  content?: string[]; // Bullet points or paragraphs
  quote?: string; // For quote slides or highlight boxes
  pollOptions?: PollOption[]; // For poll slides
  tableData?: {
    headers: string[];
    rows: TableRow[];
  };
  duration?: string; // e.g. "0:00 - 0:15"
  imageUrl?: string; // For image slides
  imageCaption?: string; // Image description
  isInteractive?: boolean; // For interactive questions
}