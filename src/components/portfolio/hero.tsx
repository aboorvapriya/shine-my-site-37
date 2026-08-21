import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      <div className="halo pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="grid-lines pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Available for new roles
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl">
              {profile.name}
              <span className="block text-gradient">{profile.role}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lift"
              >
                View My Work <ArrowDown className="size-4" />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Contact Me <Mail className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> {profile.location}
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Github className="size-4 text-primary" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4 text-primary" /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[1.75rem] p-2 shadow-soft">
            <img
              src={profileImg}
              alt={`${profile.name}, ${profile.role}`}
              width={1024}
              height={1280}
              className="h-full w-full rounded-[1.4rem] object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl px-4 py-3 text-center shadow-soft">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Currently
            </p>
            <p className="mt-1 text-sm font-medium">Building thoughtful web products</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
