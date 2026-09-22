import {
  Users,
  Award,
  Clock,
  GraduationCap,
  CheckCircle2,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/lib/photos";

const stats = [
  { icon: Users, value: "35+", label: "студентов отправлено" },
  { icon: Award, value: "15+", label: "с грантами" },
  { icon: Clock, value: "1+ год", label: "опыта" },
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
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-foreground/90 uppercase">
              Admissions mentor · Китай
            </span>
            <a
              href="#charity"
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/20 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent transition-colors hover:bg-accent/30"
            >
              Проект «Дадим шанс»
            </a>
          </div>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">
            Поступление в топовые вузы Китая
            <br className="hidden sm:block" /> с <span className="text-gold">Riana Admissions</span>
            .
            <br className="hidden sm:block" /> Ваш гид к успеху.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Индивидуальное сопровождение, грантовая стратегия и подготовка документов. Откройте
            двери к образованию вашей мечты и стипендиям в Китае.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="pillLg">
              <a href="#contact">Оставить заявку</a>
            </Button>
            <Button asChild variant="outlineLight" size="pillLg">
              <a href="#charity">Проект «Дадим шанс»</a>
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
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2.5rem] bg-gold-gradient opacity-20 blur-2xl"
            />
            <div className="glass-dark relative overflow-hidden rounded-[2rem] border border-white/20 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-accent uppercase">
                    Набор 2026 / 2027
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-primary-foreground sm:text-2xl">
                    Университеты Китая
                  </h3>
                </div>
                <span className="rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                  Project 985 / 211
                </span>
              </div>

              <div className="mt-6 space-y-3.5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <div className="flex items-start gap-3">
                    <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-gold-gradient text-accent-foreground">
                      <GraduationCap className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-foreground">
                        Топовые вузы: SCUT и национальные университеты
                      </p>
                      <p className="mt-0.5 text-xs text-primary-foreground/70">
                        South China University of Technology, престижные программы бакалавриата и
                        магистратуры
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <div className="flex items-start gap-3">
                    <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-navy-gradient text-accent">
                      <Award className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-foreground">
                        Грантовые стипендии (CSC и провинции)
                      </p>
                      <p className="mt-0.5 text-xs text-primary-foreground/70">
                        15+ студентов уже получили стипендии с бесплатным обучением, проживанием и
                        выплатами
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <div className="flex items-start gap-3">
                    <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent/20 text-accent">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-foreground">
                        Полная подготовка документов
                      </p>
                      <p className="mt-0.5 text-xs text-primary-foreground/70">
                        Study Plan, эссе, визовая поддержка JW201/JW202 и встреча по прибытии
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5 pt-4 border-t border-white/10 sm:flex-row">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold-gradient px-4 py-2.5 text-xs font-semibold text-accent-foreground transition-all hover:opacity-95"
                >
                  <Instagram className="size-4" />
                  <span>Instagram {CONTACT.instagramHandle}</span>
                </a>
                <a
                  href={CONTACT.whatsappGroup}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-white/20"
                >
                  <MessageCircle className="size-4 text-accent" />
                  <span>Чат в WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
