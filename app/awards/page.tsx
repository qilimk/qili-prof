import awards from "@/data/awards.json";

export default function AwardsPage() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Awards</h1>
      <ul className="space-y-2">
        {awards.map((a, i) => (
          <li key={i}><span className="text-gray-500">{a.year}</span> — {a.text}</li>
        ))}
      </ul>
    </section>
  );
}

