import exps from "@/data/experiences.json";

export default function ExperiencesPage() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Experiences</h1>
      <ul className="space-y-2">
        {exps.map((e, i) => (
          <li key={i}><span className="text-gray-500">{e.year}</span> — {e.text}</li>
        ))}
      </ul>
    </section>
  );
}

