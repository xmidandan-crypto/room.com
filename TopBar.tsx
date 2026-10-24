"use client";

import { ArrowUp, Link2, MoreHorizontal, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data";
import { copyCurrentLink } from "@/lib/share";
import Fill from "./Fill";

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* 滚动超过 4px：出现 1px 底边 */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 点外部 / Esc 关闭菜单 */
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`glass sticky top-0 z-[60] grid h-[53px] grid-cols-[44px_1fr_44px] items-center border-b px-1.5 transition-colors duration-200 md:px-2.5 ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <button
        type="button"
        aria-label="关闭"
        className="grid size-11 place-items-center rounded-full text-fg transition-colors hover:bg-bg-soft"
      >
        <X className="size-5" strokeWidth={1.75} aria-hidden />
      </button>

      <div className="flex min-w-0 flex-col items-center justify-center leading-tight">
        <strong className="max-w-full truncate text-[15px] font-bold tracking-[.01em]">
          <Fill value={site.title} />
        </strong>
        <span className="text-[11px] tracking-[.03em] text-faint">
          <Fill value={site.domain} />
        </span>
      </div>

      <button
        ref={buttonRef}
        type="button"
        aria-label="更多操作"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="grid size-11 place-items-center rounded-full text-fg transition-colors hover:bg-bg-soft"
      >
        <MoreHorizontal className="size-5" strokeWidth={1.75} aria-hidden />
      </button>

      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="更多操作"
          className="absolute right-2 top-[52px] w-[178px] rounded-xl border border-line bg-bg p-1.5 shadow-[0_8px_24px_rgba(0,0,0,.08)]"
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              void copyCurrentLink();
            }}
            className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-left text-[14px] leading-snug text-fg transition-colors hover:bg-bg-soft"
          >
            <Link2 className="size-[18px] text-muted" strokeWidth={1.75} aria-hidden />
            复制链接
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-left text-[14px] leading-snug text-fg transition-colors hover:bg-bg-soft"
          >
            <ArrowUp className="size-[18px] text-muted" strokeWidth={1.75} aria-hidden />
            回到顶部
          </button>
        </div>
      )}
    </header>
  );
}
