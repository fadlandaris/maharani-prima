import { getDictionary, type Locale } from "@/lib/getDictionary";
import ParallaxHero from "@/animations/ParallaxHero";
import ParallaxFooter from "@/animations/ParallaxFooter";
import About from "@/components/marketing/About";
import Cta from "@/components/reusable/Cta";
import Core from "@/components/marketing/Core";
import Records from "@/components/marketing/Records";
import Awards from "@/components/marketing/Awards";
import Projects from "@/components/marketing/Projects";
import Documentation from "@/components/marketing/Documentation";

const MarketingPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const validLocale: Locale = locale === "en" ? "en" : "id";
  const dict = await getDictionary(validLocale);

  return (
    <section>
      <ParallaxHero dict={dict} />

      <div className="relative z-10 bg-background">
        <About dict={dict} />
        <Cta dict={dict} />
        <Core dict={dict} />
        <Records dict={dict} />
        <Awards dict={dict} />
        <Projects dict={dict} />
        <Documentation dict={dict} />
      </div>

      <ParallaxFooter dict={dict} />
    </section>
  );
};

export default MarketingPage;
