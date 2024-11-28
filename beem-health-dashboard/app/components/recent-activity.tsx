import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function RecentActivity() {
  const activities = [
    { time: '09:30 AM', description: 'Blood pressure reading recorded' },
    { time: '11:15 AM', description: 'Medication reminder sent' },
    { time: '02:00 PM', description: 'Virtual consultation scheduled' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">{activity.time}</span>
              <span className="text-sm">{activity.description}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

