const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000'

export async function fetchBoards() {
  const r = await fetch(`${API_BASE}/boards`)
  return r.json()
}

export async function createBoard(name) {
  const r = await fetch(`${API_BASE}/boards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  })
  return r.json()
}

export async function fetchBoardTasks(boardId) {
  const r = await fetch(`${API_BASE}/boards/${boardId}/tasks`)
  return r.json()
}

export async function createTask(boardId, data) {
  const r = await fetch(`${API_BASE}/tasks/boards/${boardId}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return r.json()
}

export async function updateTask(id, data) {
  const r = await fetch(`${API_BASE}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return r.json()
}

export async function deleteTask(id) {
  await fetch(`${API_BASE}/tasks/${id}`, { method: 'DELETE' })
}
