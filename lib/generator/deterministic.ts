import { GeneratorInput, PresentationProject, Scene } from "@/types/project";

const fallback = "我们提供一个面向中国企业的视频演示生产流程，帮助市场、销售、培训与管理团队快速把文稿转成可录屏演示。";

const sceneFrames = ["洞察与问题", "方案定位", "核心价值", "产品能力", "落地案例", "实施路径", "商业价值", "行动号召"];

export function deterministicGenerate(input: GeneratorInput): PresentationProject {
  const content = input.content.trim().length > 30 ? input.content.trim() : fallback;
  const lines = content.split(/[。！？\n]/).map((s) => s.trim()).filter(Boolean);
  const scenes: Scene[] = sceneFrames.slice(0, 8).map((frame, i) => {
    const pick = lines[i % lines.length] ?? fallback;
    return {
      id: `scene-${i + 1}`,
      title: `${i + 1}. ${frame}`,
      narration: `在本节我们聚焦“${frame}”。${pick}，并围绕${input.platform}场景给出可执行表达。`,
      bullets: [
        `重点信息：${pick.slice(0, 28)}`,
        `平台适配：${input.platform} / ${input.ratio}`,
        `表达风格：${input.tone}`
      ],
      visualDirection: `${input.tone}风格卡片布局、强调关键词与数据编号`,
      animation: i % 2 === 0 ? "淡入上浮 + 关键句高亮" : "横向推入 + 列表逐条显现",
      durationSec: i === 0 || i === 7 ? 14 : 18
    };
  });

  return {
    projectTitle: input.projectTitle || "云演工坊智能演示项目",
    subtitle: `输入文稿，一键生成可录屏的视频演示｜${input.platform}`,
    audience: input.platform.includes("投资") ? "投资人与管理层" : "企业客户与业务团队",
    platform: input.platform,
    ratio: input.ratio,
    tone: input.tone,
    scenes,
    sourceContent: content
  };
}
