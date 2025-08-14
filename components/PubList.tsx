"use client";
import pubsRaw from "@/data/publications.json";
import type { Publication } from "@/types/publication";
import { useMemo, useState } from "react";

// Cast the JSON into our explicit type
const pubs: Publication[] = pubsRaw as unknown as Publication[];

export default function PubList() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | "">("");

  const tags = useMemo(
    () => Array.from(new Set(pubs.flatMap(p => p.tags || []))).sort(),
    []
  );

  const filtered = pubs.filter(p => {
    const hay = (p.title + " " + p.authors + " " + p.venue).toLowerCase();
    const matchQ = q ? hay.includes(q.toLowerCase()) : true;
    const matchTag = tag ? (p.tags || []).includes(tag) : true;
    return matchQ && matchTag;
  });

  return (
    <div>
      {/* controls omitted for brevity */}
      <ul className="space-y-5">
        {filtered.map((p, i) => (
          <li key={i} className="rounded-2xl border p-4">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="text-sm text-gray-500">({p.year})</span>
            </div>
            <p className="mt-1 text-sm">{p.authors}</p>
            <p className="text-sm text-gray-600">{p.venue}</p>

            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {p.links?.pdf  && <a className="underline" href={p.links.pdf}  target="_blank">PDF</a>}
              {p.links?.doi  && <a className="underline" href={p.links.doi}  target="_blank">DOI</a>}
              {p.links?.code && <a className="underline" href={p.links.code} target="_blank">Code</a>}
            </div>

            {p.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full border px-2 py-0.5 text-xs">{t}</span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
