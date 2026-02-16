"use client"

import {
  ShieldCheck,
  Car,
  Phone,
  FileText,
  HelpCircle,
  Banknote,
} from "lucide-react"

const links = [
  {
    title: "تأمين شامل",
    description: "تغطية كاملة لجميع الأضرار والحوادث",
    icon: ShieldCheck,
    href: "#",
  },
  {
    title: "تأمين ضد الغير",
    description: "تغطية أضرار الطرف الثالث بأسعار مناسبة",
    icon: Car,
    href: "#",
  },
  {
    title: "احصل على عرض سعر",
    description: "قدّم طلبك الآن واحصل على عرض فوري",
    icon: Banknote,
    href: "#",
  },
  {
    title: "تقديم مطالبة",
    description: "قدّم مطالبتك بسهولة وتابع حالتها",
    icon: FileText,
    href: "#",
  },
  {
    title: "الأسئلة الشائعة",
    description: "إجابات لأكثر الأسئلة شيوعاً",
    icon: HelpCircle,
    href: "#",
  },
  {
    title: "تواصل معنا",
    description: "فريق الدعم متاح على مدار الساعة",
    icon: Phone,
    href: "#",
  },
]

export function BioLinks() {
  return (
    <section className="flex-1 px-4 pb-8 w-full max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="flex items-center gap-4 rounded-lg bg-card p-4 border border-border shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/30 active:scale-[0.98] min-h-[60px]"
          >
            <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-lg bg-primary/10">
              <link.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-card-foreground">{link.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {link.description}
              </p>
            </div>
            <svg
              className="w-5 h-5 text-muted-foreground shrink-0 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}
