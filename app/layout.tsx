import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YunShow Studio｜云演工坊",
  description: "输入文稿，一键生成可录屏的视频演示"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
