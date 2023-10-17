import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Tasneem Fandakli',
  description: 'Generated by Tasneem Fandakli',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
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
