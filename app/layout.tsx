import { Inter } from 'next/font/google'
import "./globals.css"
import { Navigation } from "../components/navigation"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my professional portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " bg-black text-white"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen bg-black text-white">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

