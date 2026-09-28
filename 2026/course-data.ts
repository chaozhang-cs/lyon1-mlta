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
  practical?: { time: string; note: string };
};

export const parts = [
  { number: 1, range: "01–05", title: "Foundations, Prompting & Evaluation", question: "How do models generate—and how can we compare them reliably?" },
  { number: 2, range: "06–08", title: "Transformer Architecture", question: "How does a modern decoder represent and transform a sequence?" },
  { number: 3, range: "09–12", title: "Pretraining, Alignment & Model Updates", question: "How are capabilities learned, aligned, and revised?" },
  { number: 4, range: "13–16", title: "Retrieval & RAG", question: "How can external knowledge make answers verifiable?" },
  { number: 5, range: "17–24", title: "Reasoning, Agents & Self-Improvement", question: "How do models plan, act, recover, and learn safely?" },
  { number: 6, range: "25–29", title: "Efficient Training & Inference", question: "How do we make model workloads efficient and dependable?" },
  { number: 7, range: "30–33", title: "Foundation Models Beyond Text", question: "How does the paradigm extend to structured and multimodal data?" },
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
  { number: 19, title: "Context and Harness Engineering", part: 5 },
  { number: 20, title: "Agent Memory", part: 5 },
  { number: 21, title: "Self-Correction and Verification", part: 5 },
  { number: 22, title: "Synthetic Experience and Self-Improving Agents", part: 5 },
  { number: 23, title: "Agentic RL", part: 5 },
  { number: 24, title: "Agent Evaluation, Reliability, and Security", part: 5 },
  { number: 25, title: "Training Systems and PEFT", part: 6 },
  { number: 26, title: "LLM Inference Mechanics", part: 6 },
  { number: 27, title: "Long-Context Inference", part: 6 },
  { number: 28, title: "Efficient Serving", part: 6 },
  { number: 29, title: "Serving Stack: vLLM, SGLang, and Caching", part: 6 },
  { number: 30, title: "Tabular Foundation Models", part: 7 },
  { number: 31, title: "Text-to-SQL and Data Agents", part: 7 },
  { number: 32, title: "Graph and Time-Series Foundation Models", part: 7 },
  { number: 33, title: "Annual Frontier", part: 7 },
];

export const teachingDays: TeachingDay[] = [
  { date: "09 Sep", isoDate: "2026-09-09", room: "TD001", sessionNumbers: [1, 2, 3] },
  { date: "16 Sep", isoDate: "2026-09-16", room: "TD001", sessionNumbers: [4, 5, 6] },
  { date: "23 Sep", isoDate: "2026-09-23", room: "TD005", sessionNumbers: [7, 8, 9], practical: { time: "14:00–17:00", note: "Lab 01 · Understanding LLM / Transformers" } },
  { date: "30 Sep", isoDate: "2026-09-30", room: "TD005", sessionNumbers: [10, 11, 12], practical: { time: "14:00–17:00", note: "Lab 02 · Prompt Engineering and Systematic Evaluation" } },
  { date: "14 Oct", isoDate: "2026-10-14", room: "TD001", sessionNumbers: [13, 14, 15], practical: { time: "14:00–17:00", note: "Lab / project block · activity mapping TBC" } },
  { date: "21 Oct", isoDate: "2026-10-21", room: "TD005", sessionNumbers: [16, 17, 18], practical: { time: "14:00–17:00", note: "Lab / project block · activity mapping TBC" } },
  { date: "04 Nov", isoDate: "2026-11-04", room: "TD001", sessionNumbers: [19, 20, 21] },
  { date: "11 Nov", isoDate: "2026-11-11", room: "TD001", sessionNumbers: [22, 23, 24], practical: { time: "14:00–17:00", note: "Lab / project block · activity mapping TBC" } },
  { date: "18 Nov", isoDate: "2026-11-18", room: "TD005", sessionNumbers: [25, 26, 27], practical: { time: "14:00–17:00", note: "Lab / project block · activity mapping TBC" } },
  { date: "25 Nov", isoDate: "2026-11-25", room: "TD005", sessionNumbers: [28, 29, 30], practical: { time: "14:00–17:00", note: "Lab / project block · activity mapping TBC" } },
  { date: "02 Dec", isoDate: "2026-12-02", room: "TD005", sessionNumbers: [31, 32, 33], practical: { time: "14:00–17:15", note: "Lab / project block · activity mapping TBC" } },
];

export const practicalActivities = [
  "Understanding LLM / Transformers",
  "Prompt Engineering and Systematic Evaluation",
  ...Array.from({ length: 6 }, () => "TBC"),
];
