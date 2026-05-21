import { GeneratorInput, PresentationProject } from "@/types/project";
import { deterministicGenerate } from "./deterministic";

export async function generateWithOptionalAI(input: GeneratorInput): Promise<PresentationProject> {
  if (!input.useAiEnhancement || !input.apiKey) return deterministicGenerate(input);
  // MVP 占位：后续可接入 OpenAI / 兼容 API。
  return deterministicGenerate(input);
}
