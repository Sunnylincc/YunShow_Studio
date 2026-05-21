"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Scene, Tone } from "@/types/project";

const toneStyle: Record<Tone, string> = {
  "商务专业": "from-blue-700 to-slate-900",
  "科技感": "from-cyan-500 to-slate-900",
  "高端路演": "from-amber-500 to-zinc-900",
  "知识科普": "from-slate-100 to-slate-300 text-slate-900",
  "短视频爆款": "from-fuchsia-600 to-orange-500",
  "温暖品牌": "from-rose-400 to-amber-300 text-slate-900"
};

export default function SceneCanvas({ scene, tone }: { scene: Scene; tone: Tone }) {
  return <AnimatePresence mode="wait"><motion.div key={scene.id} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.35}} className={`h-full w-full rounded-2xl bg-gradient-to-br p-8 ${toneStyle[tone]}`}><h3 className="text-3xl font-bold">{scene.title}</h3><p className="mt-4 text-lg opacity-90">{scene.narration}</p><ul className="mt-6 space-y-2">{scene.bullets.map((b)=><li key={b}>• {b}</li>)}</ul><p className="mt-6 text-sm opacity-80">视觉：{scene.visualDirection} ｜ 动效：{scene.animation} ｜ 预计 {scene.durationSec}s</p></motion.div></AnimatePresence>;
}
