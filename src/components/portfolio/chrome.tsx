import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "glass fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-soft transition-all duration-300",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="size-4" />
    </button>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with care.
        </p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="size-4 transition-colors hover:text-primary" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="size-4 transition-colors hover:text-primary" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail className="size-4 transition-colors hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
