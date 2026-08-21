import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About, Skills } from "@/components/portfolio/about";
import { Projects } from "@/components/portfolio/projects";
import { Resume } from "@/components/portfolio/resume";
import { Contact } from "@/components/portfolio/contact";
import { BackToTop, Footer } from "@/components/portfolio/chrome";
import { profile } from "@/lib/portfolio-data";

const title = `${profile.name} — ${profile.role}`;
const description =
  "Portfolio of a full-stack developer: selected projects, skills, experience and a way to get in touch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
