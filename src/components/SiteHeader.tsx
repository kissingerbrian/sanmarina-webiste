"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { company, navLinks } from "@/lib/content";
import { NeuButton } from "@/components/NeuButton";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, closeMenu]);

  return (
    <header
      role="banner"
      className="safe-px sticky top-0 z-40 pt-[max(0.75rem,env(safe-area-inset-top))]"
    >
      <div className="neu-raised xs:gap-3 xs:rounded-3xl xs:px-4 xs:py-3 mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-2xl px-3 py-2.5 sm:px-6">
        <a
          href="#top"
          className="font-display text-neu-text focus-visible:outline-neu-accent xs:text-sm min-h-11 min-w-0 shrink rounded-xl text-xs font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base"
          aria-label={`${company.name} — back to top`}
        >
          <span aria-hidden="true">
            {company.shortName}
            <span className="text-neu-accent"> Engineering</span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-0.5" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-neu-muted hover:text-neu-accent focus-visible:outline-neu-accent inline-flex min-h-11 items-center rounded-xl px-2.5 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 2xl:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <NeuButton
            href="#contact"
            variant="soft"
            className="hidden !min-h-11 !px-4 !py-2 md:inline-flex"
            aria-label="Get in touch with San Marina Engineering"
          >
            Get in touch
          </NeuButton>
          <button
            ref={toggleRef}
            type="button"
            className="neu-raised-sm text-neu-text focus-visible:outline-neu-accent inline-flex h-11 w-11 items-center justify-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-haspopup="dialog"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span
                className={`bg-neu-text block h-0.5 w-5 transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`bg-neu-text block h-0.5 w-5 transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`bg-neu-text block h-0.5 w-5 transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-[rgba(42,53,68,0.35)] xl:hidden ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
        onClick={closeMenu}
      />

      <nav
        ref={panelRef}
        id={menuId}
        className={`neu-raised safe-px xs:p-4 absolute inset-x-0 top-[calc(100%-0.25rem)] z-40 mx-auto mt-2 max-w-6xl rounded-3xl p-3 xl:hidden ${open ? "block" : "hidden"}`}
        aria-label="Mobile primary"
        aria-hidden={!open}
        role={open ? "dialog" : undefined}
        aria-modal={open || undefined}
        aria-labelledby={open ? `${menuId}-title` : undefined}
      >
        <p id={`${menuId}-title`} className="sr-only">
          Site navigation
        </p>
        <ul className="flex flex-col gap-1" role="list">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                className="text-neu-text hover:bg-neu-bg-deep focus-visible:outline-neu-accent flex min-h-12 items-center rounded-2xl px-4 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 md:hidden">
            <NeuButton
              href="#contact"
              className="!min-h-12 w-full"
              onClick={closeMenu}
            >
              Get in touch
            </NeuButton>
          </li>
        </ul>
      </nav>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {open ? "Navigation menu opened" : "Navigation menu closed"}
      </div>
    </header>
  );
}
