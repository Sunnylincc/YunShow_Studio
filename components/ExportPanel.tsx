"use client";
import { PresentationProject } from "@/types/project";
import { codingPrompt, narrationMarkdown, outlineMarkdown, videoToolPrompt } from "@/lib/export/format";

function download(name: string, content: string, type = "text/plain") {
  const blob = new Blob([content], { type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
}

export default function ExportPanel({ project }: { project: PresentationProject }) {
  return <div className="card p-4 space-y-3"><h4 className="text-xl font-semibold">导出与录制</h4><div className="flex flex-wrap gap-2 text-sm"> 
    <button className="px-3 py-2 rounded bg-blue-600" onClick={()=>download(`${project.projectTitle}-大纲.md`, outlineMarkdown(project))}>下载大纲 Markdown</button>
    <button className="px-3 py-2 rounded bg-blue-600" onClick={()=>download(`${project.projectTitle}-旁白.md`, narrationMarkdown(project))}>下载旁白 Markdown</button>
    <button className="px-3 py-2 rounded bg-blue-600" onClick={()=>download(`${project.projectTitle}-scene-plan.json`, JSON.stringify(project,null,2), "application/json")}>下载场景 JSON</button>
    <button className="px-3 py-2 rounded bg-slate-700" onClick={()=>navigator.clipboard.writeText(videoToolPrompt(project))}>复制 AI 视频工具 Prompt</button>
    <button className="px-3 py-2 rounded bg-slate-700" onClick={()=>navigator.clipboard.writeText(codingPrompt(project))}>复制 Coding Agent Prompt</button>
  </div><p className="text-sm text-slate-300">录制建议：1) 用 OBS 录制浏览器窗口；2) 浏览器全屏 + 系统录屏；3) 导入剪映（CapCut）补字幕与配乐。</p></div>;
}
