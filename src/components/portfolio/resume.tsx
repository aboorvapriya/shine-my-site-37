import { Award, Briefcase, Download, GraduationCap } from "lucide-react";
import { achievements, education, experience, profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";

function Timeline({
  items,
  icon: Icon,
  title,
}: {
  items: { title: string; org: string; period: string; detail: string }[];
  icon: typeof Briefcase;
  title: string;
}) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        <Icon className="size-4 text-primary" /> {title}
      </h3>
      <ol className="mt-6 space-y-6 border-l border-border pl-6">
        {items.map((item, index) => (
          <Reveal as="li" key={item.title + item.period} delay={index * 80} className="relative">
            <span className="absolute -left-[1.9rem] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-background" />
            <p className="font-mono text-xs text-primary">{item.period}</p>
            <h4 className="mt-1 text-base font-semibold">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.org}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Resume"
          title="Education, experience & recognition"
          description="Where I studied, what I've shipped, and the milestones along the way."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <Timeline
            title="Education"
            icon={GraduationCap}
            items={education.map((e) => ({
              title: e.degree,
              org: e.school,
              period: e.period,
              detail: e.detail,
            }))}
          />
          <Timeline
            title="Experience"
            icon={Briefcase}
            items={experience.map((e) => ({
              title: e.title,
              org: e.org,
              period: e.period,
              detail: e.detail,
            }))}
          />
        </div>

        <div className="mt-16">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Award className="size-4 text-primary" /> Achievements & Certifications
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="glass rounded-2xl p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-mono text-xs text-primary">{item.year}</p>
                <h4 className="mt-2 text-sm font-semibold leading-snug">{item.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Download className="size-4" /> Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
