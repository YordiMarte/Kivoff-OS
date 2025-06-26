import { Home, List, NotebookPen, Bot } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="w-64 min-h-screen border-r border-gray-200 p-6 flex flex-col">
            {/* Logo */}
            <div className='text-2xl font-bold mb-10'>
                <span className='text-black'>Kivoff</span>
            </div>

            {/* Navigation */}
            <nav className='flex flex-col gap-4 text-gray-700 font-medium'>
                <a href="#" className='flex items-center gap-2 hover:text-black'>
                    <Home size={20} />
                    Dashboard
                </a>
                <a href="#" className='flex items-center gap-2 hover:text-black'>
                    <List size={20} />
                    Tareas
                </a>
                <a href="#" className='flex items-center gap-2 hover:text-black'>
                    <NotebookPen size={20} />
                    Notas
                </a>
                <a href="#" className='flex items-center gap-2 hover:text-black'>
                    <Bot size={20} />
                    IA
                </a>
            </nav>
        </aside>
    )
}