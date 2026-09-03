import { Reveal } from "@/components/Reveal";
import { rianaGallery } from "@/lib/photos";

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Знакомство</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Это Риана — основатель Riana Admissions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Живу и работаю в Китае, лично веду каждого студента — от первой консультации до оффера.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rianaGallery.map((p, i) => (
            <Reveal key={p.src} delay={i * 80}>
              <figure className="group relative overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-navy-gradient/90 p-4 text-xs font-medium text-primary-foreground">
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
