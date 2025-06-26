// apps/web/src/lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'

export const getTasks = async () => {
  const res = await fetch(`${API_BASE}/tasks`)
  return res.json()
}

export const createTask = async (data: { title: string; description?: string }) => {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return res.json()
}

export const deleteTask = async (id: string) => {
  await fetch(`${API_BASE}/tasks/${id}`, { method: 'DELETE' })
}
