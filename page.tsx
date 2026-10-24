import { EngagementProvider } from "@/components/Engagement";
import HintText from "@/components/HintText";
import MoreNote from "@/components/MoreNote";
import PostCard from "@/components/PostCard";
import ProfileHeader from "@/components/ProfileHeader";
import ReplyList from "@/components/ReplyList";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import Toast from "@/components/Toast";
import TopBar from "@/components/TopBar";
import { post } from "@/lib/data";

export default function Page() {
  return (
    <EngagementProvider
      likeCount={post.counts.like}
      saveCount={post.counts.bookmark}
    >
      <div className="mx-auto flex min-h-dvh w-full max-w-[600px] flex-col border-line pb-[calc(40px_+_env(safe-area-inset-bottom))] md:border-x">
        <TopBar />

        <main className="flex-1">
          <Reveal>
            <ProfileHeader />
          </Reveal>

          <Reveal delay={60}>
            <PostCard />
          </Reveal>

          <Divider />

          <Reveal delay={120}>
            <ReplyList />
          </Reveal>

          <Reveal delay={180}>
            <HintText />
          </Reveal>

          <Divider />

          <Reveal delay={240}>
            <SiteFooter />
          </Reveal>

          <MoreNote />
        </main>

        <Toast />
      </div>
    </EngagementProvider>
  );
}

/** 1px 分割线：只用 border，不用阴影 */
function Divider() {
  return (
    <div
      role="separator"
      className="my-5 border-t border-line md:my-[22px]"
    />
  );
}
