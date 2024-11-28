import { Toaster } from 'sonner'

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}

