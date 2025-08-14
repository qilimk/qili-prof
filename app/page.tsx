import awards from "@/data/awards.json";
import talks from "@/data/talks.json";
import press from "@/data/press.json";

type Award = { year: string | number; text: string };
type Talk  = { date: string; title: string };
type Press = { year: string | number; outlet: string; title: string; link?: string };

// helper to sort numbers/years descending, falling back safely
function toYearNum(y: string | number) {
  const m = String(y).match(/\d{4}/);
  return m ? Number(m[0]) : -Infinity;
}

// parse things like "03/2024", "3/2024", "2024-03", "Mar 2024"
function toDateKey(d: string) {
  // Try MM/YYYY
  const mmYy = d.match(/(\d{1,2})[/-](\d{4})/);
  if (mmYy) {
    const mm = Number(mmYy[1]);
    const yy = Number(mmYy[2]);
    return yy * 100 + mm; // 2024*100+3 = 202403
  }
  // Try YYYY-MM
  const yMd = d.match(/(\d{4})-(\d{1,2})/);
  if (yMd) return Number(yMd[1]) * 100 + Number(yMd[2]);
  // Try "Mon YYYY"
  const monYy = d.match(/([A-Za-z]{3,})\s+(\d{4})/);
  if (monYy) {
    const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    const idx = months.indexOf(monYy[1].slice(0,3).toLowerCase());
    return Number(monYy[2]) * 100 + (idx >= 0 ? idx + 1 : 0);
  }
  // Try bare year
  const yr = d.match(/\d{4}/);
  if (yr) return Number(yr[0]) * 100 + 0;
  return -Infinity;
}

export const metadata = {
  title: "Recognition — Awards, Talks, Press",
  description: "Selected awards, invited talks, and press mentions.",
};

export default function RecognitionPage() {
  const awardsSorted = [...(awards as Award[])].sort((a, b) => toYearNum(b.year) - toYearNum(a.year));
  const talksSorted  = [...(talks  as Talk[]) ].sort((a, b) => toDateKey(b.date) - toDateKey(a.date));
  const pressSorted  = [...(press  as Press[]) ].sort((a, b) => toYearNum(b.year) - toYearNum(a.year));

  return (
    <section className="space-y-10">
      {/* Page title + TOC */}
      <div>
        <h1 className="text-3xl font-bold">Recognition</h1>
        <p className="mt-2 text-gray-600">Highlights consolidated into three sections.</p>
        <nav className="mt-4 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li><a href="#awards" className="text-blue-600 hover:underline">Awards</a></li>
            <li><a href="#talks"  className="text-blue-600 hover:underline">Talks</a></li>
            <li><a href="#press"  className="text-blue-600 hover:underline">Press</a></li>
          </ul>
        </nav>
      </div>

      {/* Awards */}
      <div id="awards">
        <h2 className="text-2xl font-semibold">Awards</h2>
        <ul className="mt-3 space-y-2">
          {awardsSorted.map((a, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-20 shrink-0 text-gray-500">{a.year}</span>
              <span>{a.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Talks */}
      <div id="talks">
        <h2 className="text-2xl font-semibold">Talks</h2>
        <ul className="mt-3 space-y-2">
          {talksSorted.map((t, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-24 shrink-0 text-gray-500">{t.date}</span>
              <span>{t.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Press */}
      <div id="press">
        <h2 className="text-2xl font-semibold">Press</h2>
        <ul className="mt-3 space-y-2">
          {pressSorted.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-20 shrink-0 text-gray-500">{p.year}</span>
              <span>
                <strong>{p.outlet}</strong>:{" "}
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4">
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
           className="text-sm text-blue-600 hover:underline">
          Back to top
        </a>
      </div>
    </section>
  );
}
