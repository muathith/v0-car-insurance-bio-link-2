import { BioHeader } from "@/components/bio-header";
import { BioLinks } from "@/components/bio-links";
import { BioFeatures } from "@/components/bio-features";
import { BioFooter } from "@/components/bio-footer";
import { CookieConsent } from "@/components/cookie-consent";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decorative gradient */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-[420px]"
        style={{
          background:
            "linear-gradient(180deg, hsl(217 72% 48% / 0.08) 0%, hsl(217 72% 48% / 0.02) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <BioLinks />
        <BioFeatures />
        <BioFooter />
      </div>
      <CookieConsent />
    </main>
  );
}
