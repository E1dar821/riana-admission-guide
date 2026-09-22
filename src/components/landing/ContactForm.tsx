import { useState, type FormEvent } from "react";
import { Mail, Phone, Sparkles, Instagram, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/lib/photos";

type InquiryType = "admission" | "charity" | "partner";

type Fields = {
  type: InquiryType;
  name: string;
  email: string;
  contact: string;
  goal: string;
};

const empty: Fields = {
  type: "admission",
  name: "",
  email: "",
  contact: "",
  goal: "",
};

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [sending, setSending] = useState(false);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const setType = (t: InquiryType) => setValues((v) => ({ ...v, type: t }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = values.name.trim();
    const email = values.email.trim();
    const contact = values.contact.trim();

    if (name.length < 2 || name.length > 100) {
      toast.error("Укажите имя (2–100 символов)");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast.error("Укажите корректный e-mail");
      return;
    }
    if (contact.length < 3 || contact.length > 100) {
      toast.error("Укажите телефон или Telegram");
      return;
    }
    if (values.goal.length > 1000) {
      toast.error("Сообщение слишком длинное");
      return;
    }

    setSending(true);
    const typeTitles: Record<InquiryType, string> = {
      admission: "Сопровождение поступления",
      charity: "Заявка в проект «Дадим шанс»",
      partner: "Партнёрство / поддержка «Дадим шанс»",
    };
    const body = `Категория: ${typeTitles[values.type]}\nИмя: ${name}\nE-mail: ${email}\nКонтакт: ${contact}\nЦель / Вопрос: ${values.goal.trim()}`;
    const subject = `${typeTitles[values.type]} — ${name}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
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
                <div className="mt-8 space-y-3">
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/15 p-3.5 text-primary-foreground transition-all hover:border-accent hover:bg-accent/25 hover:shadow-[var(--shadow-gold)]"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gold-gradient text-accent-foreground">
                      <Instagram className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-semibold tracking-wider text-accent uppercase">
                        Основной ресурс и связь
                      </span>
                      <span className="block truncate text-sm font-semibold">
                        Instagram {CONTACT.instagramHandle}
                      </span>
                    </div>
                  </a>

                  <a
                    href={CONTACT.whatsappGroup}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-3.5 text-primary-foreground transition-all hover:border-white/40 hover:bg-white/15"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-navy-gradient text-accent">
                      <MessageCircle className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-semibold tracking-wider text-primary-foreground/70 uppercase">
                        Чат по поступлению
                      </span>
                      <span className="block truncate text-sm font-semibold">
                        Групповой чат в WhatsApp
                      </span>
                    </div>
                  </a>

                  <div className="pt-2">
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                    >
                      <Send className="size-4 shrink-0" />
                      <span>Telegram: {CONTACT.telegramHandle}</span>
                    </a>
                  </div>
                </div>
              </div>

              <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8">
                <div className="grid gap-4">
                  <div className="grid gap-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground uppercase">
                      Тип обращения
                    </Label>
                    <div className="grid grid-cols-3 gap-1.5 rounded-2xl bg-secondary/80 p-1">
                      <button
                        type="button"
                        onClick={() => setType("admission")}
                        className={`rounded-xl px-2 py-1.5 text-center text-xs font-medium transition-all ${
                          values.type === "admission"
                            ? "bg-card text-primary shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Поступление
                      </button>
                      <button
                        type="button"
                        onClick={() => setType("charity")}
                        className={`rounded-xl px-2 py-1.5 text-center text-xs font-medium transition-all ${
                          values.type === "charity"
                            ? "bg-card text-primary shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        «Дадим шанс»
                      </button>
                      <button
                        type="button"
                        onClick={() => setType("partner")}
                        className={`rounded-xl px-2 py-1.5 text-center text-xs font-medium transition-all ${
                          values.type === "partner"
                            ? "bg-card text-primary shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Партнёрство
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      value={values.name}
                      onChange={set("name")}
                      maxLength={100}
                      placeholder="Как к вам обращаться"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={set("email")}
                      maxLength={255}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact">Телефон / Telegram</Label>
                    <Input
                      id="contact"
                      value={values.contact}
                      onChange={set("contact")}
                      maxLength={100}
                      placeholder="@username или +7..."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="goal">Краткий вопрос или цель</Label>
                    <Textarea
                      id="goal"
                      value={values.goal}
                      onChange={set("goal")}
                      maxLength={1000}
                      rows={3}
                      placeholder="Например: хочу поступить на бакалавриат в Китай в 2027"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="gold"
                    size="pillLg"
                    disabled={sending}
                    className="mt-2 w-full"
                  >
                    Отправить заявку
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Основная связь — в{" "}
                    <a
                      href={CONTACT.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-accent underline underline-offset-4"
                    >
                      Instagram {CONTACT.instagramHandle}
                    </a>{" "}
                    · или в{" "}
                    <a
                      href={CONTACT.whatsappGroup}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-primary underline underline-offset-4"
                    >
                      групповом чате WhatsApp
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
