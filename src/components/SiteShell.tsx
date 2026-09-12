import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import type { ReactNode } from "react";

export function SiteShell({
  children,
  mainLabel = "San Marina Engineering main content",
}: {
  children: ReactNode;
  mainLabel?: string;
}) {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="flex-1 pb-20 sm:pb-0"
        tabIndex={-1}
        aria-label={mainLabel}
      >
        {children}
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}
