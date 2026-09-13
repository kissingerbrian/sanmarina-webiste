"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { company, navLinks, type NavItem } from "@/lib/content";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/Button";

function DesktopNavItem({ link }: { link: NavItem }) {
  const [open, setOpen] = useState(false);
  const itemId = useId();

  if (!link.children?.length) {
    return (
      <li>
        <Link
          href={link.href}
          className="text-muted hover:text-accent focus-visible:outline-accent inline-flex min-h-11 items-center px-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {link.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="text-muted hover:text-accent focus-visible:outline-accent inline-flex min-h-11 items-center gap-1 px-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-expanded={open}
        aria-controls={`${itemId}-menu`}
        onClick={() => setOpen((value) => !value)}
      >
        {link.label}
        <span aria-hidden="true" className="text-[0.65rem]">
          ▾
        </span>
      </button>
      <ul
        id={`${itemId}-menu`}
        role="list"
        className={`border-border bg-bg-elevated absolute top-full left-0 z-50 min-w-[14rem] border py-2 shadow-sm ${open ? "block" : "hidden"}`}
      >
        <li>
          <Link
            href={link.href}
            className="text-ink hover:bg-bg-muted hover:text-accent focus-visible:outline-accent block px-4 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={() => setOpen(false)}
          >
            Overview
          </Link>
        </li>
        {link.children.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              className="text-muted hover:bg-bg-muted hover:text-accent focus-visible:outline-accent block px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    setExpanded(null);
  }, []);

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
          aria-label={`${company.publicName} — home`}
        >
          <BrandLogo size="header" priority />
        </Link>

        <nav className="hidden items-center xl:flex" aria-label="Primary">
          <ul className="flex items-center gap-0.5" role="list">
            {navLinks.map((link) => (
              <DesktopNavItem key={link.href + link.label} link={link} />
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/contact"
            variant="secondary"
            className="hidden !min-h-10 !px-3 !py-2 !text-xs tracking-wide uppercase lg:inline-flex"
            aria-label="Request a site assessment"
          >
            Request a site assessment
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="border-border text-ink focus-visible:outline-accent inline-flex h-11 w-11 items-center justify-center rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 xl:hidden"
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
        className={`fixed inset-0 z-30 bg-[rgba(26,35,48,0.4)] xl:hidden ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
        onClick={closeMenu}
      />

      <nav
        ref={panelRef}
        id={menuId}
        className={`border-border bg-bg-elevated absolute inset-x-0 top-full z-40 max-h-[min(80vh,36rem)] overflow-y-auto border-b xl:hidden ${open ? "block" : "hidden"}`}
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
            <li key={link.href + link.label}>
              {link.children?.length ? (
                <div>
                  <button
                    type="button"
                    className="text-ink hover:bg-bg-muted focus-visible:outline-accent flex min-h-12 w-full items-center justify-between rounded-sm px-3 py-3 text-left text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    aria-expanded={expanded === link.label}
                    onClick={() =>
                      setExpanded((value) =>
                        value === link.label ? null : link.label,
                      )
                    }
                  >
                    {link.label}
                    <span aria-hidden="true">▾</span>
                  </button>
                  {expanded === link.label ? (
                    <ul
                      className="border-border mb-2 ml-3 border-l pl-3"
                      role="list"
                    >
                      <li>
                        <Link
                          ref={index === 0 ? firstLinkRef : undefined}
                          href={link.href}
                          className="text-ink hover:text-accent flex min-h-10 items-center text-sm font-medium"
                          onClick={closeMenu}
                        >
                          Overview
                        </Link>
                      </li>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="text-muted hover:text-accent flex min-h-10 items-center text-sm"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  className="text-ink hover:bg-bg-muted focus-visible:outline-accent flex min-h-12 items-center rounded-sm px-3 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="pt-2">
            <Button
              href="/contact"
              className="!min-h-12 w-full"
              onClick={closeMenu}
            >
              Request a site assessment
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
