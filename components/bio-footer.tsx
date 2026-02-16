import Link from "next/link"

export function BioFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card px-4 py-6">
      <div className="max-w-md mx-auto flex flex-col items-center gap-4">
        <nav aria-label="روابط قانونية" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
          >
            الشروط والأحكام
          </Link>
          <span className="text-border" aria-hidden="true">|</span>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
          >
            سياسة الخصوصية
          </Link>
          <span className="text-border" aria-hidden="true">|</span>
          <Link
            href="/cookies"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
          >
            سياسة الكوكيز
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground text-center">
          {'جميع الحقوق محفوظة'} &copy; {new Date().getFullYear()} {'تأمينات السيارات'}
        </p>
      </div>
    </footer>
  )
}
