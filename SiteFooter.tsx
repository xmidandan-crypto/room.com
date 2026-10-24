import { footer } from "@/lib/data";
import Fill from "./Fill";

export default function SiteFooter() {
  return (
    <footer className="px-4 text-[12px] leading-[2] text-faint md:px-6 lg:px-7">
      <p>
        <Fill value={footer.location} />
      </p>
      <p>
        <Fill value={footer.disclaimer} />
      </p>
    </footer>
  );
}
