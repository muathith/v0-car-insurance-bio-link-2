"use client"

import { ShieldCheck } from "lucide-react"

export function BioHeader() {
  return (
    <header className="flex flex-col items-center px-4 pt-12 pb-8">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-4">
        <ShieldCheck className="w-10 h-10 text-primary-foreground" />
      </div>
      <h1 className="text-2xl font-bold text-foreground text-center text-balance">
        تأمينات السيارات
      </h1>
      <p className="mt-2 text-muted-foreground text-center text-balance max-w-xs leading-relaxed">
        حماية شاملة لسيارتك بأفضل الأسعار وأسرع الخدمات
      </p>
    </header>
  )
}
