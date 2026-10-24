/** 全局轻提示：任意客户端组件都能触发，由 <Toast /> 统一渲染 */
export const TOAST_EVENT = "app:toast";

export function showToast(message: string): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<string>(TOAST_EVENT, { detail: message }));
}
