import { Locale } from "@/lib/getDictionary";
import { getDictionary } from "@/lib/getDictionary";
import ParallaxFooter from "@/animations/ParallaxFooter";
import LegalityHero from "@/components/marketing/LegalityHero";
import Registered from "@/components/marketing/Registered";

const CertificationsLegality = async ({
  params,
} : {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const validLocale: Locale = locale === "en" ? "en" : "id";
  const dict = await getDictionary(validLocale);

  return (
     <section className="">
      <LegalityHero dict={dict} />

      <div className="relative z-10 bg-background overflow-hidden">
        <Registered dict={dict} />
      </div>

      <ParallaxFooter dict={dict} />
    </section>
  )
}

export default CertificationsLegality
