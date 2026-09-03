import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    name: "Алина К.",
    school: "Stanford University",
    initials: "АК",
    text: "Благодаря Риане я получила оффер из Стэнфорда. Её работа с эссе — это магия: текст стал моим, но в разы сильнее.",
  },
  {
    name: "Дамир С.",
    school: "Tsinghua University",
    initials: "ДС",
    text: "Я не понимал, с чего начать. За два созвона появилась чёткая стратегия, а через полгода — полная стипендия.",
  },
  {
    name: "Мадина Т.",
    school: "UCL",
    initials: "МТ",
    text: "Дедлайны, документы, рекомендации — всё было под контролем. Спокойствие во время подачи бесценно.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Отзывы</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Что говорят мои студенты
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="glass flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5">
                <Quote className="size-7 text-accent" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  «{t.text}»
                </blockquote>
                <figcaption className="mt-6 flex min-w-0 items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-gradient font-display text-sm font-semibold text-accent">
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-primary">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{t.school}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
