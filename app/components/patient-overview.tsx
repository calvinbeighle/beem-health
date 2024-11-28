import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function PatientOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Patient" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">Age: 45 | Gender: Male</p>
            <p className="text-sm text-gray-500">Last Check-in: 2 hours ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

