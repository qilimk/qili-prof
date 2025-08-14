import updates from "@/data/updates.json";
import teaching from "@/data/teaching.json";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* About */}
      <section id="about">
        <h1 className="text-3xl font-bold">Jane Doe</h1>
        <p className="mt-2">Associate Professor, Department of Computer Science</p>
        <p>Example University — Office: CS 5393</p>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <a className="underline" href="https://scholar.google.com" target="_blank">Google Scholar</a>
          <a className="underline" href="https://github.com" target="_blank">GitHub</a>
          <a className="underline" href="https://www.linkedin.com" target="_blank">LinkedIn</a>
          <a className="underline" href="mailto:jane.doe@example.edu">Email</a>
        </div>

        <p className="mt-4 leading-7 text-gray-700">
          My research focuses on safe and reliable AI—uncertainty quantification, OOD detection,
          and trustworthy deployment of large language models. Current emphasis: robust LLMs and multimodal systems.
        </p>
      </section>

      {/* Updates */}
      <section id="updates">
        <h2 className="text-2xl font-semibold">Updates</h2>
        <ul className="mt-2 space-y-2">
          {updates.map((u, i) => (
            <li key={i} className="text-gray-800">
              <span className="text-gray-500">{u.date}: </span>{u.text}
            </li>
          ))}
        </ul>
      </section>

      {/* Teaching */}
      <section id="teaching">
        <h2 className="text-2xl font-semibold">Teaching</h2>
        <ul className="mt-2 space-y-2">
          {teaching.map((c, i) => (
            <li key={i}>
              <span className="font-medium">{c.term}</span>:{" "}
              <a className="underline" href={c.link} target="_blank" rel="noreferrer">{c.title}</a>
            </li>
          ))}
        </ul>
      </section>

      {/* Service / Organizing */}
      <section id="service">
        <h2 className="text-2xl font-semibold">Service</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Area Chair/Senior PC: NeurIPS, ICLR, ICML, AAAI.</li>
          <li>Associate Editor: TMLR.</li>
          <li>Co-organizer: Workshop on Reliable AI (various venues).</li>
        </ul>
      </section>

<p className="text-sm text-gray-500">
  Structure mirrors the reference site (About/Updates/Teaching/Service) with separate pages linked in the top nav. [Reference 1]
</p>

    </div>
  );
}
