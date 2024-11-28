import { emberlyBold } from './styles/fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={emberlyBold.variable}>{children}</body>
    </html>
  )
}

