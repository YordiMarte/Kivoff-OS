'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
    const supabase = createClientComponentClient()
    const router = useRouter()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    return (
        <button onClick={handleLogout} className="mt-4 text-red-500">
            Cerrar sesión
        </button>
    )
}