import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { contact, icons } from "@/lib/content";

import { ContactForm } from "./ContactForm";

/**
 * Contact / CTA banner (Figma 2:491).
 * Two blurred accent glows sit behind the panel corners.
 */
export function ContactSection() {
  return (
    <section
      id="kontak"
      aria-labelledby="kontak-heading"
      className="border-t border-line-soft pb-16 pt-16 lg:pb-24 lg:pt-24"
    >
      <div className="relative overflow-hidden rounded-banner border border-edge bg-panel backdrop-blur-xl">
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-indigo/10 blur-[64px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-teal/10 blur-[64px]"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 gap-12 p-6 sm:p-10 lg:grid-cols-12 lg:p-[57px]">
          <div className="flex flex-col gap-6 lg:col-span-6 lg:pb-[75px] lg:pt-0.5">
            <Pill dot>{contact.badge}</Pill>

            <h2 id="kontak-heading" className="type-section-title text-ink">
              {contact.title}
            </h2>

            <p className="type-subheadline text-ink-soft">{contact.description}</p>

            <div className="flex flex-col gap-4 pt-4">
              <a
                href={contact.email.href}
                className="flex items-center gap-3 rounded-card border border-line bg-surface p-[13px] transition-colors hover:border-line-strong"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-btn bg-surface-hover">
                  <Icon icon={icons.mail} alt="" />
                </span>
                <span className="flex flex-col">
                  <span className="font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink-muted">
                    {contact.email.label}
                  </span>
                  <span className="font-body text-[15px]/6 font-medium text-ink">
                    {contact.email.address}
                  </span>
                </span>
              </a>

              <ul className="flex flex-wrap items-center gap-3 pt-2">
                {contact.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="inline-flex items-center gap-2 rounded-btn border border-edge-soft bg-glass px-[17px] py-[9px] font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink backdrop-blur-md transition-colors hover:border-line-strong"
                    >
                      <Icon icon={social.icon} alt="" />
                      {social.label}
                      {social.placeholder ? (
                        <span className="sr-only"> (tautan belum tersedia)</span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}