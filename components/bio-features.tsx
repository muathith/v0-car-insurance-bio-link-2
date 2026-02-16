import { Clock, BadgeCheck, Headphones } from "lucide-react"

const features = [
  {
    icon: BadgeCheck,
    title: "شركات معتمدة",
    description: "شراكات مع أفضل شركات التأمين المرخصة",
    color: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Clock,
    title: "إصدار فوري",
    description: "احصل على وثيقتك خلال دقائق معدودة",
    color: "from-accent/12 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Headphones,
    title: "دعم متواصل",
    description: "فريق خدمة العملاء متاح على مدار الساعة",
    color: "from-emerald-500/10 to-emerald-500/5",
    iconColor: "text-emerald-600",
  },
]

export function BioFeatures() {
  return (
    <section
      className="px-4 pb-10 w-full max-w-md mx-auto animate-fade-up"
      style={{ animationDelay: "750ms" }}
    >
      <h2 className="text-base font-bold text-foreground mb-4 text-center">
        {"لماذا تختارنا؟"}
      </h2>
      <div className="grid grid-cols-3 gap-2.5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center rounded-2xl bg-card border border-border p-3.5 text-center shadow-sm"
          >
            <div
              className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-b ${feature.color} mb-2.5`}
            >
              <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
            </div>
            <p className="font-semibold text-[13px] text-card-foreground leading-snug">
              {feature.title}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Trust indicators */}
      <div
        className="mt-5 flex items-center justify-center gap-6 animate-fade-up"
        style={{ animationDelay: "850ms" }}
      >
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1 rtl:space-x-reverse">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-3.5 h-3.5 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium">4.9</span>
        </div>
        <div className="h-3.5 w-px bg-border" aria-hidden="true" />
        <span className="text-xs text-muted-foreground font-medium">
          {"+10,000 عميل"}
        </span>
      </div>
    </section>
  )
}
