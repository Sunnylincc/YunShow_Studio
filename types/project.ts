export type Platform = "视频号" | "抖音" | "小红书" | "B站" | "企业内训" | "销售路演" | "投资人 Pitch";
export type Ratio = "16:9" | "9:16" | "1:1";
export type Tone = "商务专业" | "科技感" | "高端路演" | "知识科普" | "短视频爆款" | "温暖品牌";

export interface Scene {
  id: string;
  title: string;
  narration: string;
  bullets: string[];
  visualDirection: string;
  animation: string;
  durationSec: number;
}

export interface PresentationProject {
  projectTitle: string;
  subtitle: string;
  audience: string;
  platform: Platform;
  ratio: Ratio;
  tone: Tone;
  scenes: Scene[];
  sourceContent: string;
}

export interface GeneratorInput {
  projectTitle: string;
  platform: Platform;
  ratio: Ratio;
  tone: Tone;
  content: string;
  customInstruction?: string;
  useAiEnhancement?: boolean;
  apiKey?: string;
}
