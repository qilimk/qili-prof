// app/recognition/page.tsx
import awards from "@/data/awards.json";
import talks from "@/data/talks.json";
import press from "@/data/press.json";

export const metadata = {
  title: "Recognition — Awards • Talks • Press",
};

type Award = { year: string | number; text: string };
type Talk  = { date: string; title: string };
type Press = { year: string | number; outlet: string; title: string; link?: string };

const toYearNum = (y: string | number) => Number(String(y).match(/\d{4}/)?.[0] ?? -1);
const toDateKey = (d: string) => {
  const mmYy = d.match(/(\d{1,2})[/-](\d{4})/); if (mmYy) return +mmYy[2] * 100 + +mmYy[1];
  const yMd = d.match(/(\d{4})-(\d{1,2})/);     if (yMd)  return +yMd[1] * 100 + +yMd[2];
  const monYy = d.match(/([A-Za-z]{3,})\s+(\d{4})/);
  if (monYy) {
    const m = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
      .indexOf(monYy[1].slice(0,3).toLowerCase()) + 1;
    return +monYy[2] * 100 + (m || 0);
  }
  const yr = d.match(/\d{4}/); return yr ? +yr[0] * 100 : -1;
};

export default function RecognitionPage() {
  const awardsSorted = [...(awards as Award[])].sort((a, b) => toYearNum(b.year) - toYearNum(a.year));
  const talksSorted  = [...(talks  as Talk[]) ].sort((a, b) => toDateKey(b.date) - toDateKey(a.date));
  const pressSorted  = [...(press  as Press[]) ].sort((a, b) => toYearNum(b.year) - toYearNum(a.year));

  return (
    <section className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Recognition</h1>
        <nav className="mt-3 text-sm">
          <a href="#awards" className="mr-4 text-blue-600 hover:underline">Awards</a>
          <a href="#talks" className="mr-4 text-blue-600 hover:underline">Talks</a>
          <a href="#press" className="text-blue-600 hover:underline">Press</a>
        </nav>
      </header>

      <section id="awards">
        <h2 className="text-2xl font-semibold">Awards</h2>
        <ul className="mt-3 space-y-2">
          {awardsSorted.map((a, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-20 shrink-0 text-gray-500">{a.year}</span>
              <span>{a.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="talks">
        <h2 className="text-2xl font-semibold">Talks</h2>
        <ul className="mt-3 space-y-2">
          {talksSorted.map((t, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-24 shrink-0 text-gray-500">{t.date}</span>
              <span>{t.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="press">
        <h2 className="text-2xl font-semibold">Press</h2>
        <ul className="mt-3 space-y-2">
          {pressSorted.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-20 shrink-0 text-gray-500">{p.year}</span>
              <span>
                <strong>{p.outlet}</strong>:{" "}
                {p.link ? (
                  <a className="text-blue-600 hover:underline" href={p.link} target="_blank" rel="noreferrer">
                    {p.title}
                  </a>
                ) : p.title}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
