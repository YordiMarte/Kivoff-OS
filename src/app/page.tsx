'use client'

import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Image from "next/image"


export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAuth = async () => {
    setLoading(true)
    setError('')
    try {
      const { error } = isLogin
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password })

      if (error) throw error
      alert(`${isLogin ? 'Login' : 'Signup'} successful!`)
    } catch (err: unknown) {
      if (err instanceof Error)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4">
      {/* LOGO */}
      <div className="absolute top-6 left-6 items-center gap-2">
        <Image
          src="/icono kivoff.svg"
          alt="Kivoff Logo"
          width={220}
          height={90}
          className="h-15 w-36" 
          priority
          />
        <span className="text-2xl font-bold text-black"></span>
      </div>

      <div className="w-full max-w-md space-y-7">
        <div className="text-left">
          <h2 className="text-2xl font-sans font-medium text-black">Sign in to your account</h2>
          <p className="text-sm font-sans text-gray-500">Enter your email and password</p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 font-sans"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="password" 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 font-sans"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

        {isLogin && (
          <div className="text-right">
            <a href="#" className="text-gray-500 text-sm hover:underline font-sans">
              Forgot password
            </a>
          </div>
        )}
        </div>

          <button
            onClick={handleAuth}
            disabled={loading}
            className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-blue-900 transition text-sm font-sans font-medium"
          >
            {loading ? 'Processing...' :`Sign ${isLogin ? 'in' : 'up'}`}
          </button>

          <div className="text-sm text-center text-sans">
            {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
            {' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-black underline font-sans"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>

        <p className="text-sm text-gray-500 text-center font-sans">
          {isLogin
            ? 'If you have an existing account, please sign in.'
            : 'You can craete a new account using your email and password.'}
        </p>
      </div>
    </div>
  )
}
