import { ImageIcon } from "lucide-react";
import type { ImageSlot } from "@/lib/data";

/** 帖文配图：填了 src 显示图片（hover 放大 1.03），没填显示占位框 */
export default function MediaFrame({ slot }: { slot: ImageSlot }) {
  if (slot.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={slot.src}
        alt={slot.alt}
        width={1200}
        height={515}
        loading="lazy"
        decoding="async"
        className="size-full object-cover transition-transform duration-[550ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="grid size-full place-items-center text-faint">
      <div className="flex flex-col items-center gap-2">
        <ImageIcon className="size-7" strokeWidth={1.25} aria-hidden />
        <span className="text-[12px] leading-none tracking-[.04em]">
          配图 1200 × 515
        </span>
      </div>
    </div>
  );
}
