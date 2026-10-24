import { ImageIcon } from "lucide-react";
import type { ImageSlot } from "@/lib/data";

type AvatarProps = {
  slot: ImageSlot;
  /** lg = 资料卡 48px，md = 评论 40px，sm = 嵌套 32px */
  size?: "sm" | "md" | "lg";
};

const SIZE = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
} as const;

const FONT = {
  sm: "text-[12px]",
  md: "text-[14px]",
  lg: "text-[17px]",
} as const;

/**
 * 头像三档兜底：
 * 有图 → 显示图片；
 * 没有图但 alt 是 1–2 个字 → 显示这个字（如「留 / Y / M」）；
 * 都没有 → 显示图片占位图标。
 */
export default function Avatar({ slot, size = "md" }: AvatarProps) {
  const box = SIZE[size];

  if (slot.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={slot.src}
        alt={slot.alt}
        width={96}
        height={96}
        className={`${box} flex-none rounded-full border border-line object-cover`}
      />
    );
  }

  const monogram = slot.alt.trim().length <= 2 ? slot.alt.trim() : "";

  return (
    <div
      role="img"
      aria-label={slot.alt}
      className={`${box} grid flex-none select-none place-items-center rounded-full border border-line bg-bg-soft ${
        monogram ? "font-semibold text-muted" : "text-faint"
      }`}
    >
      {monogram ? (
        <span className={`${FONT[size]} leading-none`}>{monogram}</span>
      ) : (
        <ImageIcon className="size-4" strokeWidth={1.5} aria-hidden />
      )}
    </div>
  );
}
