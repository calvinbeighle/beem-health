'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { sendEmail } from '../actions/send-email'

export default function ContactPage() {
  const router = useRouter()
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    
    try {
      const result = await sendEmail(formData)
      
      if (result.error) {
        toast.error(result.error)
      } else {
        toast.success('Message sent successfully!')
        const form = document.getElementById('contact-form') as HTMLFormElement
        form.reset()
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Enter your message"
                  className="min-h-[150px] w-full"
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={isPending}>
                  {isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

