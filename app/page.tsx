import Link from "next/link";
import Toolbar from "@/components/Toolbar";
import StatusPill from "@/components/StatusPill";
import {
  site, projects, summary, experience, howIWork, skills, education, certifications, languages,
} from "@/lib/content";

const H2 = ({ id, children }: { id?: string; children: React.ReactNode }) => (
  <h2 id={id} className="text-[13px] font-semibold uppercase leading-4 tracking-[0.14em] text-accent-dark">{children}</h2>
);

// Rail on the left (dates, company), content on the right
const Row = ({ rail, children }: { rail: React.ReactNode; children: React.ReactNode }) => (
  <div className="role grid gap-1 border-t border-line py-5 first:border-t-0 md:grid-cols-[24%_1fr] md:gap-8">
    <div className="text-sm text-muted">{rail}</div>
    <div>{children}</div>
  </div>
);

const Section = ({ children }: { children: React.ReactNode }) => <section className="mt-14">{children}</section>;

export default function Home() {
  return (
    <>
      <Toolbar initials="MJ" />
      <main className="sheet mx-auto max-w-[1040px] px-5 pb-28 pt-14 md:px-20" id="top">
        {/* Header */}
        <header className="flex items-start justify-between gap-6">
          <div>
            <h1 className="font-display text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] md:text-[52px] lg:text-[64px]">{site.name}</h1>
            <p className="mt-2 text-lg text-muted">{site.role}</p>
            <ul className="mt-4 space-y-0.5 text-sm text-muted">
              <li>{site.location}</li>
              <li><a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a></li>
              <li><a href={site.linkedin} className="hover:text-ink">linkedin.com/in/mukund-jadhav-b2892892</a></li>
              <li><a href={site.behance} className="hover:text-ink">behance.net/mukundjadhav30</a></li>
            </ul>
            <div className="web-only mt-5">
              <StatusPill text="Open to senior product design roles" city="Nashik" />
            </div>
          </div>
          <div className="web-only h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-inner md:h-36 md:w-36">
            {site.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.photo} alt={site.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center text-2xl font-semibold text-muted">MJ</div>
            )}
          </div>
        </header>

        <p className="mt-10 max-w-2xl text-lg leading-snug">{summary}</p>

        {/* Experience */}
        <Section>
          <H2 id="experience">Experience</H2>
          <div className="mt-4">
            {experience.map((e) => (
              <Row
                key={e.company}
                rail={
                  <>
                    <p>{e.years}</p>
                    <p className="mt-1 text-[15px] font-semibold text-ink">{e.company}</p>
                    <p>{e.place}</p>
                  </>
                }
              >
                <h3 className="font-display text-[19px] font-semibold leading-snug">{e.title}</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Row>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section>
          <H2 id="projects">Selected projects</H2>
          <div className="web-only mt-5 grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
                <div className="aspect-[3/2] overflow-hidden rounded-xl bg-inner">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.short} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-muted">Add screens</div>
                  )}
                </div>
                <h3 className="mt-3 font-display text-[19px] font-semibold group-hover:underline">{p.short}</h3>
                <p className="text-sm text-muted">{p.category} &middot; {p.result}</p>
              </Link>
            ))}
          </div>
          <ul className="paper-only mt-4 space-y-2 text-sm">
            {projects.map((p) => (
              <li key={p.slug}>
                <span className="font-semibold">{p.short}</span> &mdash; {p.result}
              </li>
            ))}
          </ul>
        </Section>

        {/* How I work */}
        <Section>
          <H2>How I work</H2>
          <div className="mt-4">
            {howIWork.map((h) => (
              <Row key={h.label} rail={<span className="font-medium text-ink">{h.label}</span>}>
                <p className="text-sm text-muted">{h.text}</p>
              </Row>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section>
          <H2>Skills</H2>
          <div className="mt-4">
            {skills.map((s) => (
              <Row key={s.label} rail={<span className="font-medium text-ink">{s.label}</span>}>
                <p className="text-sm text-muted">{s.text}</p>
              </Row>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section>
          <H2>Education and certifications</H2>
          <div className="mt-4">
            {[...education, ...certifications].map((e) => (
              <Row key={e.title} rail={e.years}>
                <p className="font-medium">{e.title}</p>
                <p className="text-sm text-muted">{e.school}</p>
              </Row>
            ))}
            <Row rail={<span className="font-medium text-ink">Languages</span>}>
              <p className="text-sm text-muted">{languages}</p>
            </Row>
          </div>
        </Section>

        {/* Contact (web only) */}
        <section id="contact" className="web-only mt-16 border-t border-line pt-12">
          <h2 className="font-display text-[28px] font-bold tracking-tight">Hiring for a product design role?</h2>
          <p className="mt-2 text-muted">Email is fastest.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-card hover:bg-ink-hover">
              Email Mukund
            </a>
            <a href={site.linkedin} className="rounded-full border border-line px-6 py-3 text-sm font-semibold hover:bg-inner">
              LinkedIn
            </a>
            <a href={site.behance} className="rounded-full border border-line px-6 py-3 text-sm font-semibold hover:bg-inner">
              Behance
            </a>
          </div>
        </section>

        <footer className="web-only mt-12 flex justify-between border-t border-line pt-6 text-sm text-muted">
          <span>&copy; 2026 {site.name}</span>
          <a href="#top" className="hover:text-ink">Back to top</a>
        </footer>
      </main>
    </>
  );
}