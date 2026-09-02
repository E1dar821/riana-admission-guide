import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "Когда начинать подготовку?",
    a: "Оптимально — за 12–18 месяцев до дедлайнов. Этого времени хватает на языковые тесты, усиление профиля и спокойную работу над эссе. Но мы успешно работали и в сжатые сроки — за 3–4 месяца.",
  },
  {
    q: "Как выбрать вуз мечты?",
    a: "Мы смотрим на три вещи: академический профиль, финансовые возможности и карьерную цель. Формируем сбалансированный список: reach, target и safety программы.",
  },
  {
    q: "Сколько стоит обучение в США / UK / Китае?",
    a: "США — от $35 000 до $80 000 в год, UK — £20 000–£38 000, Китай — от $3 000 до $12 000. При этом гранты и стипендии часто покрывают 50–100% стоимости.",
  },
  {
    q: "Нужен ли высокий SAT / IELTS / TOEFL?",
    a: "Требования различаются: часть вузов test-optional. Мы определяем минимально необходимый уровень под ваш список программ и строим план подготовки.",
  },
  {
    q: "В чём секрет успешного эссе?",
    a: "Конкретика и честная история вместо общих слов. Мы находим ваш уникальный сюжет и связываем его с ценностями конкретной программы.",
  },
  {
    q: "Что входит в бесплатную консультацию?",
    a: "Разбор профиля, оценка реалистичных шансов, предварительный список вузов и план ближайших шагов. Длительность — около 40 минут.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">FAQ</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Частые вопросы о поступлении
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <Accordion type="single" collapsible className="glass rounded-3xl px-5 py-2">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border/60">
                <AccordionTrigger className="text-left font-display text-base font-medium text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
