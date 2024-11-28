import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Heart, Activity, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Beem Health Logo" />
              <span className="ml-2 text-xl font-semibold text-gray-800">Beem Health</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Remote Patient Monitoring Made Easy</h1>
              <p className="text-xl mb-8">Empowering healthcare providers with real-time patient data for better outcomes</p>
              <Button size="lg" asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Heart className="h-6 w-6 text-red-500" />, title: "Real-time Monitoring", description: "Track vital signs and health metrics in real-time" },
                { icon: <Activity className="h-6 w-6 text-blue-500" />, title: "Customizable Alerts", description: "Set personalized alerts for critical health changes" },
                { icon: <Clock className="h-6 w-6 text-green-500" />, title: "24/7 Access", description: "Access patient data anytime, anywhere" },
                { icon: <CheckCircle className="h-6 w-6 text-purple-500" />, title: "HIPAA Compliant", description: "Secure, encrypted, and compliant with healthcare regulations" },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {feature.icon}
                      <span className="ml-2">{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-4">About Beem Health</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Beem Health is revolutionizing patient care through innovative remote monitoring solutions. Our platform
                  enables healthcare providers to deliver proactive, personalized care while empowering patients to take
                  control of their health journey.
                </p>
                <Button variant="outline" asChild>
                  <Link href="#contact">Learn More</Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare professional using Beem Health platform"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-12">Get in Touch</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Beem Health Logo" />
              <span className="ml-2 text-xl font-semibold">Beem Health</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:text-gray-300">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Terms of Service</Link></li>
              </ul>
            </nav>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Beem Health. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

