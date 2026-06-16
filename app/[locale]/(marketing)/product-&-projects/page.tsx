import { Locale } from "@/lib/getDictionary";
import { getDictionary } from "@/lib/getDictionary";
import ProductsHero from "@/components/marketing/ProductsHero";
import ParallaxFooter from "@/animations/ParallaxFooter";
import Products from "@/components/marketing/Products";
import ProjectsPage from "@/components/marketing/ProjectsPage";

const ProductsProjects = async ({
  params,
} : {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const validLocale: Locale = locale === "en" ? "en" : "id";
  const dict = await getDictionary(validLocale);

  return (
    <section className="">

      <div className="relative z-10 bg-background overflow-hidden">
        <ProductsHero dict={dict} />
        <Products dict={dict} />
        <ProjectsPage dict={dict} />
      </div>

      <ParallaxFooter dict={dict} />
    </section>
  )
}

export default ProductsProjects
