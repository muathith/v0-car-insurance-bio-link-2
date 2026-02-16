"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie_consent="))
    if (!consent) {
      setVisible(true)
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
      className="fixed bottom-0 inset-x-0 z-50 p-4"
    >
      <div className="max-w-md mx-auto rounded-lg bg-card border border-border shadow-lg p-4">
        <p className="text-sm text-card-foreground leading-relaxed mb-3">
          نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتك على موقعنا. يمكنك
          قراءة المزيد في{" "}
          <Link
            href="/cookies"
            className="text-primary underline hover:text-primary/80"
          >
            سياسة الكوكيز
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <Button onClick={accept} size="sm" className="flex-1 min-h-[44px]">
            قبول الكل
          </Button>
          <Button
            onClick={reject}
            variant="outline"
            size="sm"
            className="flex-1 min-h-[44px]"
          >
            رفض
          </Button>
        </div>
      </div>
    </div>
  )
}
