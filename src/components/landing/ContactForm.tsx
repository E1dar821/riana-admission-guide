import { useState, type FormEvent } from "react";
import { Mail, Phone, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/lib/photos";

type Fields = { name: string; email: string; contact: string; goal: string };

const empty: Fields = { name: "", email: "", contact: "", goal: "" };

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [sending, setSending] = useState(false);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = values.name.trim();
    const email = values.email.trim();
    const contact = values.contact.trim();

    if (name.length < 2 || name.length > 100) return toast.error("Укажите имя (2–100 символов)");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return toast.error("Укажите корректный e-mail");
    if (contact.length < 3 || contact.length > 100)
      return toast.error("Укажите телефон или Telegram");
    if (values.goal.length > 1000) return toast.error("Сообщение слишком длинное");

    setSending(true);
    const body = `Имя: ${name}\nE-mail: ${email}\nКонтакт: ${contact}\nЦель: ${values.goal.trim()}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      "Заявка на консультацию — Riana Admissions",
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Заявка сформирована — отправьте письмо, я отвечу в течение 24 часов");
    setValues(empty);
    setSending(false);
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-gradient p-6 sm:p-10 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-10 size-80 rounded-full bg-gold-gradient opacity-20 blur-3xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  Консультация
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
                  Готовы начать путь к зачислению? Запишитесь на первую консультацию
                </h2>
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
                  <Sparkles className="size-4" /> Консультация бесплатная, места ограничены.
                </p>
                <div className="mt-8 space-y-2">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    <Mail className="size-4 shrink-0" />
                    <span className="truncate">{CONTACT.email}</span>
                  </a>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    <Phone className="size-4 shrink-0" />
                    <span className="truncate">{CONTACT.phone}</span>
                  </a>
                </div>
              </div>

              <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" value={values.name} onChange={set("name")} maxLength={100} placeholder="Как к вам обращаться" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" value={values.email} onChange={set("email")} maxLength={255} placeholder="you@email.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact">Телефон / Telegram</Label>
                    <Input id="contact" value={values.contact} onChange={set("contact")} maxLength={100} placeholder="@username или +7..." />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="goal">Краткий вопрос или цель</Label>
                    <Textarea id="goal" value={values.goal} onChange={set("goal")} maxLength={1000} rows={3} placeholder="Например: хочу поступить на бакалавриат в Китай в 2027" />
                  </div>
                  <Button type="submit" variant="gold" size="pillLg" disabled={sending} className="mt-2 w-full">
                    Отправить заявку
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Или напишите сразу в{" "}
                    <a href={CONTACT.telegram} target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4">
                      Telegram
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
