import { Clock, BadgeCheck, Headphones } from "lucide-react"

const features = [
  {
    icon: BadgeCheck,
    title: "شركات معتمدة",
    description: "شراكات مع أفضل شركات التأمين المرخصة",
  },
  {
    icon: Clock,
    title: "إصدار فوري",
    description: "احصل على وثيقتك خلال دقائق معدودة",
  },
  {
    icon: Headphones,
    title: "دعم متواصل",
    description: "فريق خدمة العملاء متاح على مدار الساعة",
  },
]

export function BioFeatures() {
  return (
    <section className="px-4 pb-10 w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold text-foreground mb-4 text-center">
        لماذا تختارنا؟
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center rounded-lg bg-card border border-border p-4 text-center"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/15 mb-2">
              <feature.icon className="w-5 h-5 text-accent" />
            </div>
            <p className="font-semibold text-sm text-card-foreground leading-snug">
              {feature.title}
            </p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
