import type { ReactNode } from "react";

// Renders plain text that may contain Markdown-style [label](url) links,
// e.g. in data/profile.json's bio. Doesn't touch any other Markdown syntax —
// this repo's content is plain JSON text, not full Markdown.
export function renderInlineLinks(text: string): ReactNode[] {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    nodes.push(
      <a key={key++} href={href} target="_blank" rel="noreferrer">
        {label}
      </a>,
    );
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

// Plain-text version for places that can't render JSX, e.g. <meta description>.
export function stripInlineLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
