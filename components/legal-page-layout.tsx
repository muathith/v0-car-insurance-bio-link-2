import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors shrink-0"
            aria-label="العودة للرئيسية"
          >
            <ArrowRight className="w-5 h-5 text-primary" />
          </Link>
          <h1 className="text-lg font-bold text-foreground truncate">
            {title}
          </h1>
        </div>
      </header>

      <main className="flex-1 px-4 py-8 max-w-2xl mx-auto w-full">
        <p className="text-sm text-muted-foreground mb-6">
          {"آخر تحديث: "}{lastUpdated}
        </p>
        <article className="prose-legal flex flex-col gap-6">{children}</article>
      </main>

      <footer className="border-t border-border bg-card px-4 py-4">
        <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
          >
            الشروط والأحكام
          </Link>
          <span className="text-border" aria-hidden="true">
            |
          </span>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
          >
            سياسة الخصوصية
          </Link>
          <span className="text-border" aria-hidden="true">
            |
          </span>
          <Link
            href="/cookies"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
          >
            سياسة الكوكيز
          </Link>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">
          {"جميع الحقوق محفوظة"} &copy; {new Date().getFullYear()}{" "}
          {"تأمينات السيارات"}
        </p>
      </footer>
    </div>
  )
}
