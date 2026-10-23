"use client";
import { useEffect, useState } from "react";

export default function TopBar({ location }: { location: string }) {
  const [time, setTime] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "numeric", minute: "2-digit", second: "2-digit" }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  }

  return (
    <div className="flex items-center justify-between rounded-2xl bg-card px-4 py-3 text-xs">
      <span>{location}</span>
      <span className="flex items-center gap-3">
        <span className="tabular-nums text-muted">{time}</span>
        <button onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          className="rounded-md px-1.5 py-0.5 text-muted hover:text-ink">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </span>
    </div>
  );
}