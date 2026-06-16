"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/getDictionary";
import { getLang } from "@/lib/getLang";

const LangSwitcher = ({ 
  locale,
}: { 
  locale: Locale 
}) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex justify-between items-center gap-1 font-medium py-1 px-2 bg-card cursor-pointer border border-muted/20">
      <div className="space-x-1">
        <button
          onClick={() => router.push(getLang(pathname, locale, "id"))}
          className={locale === "id" ? "opacity-100" : "opacity-30 hover:opacity-100 transition-opacity cursor-pointer"}
        >
          Indonesia
        </button>
        <span className="opacity-30">/</span>
        <button
          onClick={() => router.push(getLang(pathname, locale, "en"))}
          className={locale === "en" ? "opacity-100" : "opacity-30 hover:opacity-100 transition-opacity cursor-pointer"}
        >
          English
        </button>
      </div>
      <p className="text-xs text-muted">{locale === "id" ? "ID" : "EN"}</p>
    </div>
  );
};

export default LangSwitcher;
