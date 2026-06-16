import type { Locale } from "@/lib/getDictionary";

export const getLang = (pathname: string, current: Locale, next: Locale): string =>
  pathname.replace(`/${current}`, `/${next}`);
