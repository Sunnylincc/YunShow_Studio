"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { generateWithOptionalAI } from "@/lib/generator/ai";
import { GeneratorInput, Platform, Ratio, Tone } from "@/types/project";

const platforms: Platform[] = ["视频号","抖音","小红书","B站","企业内训","销售路演","投资人 Pitch"];
const ratios: Ratio[] = ["16:9","9:16","1:1"];
const tones: Tone[] = ["商务专业","科技感","高端路演","知识科普","短视频爆款","温暖品牌"];
const examples: Record<string, string> = {saas:"我们是一家企业级 SaaS 公司，提供流程自动化与数据协同平台，帮助销售、运营、财务团队统一管理业务流程并提升执行效率。", med:"医疗AI项目通过多模态影像算法提升早筛效率，已在多家三甲医院试点。", train:"企业培训课程旨在标准化新员工入职SOP，缩短上手周期并提升服务质量。"};

export default function GeneratorPage() { const router = useRouter(); const sp=useSearchParams(); const ex=sp.get("example")||"";
  const [form, setForm] = useState<GeneratorInput>({projectTitle:"云演工坊演示项目", platform:"视频号", ratio:"16:9", tone:"商务专业", content: examples[ex] || "", customInstruction:"", useAiEnhancement:false, apiKey:""});
  async function onGenerate() { const project = await generateWithOptionalAI(form); localStorage.setItem("yunshow-project", JSON.stringify(project)); router.push("/preview"); }
  return <main className="mx-auto max-w-5xl p-6 space-y-4"><h1 className="text-3xl font-bold">创建演示项目</h1><div className="grid gap-3 md:grid-cols-2">{[["项目标题","projectTitle"],["API Key（可选）","apiKey"]].map(([label,key])=><label key={key} className="space-y-1"><span>{label}</span><input className="w-full rounded bg-slate-900 p-2 border border-white/10" value={(form as any)[key]} onChange={(e)=>setForm({...form,[key]:e.target.value})}/></label>)}</div><div className="grid gap-3 md:grid-cols-3"><select className="rounded bg-slate-900 p-2" value={form.platform} onChange={(e)=>setForm({...form, platform:e.target.value as Platform})}>{platforms.map(p=><option key={p}>{p}</option>)}</select><select className="rounded bg-slate-900 p-2" value={form.ratio} onChange={(e)=>setForm({...form, ratio:e.target.value as Ratio})}>{ratios.map(r=><option key={r}>{r}</option>)}</select><select className="rounded bg-slate-900 p-2" value={form.tone} onChange={(e)=>setForm({...form, tone:e.target.value as Tone})}>{tones.map(t=><option key={t}>{t}</option>)}</select></div><textarea className="w-full min-h-40 rounded bg-slate-900 p-3" placeholder="粘贴文稿内容" value={form.content} onChange={(e)=>setForm({...form, content:e.target.value})}/><textarea className="w-full min-h-24 rounded bg-slate-900 p-3" placeholder="自定义指令（可选）" value={form.customInstruction} onChange={(e)=>setForm({...form, customInstruction:e.target.value})}/><label className="flex items-center gap-2"><input type="checkbox" checked={form.useAiEnhancement} onChange={(e)=>setForm({...form,useAiEnhancement:e.target.checked})}/>Use AI Enhancement（可选）</label><button className="rounded-xl bg-blue-600 px-5 py-3" onClick={onGenerate}>生成演示</button></main>;
}
