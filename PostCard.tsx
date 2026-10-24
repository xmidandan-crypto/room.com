import { Pin } from "lucide-react";
import { post } from "@/lib/data";
import { formatCount } from "@/lib/format";
import ActionRow from "./ActionRow";
import Fill from "./Fill";
import MediaFrame from "./MediaFrame";

export default function PostCard() {
  return (
    <article id="post" className="scroll-mt-14 px-4 pt-3 md:px-6 lg:px-7">
      {post.pinned && (
        <p className="mt-1 flex items-center gap-1.5 text-[12px] leading-relaxed text-muted">
          <Pin className="size-3.5" strokeWidth={1.75} aria-hidden />
          置顶
        </p>
      )}

      {/* 正文：右对齐、行高 1.9、每行一个短句 */}
      <div className="mt-3.5 space-y-2 text-right text-[17px] leading-[2] tracking-[.02em] text-pretty lg:text-[18px]">
        {post.lines.map((line, index) => (
          <p key={index}>
            <Fill value={line} />
          </p>
        ))}
      </div>

      {/* 斜杠词组 */}
      <div className="mt-4 space-y-1 text-right text-[15px] leading-[1.95] tracking-[.02em] text-muted lg:text-[15.5px]">
        {post.tags.map((tag, index) => (
          <p key={index}>
            <Fill value={tag} />
          </p>
        ))}
      </div>

      {/* @提及 */}
      <p className="mt-4 text-right text-[14px] leading-relaxed">
        <a
          href="#"
          className="inline-block rounded-md bg-[var(--c-accent-soft)] px-2 py-0.5 text-accent transition-colors hover:underline"
        >
          @ <Fill value={post.mention} />
        </a>
      </p>

      {/* 配图：2.33:1、16px 圆角、1px 描边 */}
      <figure
        className="group mt-5 overflow-hidden rounded-2xl border border-line bg-bg-soft"
        style={{ aspectRatio: post.media.ratio ?? "2.33 / 1" }}
      >
        <MediaFrame slot={post.media} />
      </figure>

      <p className="mt-4 text-[13px] leading-[1.8] text-muted">
        <Fill value={post.timestamp} />
      </p>

      <p className="mt-2 flex flex-wrap items-center gap-x-4 text-[13px] leading-[1.8] text-muted">
        <span>
          <b className="font-bold text-fg">{formatCount(post.views)}</b> 浏览
        </span>
        <span>
          <b className="font-bold text-fg">{formatCount(post.counts.like)}</b> 点赞
        </span>
        <span>
          <b className="font-bold text-fg">{formatCount(post.counts.repost)}</b> 转发
        </span>
      </p>

      <ActionRow />
    </article>
  );
}
