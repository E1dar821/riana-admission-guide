import { Play, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { photos, CONTACT } from "@/lib/photos";

const points = [
  "Персональная стратегия под профиль каждого студента",
  "Знание всех подводных камней подачи и дедлайнов",
  "Эссе и мотивационные письма, которые запоминают",
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 min-w-0 lg:order-1">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Обо мне</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Риана: ваш персональный проводник в мир высшего образования
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Семь лет я помогаю студентам поступать в ведущие университеты Китая, США и
            Великобритании. За это время более 100 студентов получили офферы, а суммарный объём
            стипендий и грантов превысил 3.5 млн долларов.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Я работаю точечно и лично: разбираю профиль, выстраиваю стратегию, довожу каждое эссе до
            состояния, в котором оно звучит вашим голосом — и при этом попадает в критерии приёмной
            комиссии.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-primary/15 bg-card py-2 pr-6 pl-2 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
          >
            <span className="grid size-10 place-items-center rounded-full bg-gold-gradient text-accent-foreground transition-transform group-hover:scale-105">
              <Play className="size-4 fill-current" />
            </span>
            <span className="text-sm font-medium text-primary">Видео-знакомство с Рианой</span>
          </a>
        </Reveal>

        <Reveal delay={120} className="order-1 min-w-0 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <img
              src={photos.aboutMain}
              alt="Риана — основатель Riana Admissions, на набережной ночного города"
              loading="lazy"
              className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-[var(--shadow-elegant)]"
            />
            <div className="glass absolute -bottom-8 -left-4 hidden w-40 rounded-2xl p-1.5 sm:block lg:-left-10 lg:w-52">
              <img
                src={photos.aboutSecondary}
                alt="Риана — основатель Riana Admissions"
                loading="lazy"
                className="w-full rounded-xl object-cover"
              />
              <p className="px-2 py-1.5 text-center text-[11px] font-medium text-primary">
                Риана, основатель
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
