import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Charity } from "@/components/landing/Charity";
import { Services } from "@/components/landing/Services";
import { Results } from "@/components/landing/Results";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

const title = "Riana Admissions — поступление в вузы Китая и благотворительный проект «Дадим шанс»";
const description =
  "Индивидуальное сопровождение поступления в университеты Китая и благотворительный проект «Дадим шанс» для талантливой молодёжи. Гранты, стипендии, менторство.";

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
          "Riana Admissions, Дадим шанс, благотворительный проект, гранты в Китай, обучение в Китае, стипендии CSC, SCUT, поступление в вузы Китая",
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
        <Charity />
        <Services />
        <Results />
        <Gallery />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
