import Image from "next/image";
import profile from "@/data/profile.json";
import links from "@/data/links.json";

export default function Sidebar() {
  return (
    <div className="space-y-6 md:sticky md:top-6 md:w-60"> {/* Fixed sidebar width */}
      <div className="flex justify-center">
        <Image
          src="/qi_headshot.jpg"
          alt={profile.name}
          width={60}    // Adjust size as needed
          height={60}   // Keep proportion
          className="rounded"
          priority
        />
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold">{profile.name}</h2>
        {links?.cv && (
          <a
            href={links.cv}
            className="italic text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {`{CV}`}
          </a>
        )}
        <p className="mt-1 text-sm leading-6">
          {profile.title}<br />
          {profile.dept}<br />
          {profile.university}<br />
          {profile.office}
        </p>
      </div>

      <ul className="space-y-1 text-sm">
        {links?.scholar && (
          <li><a href={links.scholar} target="_blank" rel="noreferrer" className="hover:underline">G. Scholar</a></li>
        )}
        {links?.linkedin && (
          <li><a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
        )}
        {links?.github && (
          <li><a href={links.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
        )}
        {links?.x && (
          <li><a href={links.x} target="_blank" rel="noreferrer" className="hover:underline">Twitter</a></li>
        )}
        {links?.email && (
          <li><a href={links.email} className="hover:underline">e-Mail</a></li>
        )}
      </ul>

      {links?.x && (
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <a class="twitter-timeline" data-tweet-limit="3" href="${links.x}">Tweets by ${profile.name}</a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            `,
          }}
        />
      )}
    </div>
  );
}
