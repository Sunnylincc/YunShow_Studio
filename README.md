# YunShow Studio（云演工坊）

> 中文优先的 AI 辅助商业演示视频工作台：输入文稿，一键生成可录屏的视频演示。

## 项目简介（What is YunShow Studio）
YunShow Studio（云演工坊）是一个面向中国企业场景的 Web 应用。它把公众号文章、产品资料、路演文稿、培训 SOP、融资 BP 等内容，快速转换为可编辑的演示视频项目（分镜 + 旁白 + 页面视觉建议）。

## 为什么做这个项目（Why it exists）
企业团队常见痛点是“有内容，缺视频表达”。云演工坊通过结构化生成与可视化预览，降低从文稿到视频演示的制作门槛。

## 目标用户（Target users）
- 市场与品牌团队
- 销售与解决方案团队
- 企业培训团队
- 创业公司创始人/融资团队
- 咨询与教育服务团队

## 核心功能（Features）
- 中文落地页与业务场景展示
- 生成器页面：标题、平台、比例、风格、文稿输入、自定义指令、可选 AI 增强
- 本地确定性生成引擎（无 API Key 也可用）
- 6~8 场景结构化输出：标题、旁白、要点、视觉方向、动效建议、时长
- 预览页：左侧场景列表 + 右侧画布 + 比例适配 + 切页 + 动画
- 导出：大纲 Markdown、旁白 Markdown、场景 JSON、Prompt 复制
- 内置示例：SaaS 产品介绍 / 医疗 AI 路演 / 企业培训课程

## 快速开始（Quick Start）
```bash
npm install
npm run dev
```
打开 http://localhost:3000

## 本地开发（Local development）
- 技术栈：Next.js 15 + TypeScript + Tailwind + Framer Motion
- 关键目录：
  - `app/` 页面
  - `components/` UI 组件
  - `lib/generator/` 生成器（确定性 + AI 占位）
  - `lib/export/` 导出格式
  - `types/` 类型定义
  - `examples/` 示例文案

## 无 AI API 的使用方式（No API required）
默认使用本地规则引擎。即使不开启 AI Enhancement 或不填写 API Key，也能完整生成并导出项目。

## 部署到 Vercel（Deploy to Vercel）
1. Push 到 GitHub
2. 在 Vercel 导入仓库
3. Framework 选择 Next.js
4. 构建命令 `npm run build`，输出默认

## 部署到 Cloudflare Pages（Deploy to Cloudflare Pages）
1. 连接 Git 仓库
2. 构建命令 `npm run build`
3. 使用 Next.js 兼容部署方案（如 OpenNext / 官方适配）

## AI 集成计划（Future AI integration）
`lib/generator/ai.ts` 已预留接口，后续可接入 OpenAI 或兼容 API，实现：
- 智能分镜重写
- 受众导向表达优化
- 风格化文案增强
- 可控时长与节奏重排

## Roadmap
- [ ] 场景内文本在线编辑
- [ ] 模板主题市场
- [ ] 一键字幕与配音脚本
- [ ] 团队协作与版本管理

## License
MIT

---

## English (Brief)
YunShow Studio is a Chinese-first AI-assisted business presentation video studio. It transforms documents into editable web-based presentation-video projects with scene plans, narration, visual directions, and exportable assets. MVP works without any API key.
