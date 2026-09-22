import { Compass, PenLine, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: Compass,
    title: "Стратегия и выбор вузов Китая",
    text: "Подбор целевых университетов (включая SCUT, вузы Project 985/211), оценка шансов на государственные стипендии и составление дорожной карты.",
  },
  {
    icon: PenLine,
    title: "Документы и Study Plan",
    text: "Написание сильного академического Study Plan, мотивационных писем, подготовка рекомендаций и правильное оформление для приёмных комиссий Китая.",
  },
  {
    icon: Handshake,
    title: "Полное сопровождение «под ключ»",
    text: "От первой анкеты до приказа о зачислении, получение визовых форм JW201/JW202, оформление студенческой визы и встреча в Китае.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Услуги</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Программы сопровождения поступления в Китай
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="glass group flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                <span className="grid size-12 place-items-center rounded-2xl bg-navy-gradient text-accent transition-transform duration-300 group-hover:scale-105">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                <Button asChild variant="outlineNavy" size="pill" className="mt-6 self-start">
                  <a href="#contact">Детальнее</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
