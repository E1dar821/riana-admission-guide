import { CheckCircle2, Instagram, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { photos, CONTACT } from "@/lib/photos";
import { DriveImage } from "@/components/DriveImage";

const points = [
  "Эксперт по китайским государственным грантам (CSC, гранты мэра и провинций)",
  "Персональная стратегия под профиль каждого студента",
  "Основатель благотворительного проекта «Дадим шанс» для талантливой молодёжи",
  "Эссе, CV и Study Plan, которые выделяют вас среди тысяч кандидатов",
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 min-w-0 lg:order-1">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Обо мне</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Риана: ваш персональный проводник в университеты Китая
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Больше года я профессионально помогаю студентам поступать в ведущие университеты Китая.
            За это время уже более 35 студентов успешно отправились на учёбу в Китай, из которых 15+
            ребят получили гранты и стипендии, включая оффер в Южно-Китайский технологический
            университет (SCUT) — один из топовых вузов страны.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Я работаю точечно и лично: разбираю профиль, выстраиваю стратегию подачи, довожу каждый
            Study Plan и рекомендательные письма до идеала, чтобы вы гарантированно выделились среди
            кандидатов.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 py-2 pr-6 pl-2.5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[var(--shadow-gold)]"
            >
              <span className="grid size-10 place-items-center rounded-full bg-gold-gradient text-accent-foreground transition-transform group-hover:scale-105">
                <Instagram className="size-5" />
              </span>
              <div className="text-left">
                <span className="block text-[11px] font-semibold text-accent uppercase">
                  Основной ресурс и связь
                </span>
                <span className="block text-sm font-semibold text-primary">
                  Instagram {CONTACT.instagramHandle}
                </span>
              </div>
            </a>

            <a
              href={CONTACT.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-primary/15 bg-card py-2 pr-6 pl-2.5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
            >
              <span className="grid size-10 place-items-center rounded-full bg-navy-gradient text-accent transition-transform group-hover:scale-105">
                <MessageCircle className="size-5" />
              </span>
              <div className="text-left">
                <span className="block text-[11px] text-muted-foreground">Групповой чат</span>
                <span className="block text-sm font-semibold text-primary">Чат в WhatsApp</span>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 min-w-0 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <DriveImage
              src={photos.aboutMain}
              alt="Обучение и жизнь в Китае"
              loading="lazy"
              className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-[var(--shadow-elegant)]"
            />
            <div className="glass absolute -bottom-6 -left-4 hidden rounded-2xl px-4 py-3 sm:block lg:-left-6 shadow-[var(--shadow-elegant)]">
              <div className="flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-xl bg-gold-gradient text-accent-foreground font-semibold text-xs">
                  SCUT
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary">Поступление в вузы Китая</p>
                  <p className="text-[11px] text-muted-foreground">15+ грантов · 35+ студентов</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
