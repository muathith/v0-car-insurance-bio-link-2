import Link from "next/link"
import { ShieldCheck, ArrowRight } from "lucide-react"

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string
  lastUpdated: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-card px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors min-h-[44px]"
            aria-label="العودة للرئيسية"
          >
            <ArrowRight className="w-5 h-5" />
            <ShieldCheck className="w-6 h-6" />
            <span className="font-bold text-foreground">تأمينات السيارات</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-8">
        <article className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-2 text-balance">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            آخر تحديث: {lastUpdated}
          </p>
          <div className="prose-container space-y-6 text-card-foreground leading-relaxed [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-[15px] [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pr-6 [&_ul]:space-y-2 [&_li]:text-[15px] [&_li]:leading-relaxed">
            {children}
          </div>
        </article>
      </main>

      <footer className="border-t border-border bg-card px-4 py-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
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
    </div>
  )
}
