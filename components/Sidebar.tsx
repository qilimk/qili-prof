import profile from "@/data/profile.json";
import links from "@/data/links.json";

export default function Sidebar() {
  return (
    <div className="space-y-6 sticky top-6">
      <img src="public/qi_headshot.jpg" alt={profile.name} className="w-full rounded" />
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

      {/* Optional: embedded X feed, limit 3 posts */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <a class="twitter-timeline" data-tweet-limit="3" href="${links.x || "https://x.com/YourUsername"}">Tweets by Qi Li</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          `,
        }}
      />
    </div>
  );
}

