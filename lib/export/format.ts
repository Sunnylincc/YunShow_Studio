import { PresentationProject } from "@/types/project";

export const outlineMarkdown = (p: PresentationProject) => `# ${p.projectTitle}\n\n${p.subtitle}\n\n受众：${p.audience}\n\n${p.scenes.map(s=>`## ${s.title}\n- ${s.bullets.join("\n- ")}`).join("\n\n")}`;
export const narrationMarkdown = (p: PresentationProject) => `# ${p.projectTitle}｜旁白稿\n\n${p.scenes.map(s=>`## ${s.title}\n${s.narration}`).join("\n\n")}`;
export const videoToolPrompt = (p: PresentationProject) => `请基于以下中文演示脚本生成${p.ratio}比例的视频分镜，风格为${p.tone}：\n${p.scenes.map(s=>`${s.title}：${s.narration}`).join("\n")}`;
export const codingPrompt = (p: PresentationProject) => `请作为前端工程师，将该演示定制为更强互动版，保留${p.ratio}与${p.tone}视觉规范，项目 JSON：\n${JSON.stringify(p,null,2)}`;
