import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "Что такое благотворительный проект «Дадим шанс» и как в него попасть?",
    a: "«Дадим шанс» — это социальная инициатива Рианы, помогающая талантливым студентам из малообеспеченных и многодетных семей, сиротам и одарённым ребятам из регионов бесплатно поступить в топовые университеты Китая на полный грант. Отбор проходит на конкурсной основе через анкету на сайте или напрямую через Instagram @riana.china (основной ресурс связи) с пометкой #ДадимШанс.",
  },
  {
    q: "Какие расходы покрывают полные гранты в Китае (CSC и провинциальные)?",
    a: "Полные стипендии (Chinese Government Scholarship — CSC, гранты мэра Шанхая/Пекина, провинциальные стипендии) покрывают 100% стоимости обучения, бесплатное комфортное проживание в общежитии, комплексную медицинскую страховку и ежемесячную стипендию на карманные расходы (2500–3500 юаней в месяц).",
  },
  {
    q: "Когда начинать подготовку к поступлению?",
    a: "Оптимально — за 9–14 месяцев до дедлайнов (особенно для грантов CSC, дедлайны которых часто заканчиваются зимой-весной). Этого времени хватает на подготовку документов, выбор вузов и написание сильного Study Plan.",
  },
  {
    q: "Как выбрать подходящий вуз и специальность в Китае?",
    a: "Мы оцениваем академический бэкграунд, язык обучения (английский или китайский), престиж вуза в мировых рейтингах (C9 League, Project 985/211) и наличие целевых грантовых квот на вашу специальность.",
  },
  {
    q: "Нужен ли высокий HSK или IELTS для поступления на грант?",
    a: "Для англоязычных программ обычно достаточно IELTS 6.0–6.5 (или Duolingo/TOEFL, а некоторые вузы принимают справку о языке обучения Medium of Instruction). Для программ на китайском языке требуется HSK 4–5.",
  },
  {
    q: "В чём секрет успешного Study Plan / мотивационного письма?",
    a: "Конкретная исследовательская или карьерная цель, понимание, почему выбран именно этот университет и Китай, а также личная история преодоления и мотивации вместо шаблонных фраз из интернета.",
  },
  {
    q: "Что входит в первую консультацию?",
    a: "Анализ вашего академического профиля (оценки, достижения), оценка шансов на полный грант или платное обучение, подбор программ и пошаговый план поступления на ближайший академический год.",
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
