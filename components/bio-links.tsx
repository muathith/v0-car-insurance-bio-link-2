"use client";
import React, { useRef, useEffect } from "react";
import {
  ShieldCheck,
  Car,
  Phone,
  FileText,
  HelpCircle,
  Banknote,
  ChevronLeft,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Star,
} from "lucide-react";

interface LinkItem {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  highlight: boolean;
  imageUrl: string;
}

const links: LinkItem[] = [
  {
    title: "تأمين شامل",
    description: "تغطية كاملة لجميع الأضرار والحوادث",
    icon: ShieldCheck,
    href: "https://aadvs.me?label=aefb4aaec2082b3fa17bdd7c5941b561",
    highlight: true,
    imageUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "تأمين ضد الغير",
    description: "تغطية أضرار الطرف الثالث بأسعار مناسبة",
    icon: Car,
    href: "https://aadvs.me?label=aefb4aaec2082b3fa17bdd7c5941b561",
    highlight: false,
    imageUrl:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "احصل على عرض سعر",
    description: "قدّم طلبك الآن واحصل على عرض فوري",
    icon: Banknote,
    href: "https://aadvs.me?label=aefb4aaec2082b3fa17bdd7c5941b561",
    highlight: false,
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "تقديم مطالبة",
    description: "قدّم مطالبتك بسهولة وتابع حالتها",
    icon: FileText,
    href: "https://aadvs.me?label=aefb4aaec2082b3fa17bdd7c5941b561",
    highlight: false,
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "الأسئلة الشائعة",
    description: "إجابات لأكثر الأسئلة شيوعاً",
    icon: HelpCircle,
    href: "https://aadvs.me?label=aefb4aaec2082b3fa17bdd7c5941b561",
    highlight: false,
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "تواصل معنا",
    description: "فريق الدعم متاح على مدار الساعة",
    icon: Phone,
    href: "https://aadvs.me?label=aefb4aaec2082b3fa17bdd7c5941b561",
    highlight: false,
    imageUrl:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80",
  },
];

const ParallaxCard = ({ link, index }: { link: LinkItem; index: number }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const parallaxBg = parallaxRef.current;

    if (!card || !parallaxBg) return;

    let rafId: number;

    const updateParallax = () => {
      const rect = card.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Only animate if in view
      if (rect.bottom >= 0 && rect.top <= viewHeight) {
        // Calculate relative position in viewport (-1 to 1 range approx)
        const scrollCenter = rect.top + rect.height / 2;
        const viewCenter = viewHeight / 2;
        const dist = scrollCenter - viewCenter;

        // Parallax speed factor (0.1 = subtle, 0.5 = strong)
        const speed = 0.15;
        const yPos = dist * speed;

        parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }

      rafId = requestAnimationFrame(updateParallax);
    };

    // Start loop
    rafId = requestAnimationFrame(updateParallax);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <a
      ref={cardRef}
      href={link.href}
      className="group relative w-full h-32 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-up transform hover:-translate-y-2"
      style={{ animationDelay: `${150 + index * 100}ms` }}
    >
      {/* Parallax Container - Handles the scroll movement */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 h-[140%] -top-[20%] w-full will-change-transform"
      >
        {/* Image - Handles the hover zoom */}
        <img
          src={link.imageUrl}
          alt={link.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          link.highlight
            ? "bg-gradient-to-l from-blue-900/90 via-blue-900/60 to-blue-900/10"
            : "bg-gradient-to-l from-black/80 via-black/50 to-transparent"
        }`}
      ></div>

      {/* Highlight Border */}
      {link.highlight && (
        <div className="absolute inset-0 border-2 border-white/20 rounded-2xl z-20"></div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 gap-5">
        {/* Icon */}
        <div
          className={`
              w-12 h-12 rounded-full flex items-center justify-center shrink-0
              backdrop-blur-md shadow-lg border border-white/20 transition-all duration-300
              ${
                link.highlight
                  ? "bg-white/20 text-white"
                  : "bg-white/10 text-white group-hover:bg-white/20"
              }
          `}
        >
          <link.icon className="w-6 h-6" strokeWidth={1.5} />
        </div>

        {/* Text */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">
              {link.title}
            </h3>
            {link.highlight && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-amber-900 shadow-sm">
                مميز
              </span>
            )}
          </div>
          <p className="text-white/80 text-sm mt-1 font-medium truncate drop-shadow-md pr-0.5">
            {link.description}
          </p>
        </div>

        {/* Chevron */}
        <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
          <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
        </div>
      </div>
    </a>
  );
};

export function BioLinks() {
  return (
    <section className="min-h-screen flex flex-col items-center py-12 px-4 w-full max-w-lg mx-auto">
      {/* Profile Header */}
      <div
        className="flex flex-col items-center space-y-4 mb-10 text-center animate-fade-up"
        style={{ animationDelay: "0ms" }}
      >
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative w-28 h-28 bg-white rounded-full p-1 shadow-2xl">
            <div className="w-full h-full bg-slate-50 rounded-full flex items-center justify-center overflow-hidden border border-slate-100">
              <ShieldCheck
                className="w-12 h-12 text-blue-600"
                strokeWidth={1.5}
              />
            </div>
            {/* Verified Badge */}
            <div className="absolute bottom-1 right-1 bg-blue-500 text-white p-1.5 rounded-full border-[3px] border-white shadow-sm">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            أفضل تأمين لسيارتك
          </h1>
          <p className="text-slate-500 font-medium text-sm">
            شريكك الموثوق لحياة أكثر أماناً
          </p>
        </div>

        <div className="flex gap-2 pt-1">
          <span className="flex items-center gap-1 px-3 py-1 bg-white text-slate-600 text-xs font-semibold rounded-full border border-slate-200 shadow-sm">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>موثوق</span>
          </span>
          <span className="flex items-center gap-1 px-3 py-1 bg-white text-slate-600 text-xs font-semibold rounded-full border border-slate-200 shadow-sm">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>مرخص</span>
          </span>
        </div>
      </div>

      {/* Image Cards Container */}
      <div className="w-full flex flex-col gap-4">
        {links.map((link, i) => (
          <ParallaxCard key={link.title} link={link} index={i} />
        ))}
      </div>

      {/* Footer Socials */}
      <div
        className="mt-12 flex items-center justify-center gap-5 animate-fade-up"
        style={{ animationDelay: "800ms" }}
      >
        {[
          { icon: Globe, href: "#" },
          { icon: Twitter, href: "#" },
          { icon: Instagram, href: "#" },
          { icon: Facebook, href: "#" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            className="p-3 bg-white text-slate-400 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md rounded-2xl transition-all duration-300 hover:scale-110 border border-slate-100 shadow-sm"
          >
            <social.icon size={20} strokeWidth={1.5} />
          </a>
        ))}
      </div>

      <div
        className="mt-8 text-center text-slate-400 text-xs font-light animate-fade-up"
        style={{ animationDelay: "900ms" }}
      >
        <p>© ٢٠٢٤ شركة التأمين الذهبية. جميع الحقوق محفوظة.</p>
      </div>
    </section>
  );
}
