import { Locale } from "@/lib/getDictionary";
import { getDictionary } from "@/lib/getDictionary";

const Contact = async ({
  params,
} : {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const validLocale: Locale = locale === "en" ? "en" : "id";
  const dict = await getDictionary(validLocale);

  return (
    <div>
      test
    </div>
  )
}

export default Contact
