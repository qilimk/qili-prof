"use client";
import pubs from "@/data/publications.json";
import { useMemo, useState } from "react";

export default function PubList() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const tags = useMemo(() => Array.from(new Set(pubs.flatMap(p => p.tags || []))).sort(), []);
  const results = pubs.filter(p => {
    const hitQ = q ? (p.title + p.authors + p.venue).toLowerCase().includes(q.toLowerCase()) : true;
    const hitTag = tag ? (p.tags || []).includes(tag) : true;
    return hitQ && hitTag;
  });

  return (
    <>
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search title/authors/venue"
          className="w-full md:w-80 rounded border px-3 py-2"
        />
        <select value={tag} onChange={e => setTag(e.target.value)} className="w-full md:w-56 rounded border px-3 py-2">
          <option value="">All tags</option>
          {tags.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <span className="text-sm text-gray-500">{results.length} results</span>
      </div>
      <ul className="space-y-5">
        {results.map((p, i) => (
          <li key={i} className="rounded border p-4">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="text-sm text-gray-500">({p.year})</span>
            </div>
            <p className="mt-1 text-sm">{p.authors}</p>
            <p className="text-sm text-gray-600">{p.venue}</p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {p.links?.pdf && <a href={p.links.pdf} target="_blank" className="underline">PDF</a>}
              {p.links?.doi && <a href={p.links.doi} target="_blank" className="underline">DOI</a>}
              {p.links?.code && <a href={p.links.code} target="_blank" className="underline">Code</a>}
            </div>
            {p.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="rounded-full border px-2 py-0.5 text-xs">{t}</span>)}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}

