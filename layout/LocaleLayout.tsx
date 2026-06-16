import { getDictionary, type Locale } from "@/lib/getDictionary";
import MarketingLayout from "@/layout/MarketingLayout";
import Navbar from "@/components/reusable/Navbar";

const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const validLocale: Locale = locale === "en" ? "en" : "id";
  const dict = await getDictionary(validLocale);

  return (
    <MarketingLayout>
      <Navbar dict={dict} locale={validLocale} />
      {children}
    </MarketingLayout>
  );
}

export default LocaleLayout
