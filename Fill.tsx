import { PLACEHOLDER } from "@/lib/data";

/** 文字还以「【可输入文字」开头，就算还没填 */
export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith(PLACEHOLDER);
}

type FillProps = {
  value: string;
  className?: string;
};

/**
 * 文本占位：没填时显示浅灰，填了真实内容自动变成正常文字色。
 * 所有用户文案都包一层 <Fill />，所以「填没填」在页面上一眼可见。
 */
export default function Fill({ value, className = "" }: FillProps) {
  const empty = isPlaceholder(value);

  return (
    <span className={[empty ? "text-faint" : "", className].filter(Boolean).join(" ")}>
      {value}
    </span>
  );
}
