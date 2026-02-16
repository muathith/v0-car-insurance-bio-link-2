"use client"

import {
  ShieldCheck,
  Car,
  Phone,
  FileText,
  HelpCircle,
  Banknote,
  ChevronLeft,
} from "lucide-react"

const links = [
  {
    title: "تأمين شامل",
    description: "تغطية كاملة لجميع الأضرار والحوادث",
    icon: ShieldCheck,
    href: "#",
    highlight: true,
  },
  {
    title: "تأمين ضد الغير",
    description: "تغطية أضرار الطرف الثالث بأسعار مناسبة",
    icon: Car,
    href: "#",
    highlight: false,
  },
  {
    title: "احصل على عرض سعر",
    description: "قدّم طلبك الآن واحصل على عرض فوري",
    icon: Banknote,
    href: "#",
    highlight: false,
  },
  {
    title: "تقديم مطالبة",
    description: "قدّم مطالبتك بسهولة وتابع حالتها",
    icon: FileText,
    href: "#",
    highlight: false,
  },
  {
    title: "الأسئلة الشائعة",
    description: "إجابات لأكثر الأسئلة شيوعاً",
    icon: HelpCircle,
    href: "#",
    highlight: false,
  },
  {
    title: "تواصل معنا",
    description: "فريق الدعم متاح على مدار الساعة",
    icon: Phone,
    href: "#",
    highlight: false,
  },
]

export function BioLinks() {
  return (
    <section className="flex-1 px-4 pb-8 w-full max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        {links.map((link, i) => (
          <a
            key={link.title}
            href={link.href}
            className={`group flex items-center gap-4 rounded-2xl p-4 border transition-all duration-300 min-h-[68px] animate-fade-up ${
              link.highlight
                ? "bg-primary border-primary/20 shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
                : "bg-card border-border shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 active:translate-y-0"
            }`}
            style={{ animationDelay: `${320 + i * 70}ms` }}
          >
            <div
              className={`flex items-center justify-center w-12 h-12 shrink-0 rounded-xl transition-colors duration-300 ${
                link.highlight
                  ? "bg-primary-foreground/15"
                  : "bg-primary/8 group-hover:bg-primary/12"
              }`}
            >
              <link.icon
                className={`w-5 h-5 ${
                  link.highlight ? "text-primary-foreground" : "text-primary"
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`font-semibold leading-snug ${
                  link.highlight ? "text-primary-foreground" : "text-card-foreground"
                }`}
              >
                {link.title}
              </p>
              <p
                className={`text-sm leading-relaxed mt-0.5 ${
                  link.highlight
                    ? "text-primary-foreground/75"
                    : "text-muted-foreground"
                }`}
              >
                {link.description}
              </p>
            </div>
            <ChevronLeft
              className={`w-5 h-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1 ${
                link.highlight
                  ? "text-primary-foreground/60"
                  : "text-muted-foreground/50"
              }`}
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
