import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} | Mukund Jadhav`, description: p.tagline } : {};
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];

  return (
    <main className="mx-auto flex max-w-xl flex-col gap-2 px-3 py-12">
      <Link href="/#projects" className="rounded-2xl bg-inner px-4 py-3 text-xs text-muted hover:text-ink">
        Back to all work
      </Link>

      <section className="rounded-3xl bg-inner p-5">
        <p className="text-xs text-muted">{p.category}</p>
        <h1 className="mt-1 font-display text-[32px] font-extrabold leading-tight tracking-[-0.03em]">{p.title}</h1>
        <p className="mt-3 text-muted">{p.tagline}</p>
        <dl className="mt-5 grid gap-3 border-t border-line pt-4 text-sm sm:grid-cols-3">
          {[["Status", p.status], ["My role", p.role], ["Platform", p.platform]].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs text-muted">{k}</dt>
              <dd className="mt-0.5">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="aspect-video overflow-hidden rounded-3xl bg-inner">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center text-sm text-muted">
            Add a hero screen here. Blur prices and customer data first.
          </div>
        )}
      </div>

      {p.sections.map((s) => (
        <section key={s.heading} className="rounded-3xl bg-inner p-3">
          <h2 className="mb-3 inline-block rounded-lg bg-card px-3 py-1.5 text-xs font-medium">{s.heading}</h2>
          <div className="space-y-3 px-1 pb-2 text-sm text-muted">
            {s.body.map((para) => <p key={para}>{para}</p>)}
          </div>
        </section>
      ))}

      <Link href={`/work/${next.slug}`} className="group flex items-center justify-between rounded-3xl bg-inner p-5 hover:bg-card">
        <span>
          <span className="block text-xs text-muted">Next project</span>
          <span className="mt-0.5 block font-medium">{next.short}</span>
        </span>
        <span className="text-muted group-hover:text-ink">Open</span>
      </Link>
    </main>
  );
}