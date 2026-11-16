export type Session = {
  number: number;
  title: string;
  part: number;
};

export type TeachingDay = {
  date: string;
  isoDate: string;
  room: string;
  sessionNumbers: number[];
  practical?: { time: string; note: string; room?: string };
  holiday?: string;
  morningEvent?: { title: string; note: string };
};

export const parts = [
  { number: 1, range: "01–05", title: "Foundations, Prompting & Evaluation", question: "How do models generate—and how can we compare them reliably?" },
  { number: 2, range: "06–08", title: "Transformer Architecture", question: "How does a modern decoder represent and transform a sequence?" },
  { number: 3, range: "09–12", title: "Pretraining, Alignment & Model Updates", question: "How are capabilities learned, aligned, and revised?" },
  { number: 4, range: "13–16", title: "Retrieval & RAG", question: "How can external knowledge make answers verifiable?" },
  { number: 5, range: "17–20", title: "Reasoning, Agents & Self-Improvement", question: "How do models plan, act, recover, and improve from feedback?" },
];

export const sessions: Session[] = [
  { number: 1, title: "Generative AI Foundations", part: 1 },
  { number: 2, title: "Tokenization, Embeddings, and Generation", part: 1 },
  { number: 3, title: "Prompt Engineering I: Instructions, Examples, Constraints", part: 1 },
  { number: 4, title: "Prompt Engineering II: Decomposition and Structure", part: 1 },
  { number: 5, title: "LLM Evaluation Foundations", part: 1 },
  { number: 6, title: "Self-Attention", part: 2 },
  { number: 7, title: "Transformer and Decoder-Only Language Models", part: 2 },
  { number: 8, title: "Modern LLM Architecture", part: 2 },
  { number: 9, title: "Pretraining, Data, and Scaling Laws", part: 3 },
  { number: 10, title: "Alignment: SFT and Reinforcement Learning", part: 3 },
  { number: 11, title: "Post-Training and Forgetting", part: 3 },
  { number: 12, title: "Model Editing and Model Merging", part: 3 },
  { number: 13, title: "Retrieval Foundations", part: 4 },
  { number: 14, title: "Vector Search and Indexing", part: 4 },
  { number: 15, title: "RAG Architectures", part: 4 },
  { number: 16, title: "Advanced RAG", part: 4 },
  { number: 17, title: "Reasoning, Planning, and Test-Time Scaling", part: 5 },
  { number: 18, title: "AI Agent Fundamentals", part: 5 },
  { number: 19, title: "Context, Memory, and Harness", part: 5 },
  { number: 20, title: "From Self-Correction to Self-Improvement", part: 5 },
];

export const teachingDays: TeachingDay[] = [
  { date: "09 Sep", isoDate: "2026-09-09", room: "TD001", sessionNumbers: [1, 2] },
  { date: "16 Sep", isoDate: "2026-09-16", room: "TD001", sessionNumbers: [3, 4] },
  { date: "23 Sep", isoDate: "2026-09-23", room: "TD005", sessionNumbers: [5, 6], practical: { time: "14:00–17:00", note: "Lab 01 · Understanding LLM / Transformers" } },
  { date: "30 Sep", isoDate: "2026-09-30", room: "TD005", sessionNumbers: [7, 8], practical: { time: "14:00–17:00", note: "Lab 02 · Prompt Engineering and Systematic Evaluation" } },
  { date: "14 Oct", isoDate: "2026-10-14", room: "TD001", sessionNumbers: [9, 10], practical: { time: "14:00–17:00", note: "Lab 03 · Fine-Tuning and Forgetting" } },
  { date: "21 Oct", isoDate: "2026-10-21", room: "TD005", sessionNumbers: [11, 12], practical: { time: "14:00–17:00", note: "Lab 04 · Model Editing" } },
  { date: "04 Nov", isoDate: "2026-11-04", room: "TD001", sessionNumbers: [13, 14] },
  { date: "11 Nov", isoDate: "2026-11-11", room: "TD001", sessionNumbers: [], holiday: "Armistice Day (public holiday)" },
  { date: "18 Nov", isoDate: "2026-11-18", room: "TD005", sessionNumbers: [15, 16], practical: { time: "14:00–17:00", note: "Lab 05 · Build a Basic RAG System" } },
  { date: "25 Nov", isoDate: "2026-11-25", room: "TD005", sessionNumbers: [17, 18], practical: { time: "14:00–17:00", note: "Lab 06 · Test-Time Scaling" } },
  { date: "02 Dec", isoDate: "2026-12-02", room: "TD005", sessionNumbers: [19, 20], practical: { time: "14:00–17:15", note: "Lab 07 · AI Agent as a Data Scientist" } },
  { date: "09 Dec", isoDate: "2026-12-09", room: "TP119", sessionNumbers: [], morningEvent: { title: "Project presentations", note: "10 groups · 15 minutes each" }, practical: { time: "14:00–17:15", note: "Lab 08 · Fast Inference for Agents: Prefix Caching", room: "TP101" } },
];

export const practicalActivities = [
  "Understanding LLM / Transformers",
  "Prompt Engineering and Systematic Evaluation",
  "Fine-Tuning and Forgetting",
  "Model Editing",
  "Build a Basic RAG System",
  "Test-Time Scaling",
  "AI Agent as a Data Scientist",
  "Fast Inference for Agents: Prefix Caching",
];
