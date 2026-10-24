import { more } from "@/lib/data";

/** 页尾小字：and more....（粉色、12px、与正文同一套黑体） */
export default function MoreNote() {
  return (
    <p className="mt-11 mb-1 px-4 text-center text-[12px] font-medium leading-none tracking-[.14em] text-rose md:px-6 lg:px-7">
      {more.text}
    </p>
  );
}
