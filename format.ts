/** 1326 → "1,326"；0 → "0" */
export function formatCount(value: number): string {
  return value.toLocaleString("zh-CN", { maximumFractionDigits: 0 });
}
