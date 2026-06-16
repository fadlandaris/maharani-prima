import Link from "next/link";
import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/getDictionary";
import { globalStyles } from "@/styles/styles";
import LangSwitcher from "./LangSwitcher";
import LinkAnimation from "@/animations/LinkAnimation";

const Navbar = ({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) => {
  const dropdownKeys = ["company", "certificationsLegality", "product", "award"] as const;

  return (
    <header className={`${globalStyles.header} fixed top-0 left-0 right-0 z-[999999] py-4`}>
      <nav className={`${globalStyles.innerContainer} flex items-start justify-between`}>
        <Link href={`/${locale}`} >
          <Image src="/logo.png" width={100} height={100} loading="eager" alt="Maharani Prima" />
        </Link>
         
        <div className="grid grid-cols-3 gap-2">
          <LinkAnimation index={1} href={`/${locale}`} value={dict.nav.home} variant={""} Icon={undefined}/>
          <LinkAnimation index={2} href={`/${locale}/certifications-&-legality`} value={dict.nav.certificationsLegality} variant={""} Icon={undefined}/>
          <LinkAnimation index={3} href={`/${locale}/product-&-projects`} value={dict.nav.productProjects} variant={""} Icon={undefined}/>
          <LinkAnimation index={4} href={`/${locale}/award-&-records`} value={dict.nav.awardRecords} variant={""} Icon={undefined}/>
          <LinkAnimation index={5} href={`/${locale}/contact`} value={dict.nav.contact} variant={""} Icon={undefined}/>
          <LangSwitcher locale={locale} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
