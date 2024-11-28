'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', heartRate: 72, bloodPressure: 120 },
  { name: 'Tue', heartRate: 75, bloodPressure: 118 },
  { name: 'Wed', heartRate: 70, bloodPressure: 122 },
  { name: 'Thu', heartRate: 73, bloodPressure: 121 },
  { name: 'Fri', heartRate: 71, bloodPressure: 119 },
  { name: 'Sat', heartRate: 74, bloodPressure: 123 },
  { name: 'Sun', heartRate: 76, bloodPressure: 120 },
]

export default function VitalsChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Vitals Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Line yAxisId="left" type="monotone" dataKey="heartRate" stroke="#8884d8" name="Heart Rate" />
            <Line yAxisId="right" type="monotone" dataKey="bloodPressure" stroke="#82ca9d" name="Blood Pressure" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

