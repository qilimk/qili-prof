// components/Sidebar.tsx
import Image from "next/image";
import profile from "@/data/profile.json";
import links from "@/data/links.json";

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Fixed-height, responsive headshot */}
      <div className="relative w-64 h-64 md:h-72 overflow-hidden rounded">
        <Image
          src="/qi_headshot.jpg"      // file must be in /public
          alt={profile.name}
          fill                         // fills the container box
          className="object-cover"     // crop to fill without distortion
          priority
        />
      </div>

      <div>
        <h2 className="text-xl font-bold">{profile.name}</h2>
        <a href={links.cv} className="italic text-blue-600 hover:underline">{`{CV}`}</a>
        <p className="mt-1 text-sm leading-6">
          {profile.title}<br />
          {profile.dept}<br />
          {profile.university}<br />
          {profile.office}
        </p>
      </div>

      <ul className="space-y-1 text-sm">
        {links.scholar && <li><a href={links.scholar} target="_blank" className="hover:underline">G. Scholar</a></li>}
        {links.linkedin && <li><a href={links.linkedin} target="_blank" className="hover:underline">LinkedIn</a></li>}
        {links.github && <li><a href={links.github} target="_blank" className="hover:underline">GitHub</a></li>}
        {links.x && <li><a href={links.x} target="_blank" className="hover:underline">Twitter</a></li>}
        <li><a href={links.email} className="hover:underline">e-Mail</a></li>
      </ul>
    </div>
  );
}
