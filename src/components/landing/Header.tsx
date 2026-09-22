import { useEffect, useState } from "react";
import { Menu, X, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/photos";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#charity", label: "«Дадим шанс»" },
  { href: "#services", label: "Услуги" },
  { href: "#results", label: "Результаты" },
  // { href: "#gallery", label: "Знакомство" }, // Скрыто по запросу, не удалять из кода
  { href: "#testimonials", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass py-2 shadow-none" : "py-4",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy-gradient text-accent">
            <Feather className="size-4" />
          </span>
          <span className="truncate font-display text-base font-semibold text-primary sm:text-lg">
            Riana Admissions
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outlineNavy" size="pill" className="hidden xl:inline-flex">
            <a href={CONTACT.whatsappGroup} target="_blank" rel="noreferrer">
              Чат в WhatsApp
            </a>
          </Button>
          <Button asChild variant="gold" size="pill" className="hidden sm:inline-flex">
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
              Instagram @riana.china
            </a>
          </Button>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass mx-4 mt-2 rounded-2xl p-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="gold" size="pill" className="mt-2">
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                Instagram @riana.china (основная связь)
              </a>
            </Button>
            <Button asChild variant="outlineNavy" size="pill" className="mt-2">
              <a href={CONTACT.whatsappGroup} target="_blank" rel="noreferrer">
                Чат поступления в WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
