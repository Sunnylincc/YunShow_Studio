"use client";
import { useEffect, useState } from "react";
import { PresentationProject } from "@/types/project";
import SceneCanvas from "@/components/SceneCanvas";
import ExportPanel from "@/components/ExportPanel";

export default function PreviewPage() {
  const [p, setP] = useState<PresentationProject | null>(null);
  const [idx, setIdx] = useState(0);
  useEffect(()=>{ const raw = localStorage.getItem("yunshow-project"); if(raw) setP(JSON.parse(raw)); },[]);
  if (!p) return <main className="p-8">暂无项目，请先生成。</main>;
  const scene = p.scenes[idx];
  return <main className="p-5"><h1 className="text-2xl font-bold">{p.projectTitle}</h1><div className="mt-4 grid gap-4 lg:grid-cols-[280px_1fr]"><aside className="card p-3 space-y-2 h-[560px] overflow-auto">{p.scenes.map((s,i)=><button key={s.id} className={`w-full text-left rounded p-2 ${i===idx?"bg-blue-600":"bg-white/5"}`} onClick={()=>setIdx(i)}>{s.title}</button>)}</aside><section className="space-y-3"><div className={`mx-auto ${p.ratio==='16:9'?'aspect-video max-w-4xl':p.ratio==='9:16'?'aspect-[9/16] max-w-sm':'aspect-square max-w-xl'} h-[560px]`}><SceneCanvas scene={scene} tone={p.tone} /></div><div className="flex gap-2"><button className="rounded bg-slate-700 px-3 py-2" onClick={()=>setIdx(Math.max(idx-1,0))}>上一页</button><button className="rounded bg-slate-700 px-3 py-2" onClick={()=>setIdx(Math.min(idx+1,p.scenes.length-1))}>下一页</button></div><ExportPanel project={p} /></section></div></main>;
}
