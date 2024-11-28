import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MedicationList() {
  const medications = [
    { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
    { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' },
    { name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily at bedtime' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Medications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {medications.map((medication, index) => (
            <li key={index} className="border-b pb-2 last:border-b-0">
              <h4 className="font-semibold">{medication.name}</h4>
              <p className="text-sm text-gray-500">Dosage: {medication.dosage}</p>
              <p className="text-sm text-gray-500">Frequency: {medication.frequency}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

