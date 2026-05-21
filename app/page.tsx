import Link from "next/link";

const useCases = ["公众号文章转视频","产品介绍转路演视频","招商加盟资料转短视频","培训 SOP 转课程视频","公司介绍转销售演示","融资 BP 转 Pitch 视频"];

export default function Landing() {
  return <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"><section className="mx-auto max-w-6xl px-6 py-20"><p className="text-blue-300">YunShow Studio｜云演工坊</p><h1 className="mt-3 text-5xl font-bold leading-tight">输入文稿，一键生成可录屏的视频演示</h1><p className="mt-5 max-w-3xl text-slate-300">面向中国企业市场、销售、培训与融资团队的 AI 辅助演示视频工作台。生成结果可直接编辑、现场讲解、录屏发布到视频号、抖音、B站、小红书。</p><div className="mt-8 flex gap-3"><Link className="rounded-xl bg-blue-600 px-6 py-3" href="/generator">开始生成演示</Link><Link className="rounded-xl border border-white/20 px-6 py-3" href="/generator?example=saas">查看示例</Link></div></section><section className="mx-auto max-w-6xl px-6 pb-20"><div className="grid gap-4 md:grid-cols-3">{useCases.map((u)=><div key={u} className="card p-5"><p className="font-semibold">{u}</p><p className="mt-2 text-sm text-slate-300">将已有文稿自动拆分为镜头结构、旁白、要点和视觉建议。</p></div>)}</div><p className="mt-8 text-slate-300">所有生成内容都可在网页里二次编辑，并通过浏览器录屏快速产出可发布视频。</p></section></main>;
}
