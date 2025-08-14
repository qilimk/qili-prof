"use client";
import pubsJson from "@/data/publications.json";
import type { Publication } from "@/types/publication";
import { useMemo, useState } from "react";

// Normalize & cast once so links is always an object
const pubs: Publication[] = (pubsJson as unknown as Publication[]).map(p => ({
  ...p,
  links: p.links ?? {},  // ensure links exists
}));

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
        </li>
      ))}
    </ul>
  );
}
