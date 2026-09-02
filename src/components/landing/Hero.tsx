import { Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { photos } from "@/lib/photos";

const stats = [
  { icon: Users, value: "100+", label: "студентов" },
  { icon: Award, value: "$3.5M", label: "грантов" },
  { icon: Clock, value: "7 лет", label: "опыта" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-gradient pt-28 pb-20 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-gold-gradient opacity-25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 size-96 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="min-w-0">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-foreground/90 uppercase">
            Admissions mentor · China & Global
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">
            Поступление в топовые вузы Китая
            <br className="hidden sm:block" /> с <span className="text-gold">Riana Admissions</span>.
            <br className="hidden sm:block" /> Ваш гид к успеху.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Индивидуальное сопровождение, стратегия и подготовка документов. Откройте двери к
            образованию вашей мечты.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="pillLg">
              <a href="#contact">Оставить заявку</a>
            </Button>
            <Button asChild variant="outlineLight" size="pillLg">
              <a href="#about">Узнать больше</a>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-3 sm:max-w-lg">
            {stats.map((s) => (
              <div key={s.label} className="glass-dark rounded-2xl px-3 py-4 text-center sm:px-4">
                <s.icon className="mx-auto size-5 text-accent" />
                <dt className="mt-2 font-display text-lg font-semibold text-primary-foreground sm:text-xl">
                  {s.value}
                </dt>
                <dd className="text-xs text-primary-foreground/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="min-w-0">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2.5rem] bg-gold-gradient opacity-30 blur-2xl"
            />
            <div className="glass-dark relative overflow-hidden rounded-[2rem] p-2">
              <img
                src={photos.hero}
                alt="Риана — консультант по поступлению в зарубежные университеты"
                loading="eager"
                className="aspect-4/5 w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 left-4 rounded-2xl px-4 py-3 sm:left-8">
              <p className="font-display text-sm font-semibold text-primary">Stanford · Cornell · UCL</p>
              <p className="text-xs text-muted-foreground">офферы студентов Рианы</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
