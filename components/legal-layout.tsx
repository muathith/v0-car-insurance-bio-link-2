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
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-md px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center justify-center w-11 h-11 shrink-0 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="العودة للرئيسية"
          >
            <ArrowRight className="w-5 h-5 text-primary" />
          </Link>
          <div className="flex items-center gap-2 min-w-0">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <span className="font-bold text-foreground truncate">
              تأمينات السيارات
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-8">
        <article className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-2 text-balance">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {"آخر تحديث: "}{lastUpdated}
          </p>
          <div className="space-y-6 text-foreground/85 leading-relaxed [&_section]:rounded-xl [&_section]:bg-card [&_section]:border [&_section]:border-border [&_section]:p-5 [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mb-3 [&_p]:text-[15px] [&_p]:leading-[1.7] [&_ul]:list-disc [&_ul]:pr-6 [&_ul]:space-y-1.5 [&_ul]:mt-2 [&_li]:text-[15px] [&_li]:leading-[1.7] [&_a]:text-primary [&_a]:underline [&_a:hover]:text-primary/80">
            {children}
          </div>
        </article>
      </main>

      <footer className="border-t border-border bg-card px-4 py-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
          <nav
            aria-label="روابط قانونية"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
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
          </nav>
          <p className="text-xs text-muted-foreground text-center">
            {"جميع الحقوق محفوظة"} &copy; {new Date().getFullYear()}{" "}
            {"تأمينات السيارات"}
          </p>
        </div>
      </footer>
    </div>
  )
}
