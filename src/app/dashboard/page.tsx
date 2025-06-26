import Sidebar from '../components/Sidebar';

export default function DashboardPage() {
  return (
    <div className='min-h-screen flex bg-white text-black'>
      <Sidebar />

      <main className='flex-1 p-8'>
        <h1 className="text-3xl font-semibold">Bienvenido a Kivoff OS</h1>
        <p className="text-gray-600 mt-2">Aquí irá tu sistema de productividad personal.</p>
        {/* Aqui vendran los modulos como TasksToday, Habits, StatsCard... */}
      </main>
    </div>
  )
}