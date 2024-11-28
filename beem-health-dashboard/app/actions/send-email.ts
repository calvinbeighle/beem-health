'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return {
      error: 'Please fill in all fields'
    }
  }

  try {
    await resend.emails.send({
      from: 'Beem Health Contact <onboarding@resend.dev>',
      to: 'calvinbeighle@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    return {
      success: true
    }
  } catch (error) {
    return {
      error: 'Failed to send message. Please try again.'
    }
  }
}

