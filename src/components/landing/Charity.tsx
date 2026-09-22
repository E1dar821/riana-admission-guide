import {
  HeartHandshake,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  FileCheck2,
  Plane,
  Users,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CONTACT, photos } from "@/lib/photos";

const directions = [
  {
    icon: GraduationCap,
    title: "100% бесплатное менторство",
    text: "Полное сопровождение поступления на государственные стипендии Китая (CSC, провинциальные гранты, университетские фонды типа A и B) с полным покрытием обучения и общежития.",
  },
  {
    icon: FileCheck2,
    title: "Подготовка эссе и документов",
    text: "Индивидуальный разбор портфолио, написание сильного мотивационного письма и Study Plan, помощь с рекомендациями и академическим резюме.",
  },
  {
    icon: BookOpen,
    title: "Языковая и академическая база",
    text: "Предоставление учебных материалов для сдачи HSK и IELTS/TOEFL, консультации с действующими стипендиатами и проверка готовности к интервью.",
  },
  {
    icon: Plane,
    title: "Визы, перелёт и адаптация",
    text: "Пошаговая помощь с визовой анкетой JW201/JW202, встреча в аэропорту, оформление сим-карт, банковских карт и регистрация в кампусе.",
  },
];

const criteria = [
  "Выпускники школ, колледжей или бакалавриата с высоким средним баллом (GPA от 4.3 из 5.0)",
  "Ребята из малообеспеченных, многодетных семей, сироты или студенты в сложных жизненных обстоятельствах",
  "Искренняя учебная мотивация, активная жизненная позиция и готовность добросовестно учиться в Китае",
  "Отсутствие финансовой возможности оплачивать коммерческие консалтинговые агентства",
];

const steps = [
  {
    step: "01",
    title: "Подача заявки",
    desc: "Заполнение анкеты участника с описанием своей истории, школьных успехов и желаемого направления обучения.",
  },
  {
    step: "02",
    title: "Отбор и собеседование",
    desc: "Личный онлайн-созвон с Рианой для обсуждения целей, оценки уровня подготовки и проверки документов.",
  },
  {
    step: "03",
    title: "Грантовая стратегия",
    desc: "Индивидуальный подбор 3–5 целевых китайских университетов с максимальными шансами на полный грант.",
  },
  {
    step: "04",
    title: "Подача и зачисление",
    desc: "Финальная вычитка документов, подача в приёмные комиссии вузов и получение заветного письма о зачислении.",
  },
];

export function Charity() {
  return (
    <section id="charity" className="relative overflow-hidden py-24">
      {/* Background soft ambient accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-0 size-96 rounded-full bg-gold-gradient opacity-15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-0 size-96 rounded-full bg-navy-deep/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
            <HeartHandshake className="size-4 text-accent" />
            Социальная инициатива Рианы
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
            Благотворительный проект <span className="text-gold">«Дадим шанс»</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Качественное образование должно быть доступно каждому таланту. Проект «Дадим шанс»
            помогает одарённым студентам из малообеспеченных семей и ребятам в сложных жизненных
            условиях бесплатно поступить в ведущие университеты Китая на полный грант.
          </p>
        </Reveal>

        {/* Founder Quote Card */}
        <Reveal delay={100} className="mt-14">
          <div className="glass rounded-[2rem] p-6 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="relative mx-auto size-32 shrink-0 sm:size-40">
                <img
                  src={photos.rooftop}
                  alt="Риана — основатель благотворительного проекта «Дадим шанс»"
                  loading="lazy"
                  className="size-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
                />
                <span className="absolute -right-2 -bottom-2 grid size-9 place-items-center rounded-full bg-navy-gradient text-accent shadow-md">
                  <Sparkles className="size-4" />
                </span>
              </div>
              <div className="min-w-0 text-center lg:text-left">
                <blockquote className="font-display text-lg font-medium text-primary sm:text-xl sm:leading-relaxed">
                  «Образование меняет судьбы целых семей. Работая со студентами, я вижу ребят с
                  горящими глазами, которые опускают руки просто потому, что не имеют средств на
                  дорогие агентства. Проект «Дадим шанс» — это моё обязательство: если у вас есть
                  талант и трудолюбие, мы найдём способ открыть для вас двери лучших университетов
                  Китая.»
                </blockquote>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <span className="font-display text-sm font-semibold text-primary">Риана</span>
                  <span className="size-1 rounded-full bg-accent" />
                  <span className="text-xs text-muted-foreground">
                    Основатель Riana Admissions & проекта «Дадим шанс»
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pillars / Key directions */}
        <div className="mt-16">
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Направления поддержки
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
              Что получают участники программы
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {directions.map((d, i) => (
              <Reveal key={d.title} delay={i * 90}>
                <div className="glass flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                  <span className="grid size-12 place-items-center rounded-2xl bg-navy-gradient text-accent">
                    <d.icon className="size-5" />
                  </span>
                  <h4 className="mt-5 font-display text-lg font-semibold text-primary">
                    {d.title}
                  </h4>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {d.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Who can apply & Criteria */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <Reveal delay={120}>
            <div className="glass flex h-full flex-col justify-between rounded-[2rem] p-7 sm:p-9">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-accent uppercase">
                  <ShieldCheck className="size-4" /> Критерии участия
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-primary">
                  Для кого создан проект «Дадим шанс»
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Отбор проходит на конкурсной основе несколько раз в год. Мы ищем тех, кому помощь
                  нужна сильнее всего и кто готов приложить максимум усилий:
                </p>

                <ul className="mt-6 space-y-3.5">
                  {criteria.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-secondary/60 p-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <strong className="font-semibold text-primary">Важно: </strong>
                  Участие в проекте «Дадим шанс» полностью бесплатное на всех этапах — от первой
                  анкеты до момента заселения в кампус.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Steps */}
          <Reveal delay={200}>
            <div className="rounded-[2rem] bg-navy-gradient p-7 text-primary-foreground sm:p-9">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-accent uppercase">
                <Users className="size-4" /> Этапы пути
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-primary-foreground">
                Как устроен отбор и работа
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                Прозрачный и понятный процесс от первой заявки до грантового сертификата:
              </p>

              <div className="mt-6 space-y-4">
                {steps.map((s) => (
                  <div
                    key={s.step}
                    className="glass-dark flex items-start gap-4 rounded-2xl p-3.5 transition-transform hover:translate-x-1"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 font-display text-sm font-bold text-accent">
                      {s.step}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-display text-sm font-semibold text-primary-foreground">
                        {s.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-primary-foreground/70">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA Bar */}
        <Reveal delay={150} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-accent/30 bg-accent/10 p-6 sm:flex-row sm:p-8">
            <div className="min-w-0 text-center sm:text-left">
              <h4 className="font-display text-xl font-semibold text-primary">
                Хотите принять участие или поддержать проект?
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Подайте заявку на следующий отбор или напишите Риане в Instagram (основной ресурс) с
                тегом #ДадимШанс.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button asChild variant="gold" size="pill">
                <a href="#contact">
                  Подать заявку на участие <ArrowRight className="ml-1 size-4" />
                </a>
              </Button>
              <Button asChild variant="outlineNavy" size="pill">
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                  Написать в Instagram
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
