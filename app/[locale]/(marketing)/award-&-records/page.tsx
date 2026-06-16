import { Locale } from "@/lib/getDictionary";
import { getDictionary } from "@/lib/getDictionary";
import ProductsHero from "@/components/marketing/ProductsHero";

const AwardsRecords = async ({
  params,
} : {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const validLocale: Locale = locale === "en" ? "en" : "id";
  const dict = await getDictionary(validLocale);

  return (
    <section>
      <ProductsHero dict={dict} />
    </section>
  )
}

export default AwardsRecords
