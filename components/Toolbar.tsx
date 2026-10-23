"use client";
import { useEffect, useState } from "react";

export default function Toolbar({ initials }: { initials: string }) {
  const [view, setView] = useState<"web" | "paper">("web");

  useEffect(() => {
    document.documentElement.dataset.view = view;
  }, [view]);

  const seg = (v: "web" | "paper", label: string) => (
    <button
      type="button"
      role="radio"
      aria-checked={view === v}
      onClick={() => setView(v)}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
        view === v ? "bg-accent text-ink" : "text-muted hover:text-ink"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="toolbar sticky top-0 z-10 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1040px] items-center justify-between px-5 py-3 md:px-20">
        <a href="#top" className="font-display text-[13px] font-bold">{initials}</a>
        <div className="flex items-center gap-2">
          <div role="radiogroup" aria-label="Resume view" className="flex rounded-full border border-line bg-inner p-0.5">
            {seg("web", "Web")}
            {seg("paper", "Paper")}
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-card hover:bg-ink-hover"
          >
            Save PDF
          </button>
        </div>
      </div>
    </div>
  );
}