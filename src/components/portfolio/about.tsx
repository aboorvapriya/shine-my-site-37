import { Code2, Layers, Sparkles } from "lucide-react";
import { profile, skills } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";

const highlights = [
  { icon: Code2, label: "Clean, tested code" },
  { icon: Layers, label: "End-to-end ownership" },
  { icon: Sparkles, label: "Design-minded engineering" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="A developer who sweats the details"
          description="Background, focus areas and where I want to go next."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal className="space-y-5">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120} className="glass rounded-2xl p-6 shadow-soft">
            <ul className="space-y-5">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="rounded-xl bg-primary/12 p-2 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
              <div>
                <dt className="text-muted-foreground">Based in</dt>
                <dd className="mt-1 font-medium">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="mt-1 truncate font-medium">{profile.email}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="Languages, frameworks and practices I use day to day."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, groupIndex) => (
            <Reveal
              key={group.group}
              delay={groupIndex * 90}
              className="glass rounded-2xl p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                {group.group}
              </h3>
              <ul className="mt-6 space-y-5">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span
                        className="block h-full rounded-full bg-primary transition-[width] duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
