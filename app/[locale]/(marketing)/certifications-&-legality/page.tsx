import { Locale } from "@/lib/getDictionary";
import { getDictionary } from "@/lib/getDictionary";
import ParallaxFooter from "@/animations/ParallaxFooter";
import LegalityHero from "@/components/marketing/LegalityHero";
import Registered from "@/components/marketing/Registered";
import Interceptor from "@/components/reusable/Interceptor";
import Certifications from "@/components/marketing/Certifications";
import SafetyCommitment from "@/components/marketing/SafetyCommitment";

const CertificationsLegality = async ({
  params,
} : {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const validLocale: Locale = locale === "en" ? "en" : "id";
  const dict = await getDictionary(validLocale);
  const certificationsData = dict.companycertifications
  const safetyData = dict.safetyCommitment

  return (
     <section className="">
      <LegalityHero dict={dict} />

      <div className="relative z-10 bg-background">
        <Registered dict={dict} />
        <Interceptor title={certificationsData.title} title2={certificationsData.title2}/>
        <Certifications dict={dict} />
        {/* <Interceptor title={safetyData.title} title2={safetyData.title2}/> */}
        <SafetyCommitment dict={dict} />
      </div>

      <ParallaxFooter dict={dict} />
    </section>
  )
}

export default CertificationsLegality
