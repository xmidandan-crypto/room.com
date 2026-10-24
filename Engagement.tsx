"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { showToast } from "@/lib/toast";

export type EngagementKind = "like" | "save";

type EngagementValue = {
  liked: boolean;
  saved: boolean;
  likeCount: number;
  saveCount: number;
  /** 刚刚被点的那一个，用来触发 0.34s 回弹动画 */
  pop: EngagementKind | null;
  toggle: (kind: EngagementKind) => void;
};

const EngagementContext = createContext<EngagementValue | null>(null);

export function EngagementProvider({
  likeCount,
  saveCount,
  children,
}: {
  likeCount: number;
  saveCount: number;
  children: ReactNode;
}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [pop, setPop] = useState<EngagementKind | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const toggle = useCallback(
    (kind: EngagementKind) => {
      const next = kind === "like" ? !liked : !saved;

      if (kind === "like") setLiked(next);
      else setSaved(next);

      setPop(kind);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setPop(null), 360);

      const verb = kind === "like" ? "喜欢" : "收藏";
      showToast(next ? `已${verb}` : `已取消${verb}`);
    },
    [liked, saved],
  );

  const value = useMemo<EngagementValue>(
    () => ({
      liked,
      saved,
      likeCount: likeCount + (liked ? 1 : 0),
      saveCount: saveCount + (saved ? 1 : 0),
      pop,
      toggle,
    }),
    [liked, saved, likeCount, saveCount, pop, toggle],
  );

  return (
    <EngagementContext.Provider value={value}>
      {children}
    </EngagementContext.Provider>
  );
}

export function useEngagement(): EngagementValue {
  const context = useContext(EngagementContext);
  if (!context) {
    throw new Error("useEngagement 必须在 <EngagementProvider> 内部使用");
  }
  return context;
}
