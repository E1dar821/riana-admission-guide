import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Results } from "@/components/landing/Results";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

const title = "Riana Admissions — консультации по поступлению в вузы Китая, США и UK";
const description =
  "Индивидуальное сопровождение поступления: стратегия, эссе, документы и гранты. 100+ студентов, $3.5M стипендий, 7 лет опыта.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "Riana Admissions, консультации по поступлению, эссе в США, обучение за границей, поступление в вузы Китая",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
