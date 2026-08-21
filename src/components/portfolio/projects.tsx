import { useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./reveal";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const filters = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few things I've built end to end, with the problem they solve and how they're made."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 70}
              className="group glass flex flex-col rounded-2xl p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {project.category}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="size-4" /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-primary transition-transform group-hover:translate-x-0.5"
                >
                  Live demo <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
