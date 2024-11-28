import { Users, Home, Calendar, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Sidebar() {
  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Users className="mr-2 h-4 w-4" />
          Patients
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Calendar className="mr-2 h-4 w-4" />
          Appointments
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <MessageSquare className="mr-2 h-4 w-4" />
          Messages
        </Button>
      </nav>
    </div>
  )
}

