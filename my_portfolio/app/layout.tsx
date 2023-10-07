import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const font = Poppins({
  subsets: ['latin'],
  weight: '100',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Generated by Tasneem Fandakli',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
              attribute='class'
              defaultTheme='dark'
              enableSystem={false}
              storageKey='portfolio-theme'
            >
              {children}
          </ThemeProvider>
      </body>
    </html>
  )
} 
