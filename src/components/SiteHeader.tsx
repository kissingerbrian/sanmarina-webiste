"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { company, navLinks } from "@/lib/content";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/Button";

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
      className="border-border bg-bg-elevated/95 safe-px sticky top-0 z-40 border-b backdrop-blur-sm"
      style={{ boxShadow: "var(--header-shadow)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 py-2.5 sm:py-3">
        <Link
          href="/"
          className="focus-visible:outline-accent min-h-12 min-w-0 shrink rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label={`${company.name} — home`}
        >
          <BrandLogo size="header" priority />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted hover:text-accent focus-visible:outline-accent inline-flex min-h-11 items-center px-3 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/contact"
            variant="secondary"
            className="hidden !min-h-10 !px-4 !py-2 sm:inline-flex"
            aria-label="Request a site assessment"
          >
            Request assessment
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="border-border text-ink focus-visible:outline-accent inline-flex h-11 w-11 items-center justify-center rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-haspopup="dialog"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span
                className={`bg-ink block h-0.5 w-5 transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`bg-ink block h-0.5 w-5 transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`bg-ink block h-0.5 w-5 transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-[rgba(26,35,48,0.4)] lg:hidden ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
        onClick={closeMenu}
      />

      <nav
        ref={panelRef}
        id={menuId}
        className={`border-border bg-bg-elevated absolute inset-x-0 top-full z-40 border-b lg:hidden ${open ? "block" : "hidden"}`}
        aria-label="Mobile primary"
        aria-hidden={!open}
        role={open ? "dialog" : undefined}
        aria-modal={open || undefined}
        aria-labelledby={open ? `${menuId}-title` : undefined}
      >
        <p id={`${menuId}-title`} className="sr-only">
          Site navigation
        </p>
        <ul
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
          role="list"
        >
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                className="text-ink hover:bg-bg-muted focus-visible:outline-accent flex min-h-12 items-center rounded-sm px-3 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <Button
              href="/contact"
              className="!min-h-12 w-full"
              onClick={closeMenu}
            >
              Request assessment
            </Button>
          </li>
        </ul>
      </nav>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {open ? "Navigation menu opened" : "Navigation menu closed"}
      </div>
    </header>
  );
}
