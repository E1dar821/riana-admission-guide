import { Mail, Phone, Instagram, Send, Linkedin } from "lucide-react";
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
                Риана — основатель и консультант
              </span>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/65">
            Консультации по поступлению в университеты Китая, США и Великобритании.
          </p>
        </div>

        <div className="min-w-0">
          <p className="font-display text-sm font-semibold">Контакты</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-accent"
          >
            <Mail className="size-4 shrink-0" />
            <span className="truncate">{CONTACT.email}</span>
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-accent"
          >
            <Phone className="size-4 shrink-0" />
            <span className="truncate">{CONTACT.phone}</span>
          </a>
        </div>

        <div className="min-w-0">
          <p className="font-display text-sm font-semibold">Соцсети</p>
          <div className="mt-4 flex gap-3">
            {[
              { href: CONTACT.instagram, icon: Instagram, label: "Instagram" },
              { href: CONTACT.telegram, icon: Send, label: "Telegram" },
              { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
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
