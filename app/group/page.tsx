import group from "@/data/group.json";

export default function GroupPage() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Group</h1>
      <ul className="space-y-3">
        {group.map((m, i) => (
          <li key={i} className="rounded border p-4">
            <p className="font-medium">{m.name}</p>
            <p className="text-sm text-gray-600">{m.role}</p>
            {m.site && <a className="text-sm underline" href={m.site} target="_blank">Website</a>}
          </li>
        ))}
      </ul>
    </section>
  );
}

