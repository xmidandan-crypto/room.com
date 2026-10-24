import { formatCount } from "@/lib/format";
import { profile } from "@/lib/data";
import Avatar from "./Avatar";
import Fill from "./Fill";

export default function ProfileHeader() {
  return (
    <section className="flex items-start gap-3 px-4 pt-5 pb-1.5 md:px-6 md:pt-6 lg:px-7">
      <Avatar slot={profile.avatar} size="lg" />

      <div className="min-w-0 flex-1">
        {/* 昵称 + @handle */}
        <div className="flex flex-wrap items-baseline gap-2">
          <h1 className="text-[18px] font-extrabold leading-[1.45] tracking-[.02em] lg:text-[20px]">
            <Fill value={profile.displayName} />
          </h1>
          <a
            href="#post"
            className="text-[15px] text-accent underline decoration-1 underline-offset-[3px] transition-colors hover:decoration-2"
          >
            {profile.handle}
          </a>
        </div>

        {/* 斜杠分隔的元信息 */}
        <p className="mt-2 flex flex-wrap items-center gap-x-1.5 text-[14px] leading-[1.85] text-muted">
          {profile.meta.map((item, index) => (
            <span key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <i aria-hidden className="not-italic text-stroke">
                  /
                </i>
              )}
              <Fill value={item} />
            </span>
          ))}
        </p>

        {/* 状态徽章 */}
        {profile.badge && (
          <p className="mt-3 inline-block rounded-lg border border-stroke px-[11px] py-1.5 text-[12px] leading-snug text-muted">
            <Fill value={profile.badge} />
          </p>
        )}

        {/* 关注 / 粉丝：数字与单位不折行 */}
        <p className="mt-2.5 text-[13px] leading-[1.85] text-muted">
          <b className="text-[14px] font-bold text-fg">
            {formatCount(profile.following)}
          </b>{" "}
          关注
          <span aria-hidden className="mx-1.5 text-stroke">
            ·
          </span>
          <b className="whitespace-nowrap text-[14px] font-bold text-fg">
            <Fill value={profile.followers} />
          </b>{" "}
          粉丝
        </p>
      </div>
    </section>
  );
}
