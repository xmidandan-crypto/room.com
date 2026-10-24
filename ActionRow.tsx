"use client";

import { Bookmark, Heart, MessageCircle, Quote, Repeat2 } from "lucide-react";
import { post } from "@/lib/data";
import { formatCount } from "@/lib/format";
import { copyCurrentLink } from "@/lib/share";
import { useEngagement } from "./Engagement";

/** 每个按钮 44px 高，满足最小热区 */
const BTN =
  "flex h-11 min-w-11 items-center gap-1.5 px-1 text-[13px] leading-none text-muted transition-colors";

export default function ActionRow() {
  const { liked, saved, likeCount, saveCount, pop, toggle } = useEngagement();

  return (
    <div className="mt-2 flex items-center justify-between">
      <button
        type="button"
        aria-label={`回复，共 ${post.counts.reply} 条`}
        onClick={() =>
          document
            .getElementById("replies")
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        className={`${BTN} hover:text-accent`}
      >
        <MessageCircle className="size-5" strokeWidth={1.75} aria-hidden />
        <span className="tabular-nums">{formatCount(post.counts.reply)}</span>
      </button>

      <button
        type="button"
        aria-label={`转推，共 ${post.counts.repost} 次`}
        onClick={() => void copyCurrentLink("链接已复制，去转发吧")}
        className={`${BTN} hover:text-accent`}
      >
        <Repeat2 className="size-5" strokeWidth={1.75} aria-hidden />
        <span className="tabular-nums">{formatCount(post.counts.repost)}</span>
      </button>

      <button
        type="button"
        aria-label={`引用，共 ${post.counts.quote} 次`}
        onClick={() => void copyCurrentLink("链接已复制")}
        className={`${BTN} hover:text-accent`}
      >
        <Quote className="size-5" strokeWidth={1.75} aria-hidden />
        <span className="tabular-nums">{formatCount(post.counts.quote)}</span>
      </button>

      <button
        type="button"
        onClick={() => toggle("like")}
        aria-pressed={liked}
        aria-label={`喜欢，共 ${likeCount} 个`}
        className={`${BTN} ${liked ? "text-accent" : "hover:text-accent"}`}
      >
        <Heart
          className={`size-5 ${pop === "like" ? "animate-pop" : ""}`}
          strokeWidth={1.75}
          fill={liked ? "currentColor" : "none"}
          aria-hidden
        />
        <span className="tabular-nums">{formatCount(likeCount)}</span>
      </button>

      <button
        type="button"
        onClick={() => toggle("save")}
        aria-pressed={saved}
        aria-label={`书签，共 ${saveCount} 个`}
        className={`${BTN} ${saved ? "text-accent" : "hover:text-accent"}`}
      >
        <Bookmark
          className={`size-5 ${pop === "save" ? "animate-pop" : ""}`}
          strokeWidth={1.75}
          fill={saved ? "currentColor" : "none"}
          aria-hidden
        />
        <span className="tabular-nums">{formatCount(saveCount)}</span>
      </button>
    </div>
  );
}
