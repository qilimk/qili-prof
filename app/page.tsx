// app/page.tsx
import profile from "@/data/profile.json";
import updates from "@/data/updates.json";
import teaching from "@/data/teaching.json";

export default function HomePage() {
  return (
    <section className="space-y-10">
      {/* About */}
      <div id="about">
        <h1 className="mb-4 text-3xl font-bold">About</h1>
        <p className="leading-8 text-gray-800">{profile.bio}</p>
      </div>

      {/* Updates */}
      <div id="updates">
        <h2 className="mb-4 text-2xl font-semibold">Updates</h2>
        <ul className="space-y-2">
          {updates.map((u, i) => (
            <li key={i}>
              <span className="text-gray-600">{u.date}:</span> {u.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Teaching */}
      <div id="teaching">
        <h2 className="mb-4 text-2xl font-semibold">Teaching</h2>
        <ul className="space-y-2">
          {teaching.map((c, i) => (
            <li key={i}><span className="font-medium">{c.term}</span>: {c.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
