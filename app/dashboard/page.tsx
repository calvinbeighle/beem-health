import Header from '../components/header'
import Sidebar from '../components/sidebar'
import PatientOverview from '../components/patient-overview'
import RecentActivity from '../components/recent-activity'
import VitalsChart from '../components/vitals-chart'
import MedicationList from '../components/medication-list'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Patient Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PatientOverview />
              <RecentActivity />
              <VitalsChart />
              <MedicationList />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

