import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";

const fieldClass =
  "w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    const params = new URLSearchParams({
      subject: String(data.get("subject") ?? ""),
      body: `${data.get("message") ?? ""}\n\n— ${data.get("name") ?? ""} (${data.get("email") ?? ""})`,
    });
    window.location.href = `mailto:${profile.email}?${params.toString()}`;
    toast.success("Opening your email client…");
    form.reset();
    setSending(false);
  };

  return (
    <section id="contact" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a role, project or question in mind? Send a note and I'll reply within a couple of days."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="glass rounded-2xl p-6 shadow-soft">
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-primary" />
                <a href={`mailto:${profile.email}`} className="hover:underline">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 text-primary" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-primary" />
                {profile.location}
              </li>
            </ul>
            <div className="mt-6 flex gap-3 border-t border-border pt-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="rounded-xl border border-border p-2.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="size-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-xl border border-border p-2.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="rounded-xl border border-border p-2.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="glass rounded-2xl p-6 shadow-soft">
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input id="name" name="name" required className={fieldClass} placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="jane@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className={fieldClass}
                  placeholder="Frontend role at…"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={fieldClass}
                  placeholder="Tell me a bit about what you're working on."
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lift disabled:opacity-60"
                >
                  Send message <Send className="size-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
