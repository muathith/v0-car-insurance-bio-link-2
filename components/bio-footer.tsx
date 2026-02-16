import Link from "next/link"
import { ShieldCheck } from "lucide-react"

export function BioFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card/60 backdrop-blur-sm px-4 py-8">
      <div className="max-w-md mx-auto flex flex-col items-center gap-5">
        {/* Mini brand */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            تأمينات السيارات
          </span>
        </div>

        {/* Legal links */}
        <nav
          aria-label="روابط قانونية"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          <Link
            href="/terms"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
          >
            الشروط والأحكام
          </Link>
          <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
          <Link
            href="/privacy"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
          >
            سياسة الخصوصية
          </Link>
          <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
          <Link
            href="/cookies"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
          >
            سياسة الكوكيز
          </Link>
        </nav>

        <p className="text-[11px] text-muted-foreground/70 text-center leading-relaxed">
          {"جميع الحقوق محفوظة"} &copy; {new Date().getFullYear()}{" "}
          {"تأمينات السيارات"}
        </p>
      </div>
    </footer>
  )
}
