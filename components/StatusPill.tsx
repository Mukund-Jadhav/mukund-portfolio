"use client";
import { useEffect, useState } from "react";

export default function StatusPill({ text, city }: { text: string; city: string }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" }));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm shadow-sm">
      <span className="h-2 w-2 rounded-full bg-dot" />
      {text}
      {time && <span className="border-l border-line pl-2 tabular-nums text-muted">{time} in {city}</span>}
    </span>
  );
}