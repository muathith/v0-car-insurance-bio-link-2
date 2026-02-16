import { BioHeader } from "@/components/bio-header"
import { BioLinks } from "@/components/bio-links"
import { BioFeatures } from "@/components/bio-features"
import { BioFooter } from "@/components/bio-footer"
import { CookieConsent } from "@/components/cookie-consent"

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <BioHeader />
      <BioLinks />
      <BioFeatures />
      <BioFooter />
      <CookieConsent />
    </main>
  )
}
