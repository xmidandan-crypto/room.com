import { showToast } from "./toast";

/** 复制当前页面链接，失败时降级到隐藏 textarea */
export async function copyCurrentLink(message = "链接已复制"): Promise<void> {
  if (typeof window === "undefined") return;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(window.location.href);
    } else {
      const field = document.createElement("textarea");
      field.value = window.location.href;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    showToast(message);
  } catch {
    showToast("复制失败，请手动复制地址栏");
  }
}
