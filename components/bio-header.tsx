import { ShieldCheck } from "lucide-react"

export function BioHeader() {
  return (
    <header className="flex flex-col items-center px-4 pt-14 pb-6">
      {/* Animated logo container */}
      <div className="relative mb-6 animate-fade-up">
        <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-xl scale-125" aria-hidden="true" />
        <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
          <ShieldCheck className="w-10 h-10 text-primary-foreground" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-accent shadow-md shadow-accent/30 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6.5 12L2 7.5L3.5 6L6.5 9L12.5 3L14 4.5L6.5 12Z" fill="currentColor" className="text-accent-foreground" />
          </svg>
        </div>
      </div>

      <h1
        className="text-2xl font-bold text-foreground text-center text-balance animate-fade-up"
        style={{ animationDelay: "80ms" }}
      >
        تأمينات السيارات
      </h1>
      <p
        className="mt-2.5 text-muted-foreground text-center text-balance max-w-[280px] leading-relaxed animate-fade-up"
        style={{ animationDelay: "160ms" }}
      >
        حماية شاملة لسيارتك بأفضل الأسعار وأسرع الخدمات
      </p>

      {/* Trust badge */}
      <div
        className="mt-4 flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-sm animate-fade-up"
        style={{ animationDelay: "240ms" }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          {"متاح الآن \u2022 إصدار فوري"}
        </span>
      </div>
    </header>
  )
}
