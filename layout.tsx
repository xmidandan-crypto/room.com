import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.title} · ${site.name}`,
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.title} · ${site.name}`,
    description: site.description,
    type: "profile",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        {/* 让样式知道「脚本可用」，入场动画才不会在无脚本时把内容藏起来 */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js")',
          }}
        />
        {children}
      </body>
    </html>
  );
}
