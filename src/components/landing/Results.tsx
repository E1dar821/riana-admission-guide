import { Reveal } from "@/components/Reveal";

const tiles = [
  { value: "20+", title: "Принято в топ-20 вузов США", note: "Stanford, Cornell, Duke, NYU" },
  { value: "$3.5M", title: "Стипендий и грантов", note: "получили студенты за 7 лет" },
  { value: "Tsinghua", title: "Business Analytics", note: "полная стипендия CSC" },
  { value: "UCL", title: "Economics & Policy", note: "оффер с частичным грантом" },
];

export function Results() {
  return (
    <section id="results" className="relative overflow-hidden bg-navy-gradient py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-gradient opacity-10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Результаты</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Достижения студентов Riana Admissions
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 100}>
              <div className="glass-dark h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1.5">
                <p className="font-display text-3xl font-semibold text-accent">{t.value}</p>
                <p className="mt-3 text-sm font-medium text-primary-foreground">{t.title}</p>
                <p className="mt-1 text-xs text-primary-foreground/60">{t.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
