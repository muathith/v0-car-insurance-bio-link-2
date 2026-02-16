import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'

import './globals.css'

const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-cairo' })

export const metadata: Metadata = {
  title: 'تأمينات السيارات | حماية شاملة لسيارتك',
  description:
    'احصل على أفضل عروض تأمين السيارات بأسعار تنافسية. تأمين شامل، تأمين ضد الغير، ومساعدة على الطريق.',
  keywords: 'تأمين سيارات, تأمين شامل, تأمين ضد الغير, تأمين مركبات',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#2563EB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
