import { hint } from "@/lib/data";
import Fill from "./Fill";

export default function HintText() {
  return (
    <p className="mt-7 px-4 text-right text-[12px] leading-[2] text-faint md:px-6 lg:px-7">
      {hint.lines.map((line, index) => (
        <span key={index} className="block">
          <Fill value={line} />
        </span>
      ))}
    </p>
  );
}
