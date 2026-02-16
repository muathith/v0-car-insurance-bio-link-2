"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie_consent="))
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    document.cookie =
      "cookie_consent=accepted; path=/; max-age=" + 60 * 60 * 24 * 365
    setVisible(false)
  }

  function reject() {
    document.cookie =
      "cookie_consent=rejected; path=/; max-age=" + 60 * 60 * 24 * 365
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="موافقة ملفات تعريف الارتباط"
      className="fixed bottom-0 inset-x-0 z-50 p-4 animate-slide-up-cookie"
    >
      <div className="max-w-md mx-auto rounded-2xl bg-card/95 backdrop-blur-lg border border-border shadow-xl shadow-foreground/5 p-5">
        <div className="flex items-start gap-3 mb-4">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 shrink-0 mt-0.5">
            <Cookie className="w-4 h-4 text-primary" />
          </div>
          <p className="text-sm text-card-foreground leading-relaxed">
            {"نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتك على موقعنا. يمكنك قراءة المزيد في "}
            <Link
              href="/cookies"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              سياسة الكوكيز
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={accept}
            size="sm"
            className="flex-1 min-h-[44px] rounded-xl font-semibold shadow-sm"
          >
            قبول الكل
          </Button>
          <Button
            onClick={reject}
            variant="outline"
            size="sm"
            className="flex-1 min-h-[44px] rounded-xl font-semibold"
          >
            رفض
          </Button>
        </div>
      </div>
    </div>
  )
}
