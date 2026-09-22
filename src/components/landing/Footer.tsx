import { Mail, Phone, Instagram, Send, MessageCircle } from "lucide-react";
import { CONTACT, photos } from "@/lib/photos";

export function Footer() {
  return (
    <footer className="bg-navy-gradient py-14 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <img
              src={photos.hero}
              alt="Риана — основатель Riana Admissions"
              loading="lazy"
              className="size-12 shrink-0 rounded-full object-cover ring-2 ring-accent/50"
            />
            <div className="min-w-0">
              <span className="block font-display text-lg font-semibold">Riana Admissions</span>
              <span className="block text-xs text-primary-foreground/65">
                Риана — основатель Riana Admissions и проекта «Дадим шанс»
              </span>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/65">
            Консультации по поступлению в университеты Китая и благотворительная помощь талантливым
            абитуриентам.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-primary-foreground/80">
            <a href="#charity" className="underline underline-offset-4 hover:text-accent">
              Проект «Дадим шанс»
            </a>
            <span>•</span>
            <a href="#services" className="underline underline-offset-4 hover:text-accent">
              Программы
            </a>
            <span>•</span>
            <a href="#contact" className="underline underline-offset-4 hover:text-accent">
              Заявка
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <p className="font-display text-sm font-semibold">Контакты</p>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 text-sm text-accent transition-colors hover:text-white"
          >
            <Instagram className="size-4 shrink-0" />
            <span className="truncate">Instagram: {CONTACT.instagramHandle} (основная связь)</span>
          </a>
          <a
            href={CONTACT.whatsappGroup}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/85 transition-colors hover:text-accent"
          >
            <MessageCircle className="size-4 shrink-0 text-accent" />
            <span className="truncate">Групповой чат поступления в WhatsApp</span>
          </a>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-accent"
          >
            <Send className="size-4 shrink-0" />
            <span className="truncate">Telegram: {CONTACT.telegramHandle}</span>
          </a>
        </div>

        <div className="min-w-0">
          <p className="font-display text-sm font-semibold">Связь и сообщество</p>
          <p className="mt-2 text-xs text-primary-foreground/70">
            Основной блог, отзывы и оперативная связь ведутся в Instagram. Вступайте также в
            групповой чат WhatsApp по поступлению в Китай.
          </p>
          <div className="mt-4 flex gap-3">
            {[
              {
                href: CONTACT.instagram,
                icon: Instagram,
                label: "Instagram (Основной ресурс)",
                highlight: true,
              },
              {
                href: CONTACT.whatsappGroup,
                icon: MessageCircle,
                label: "WhatsApp группа",
                highlight: true,
              },
              { href: CONTACT.telegram, icon: Send, label: "Telegram", highlight: false },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className={`grid size-10 place-items-center rounded-full border transition-all hover:-translate-y-0.5 ${
                  s.highlight
                    ? "border-accent/60 bg-accent/20 text-accent hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    : "border-white/20 bg-white/5 text-primary-foreground hover:border-accent/50 hover:text-accent"
                }`}
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 sm:px-6">
        <p className="text-xs text-primary-foreground/55">
          © {new Date().getFullYear()} Riana Admissions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
