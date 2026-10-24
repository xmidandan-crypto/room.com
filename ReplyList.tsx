import { replies } from "@/lib/data";
import { formatCount } from "@/lib/format";
import Avatar from "./Avatar";
import Fill from "./Fill";

export default function ReplyList() {
  return (
    <ol
      id="replies"
      className="flex scroll-mt-14 list-none flex-col gap-6 px-4 md:px-6 lg:px-7"
    >
      {replies.map((reply) => (
        <li key={reply.id} className="flex gap-2.5">
          <Avatar slot={reply.avatar} size="md" />

          <div className="min-w-0 flex-1">
            <p className="text-[15px] leading-relaxed">
              <b className="font-bold">
                <Fill value={reply.name} />
              </b>
              <a
                href="#"
                className="ml-1 text-[14px] text-accent underline decoration-1 underline-offset-[3px]"
              >
                {reply.handle}
              </a>
            </p>

            <p className="mt-0.5 text-[13px] leading-relaxed text-muted">
              回复 <Fill value={reply.to} />：
            </p>

            {/* 描边气泡：页面里唯一的「容器」，12px 圆角 */}
            <p className="mt-2.5 inline-block max-w-full rounded-xl border border-stroke px-4 py-2.5 text-[15px] leading-[1.75] lg:text-[15.5px]">
              <Fill value={reply.body} />
            </p>

            <p className="mt-2.5 text-[13px] leading-[1.75] text-muted">
              <b className="font-bold text-fg">{formatCount(reply.views)}</b> 浏览　
              <b className="font-bold text-fg">{formatCount(reply.likes)}</b> 点赞　
              <b className="font-bold text-fg">{formatCount(reply.reposts)}</b> 转发
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
