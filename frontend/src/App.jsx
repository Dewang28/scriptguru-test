import { useEffect, useState } from 'react'
import { createBoard, createTask, deleteTask, fetchBoards, fetchBoardTasks, updateTask } from './api'
import BoardPane from './components/BoardPane'
import LeftPanel from './components/LeftPanel'

export default function App() {
  const [boards, setBoards] = useState([])
  const [active, setActive] = useState(null)
  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const b = await fetchBoards()
        setBoards(b)
        if (b && b[0]) openBoard(b[0])
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  async function addBoard(name) {
    if (!name) return
    try {
      const nb = await createBoard(name)
      setBoards(s => [nb, ...s])
      openBoard(nb)
    } catch (e) { console.error(e) }
  }

  async function openBoard(b) {
    setActive(b)
    try {
      const t = await fetchBoardTasks(b._id)
      setItems(t)
    } catch (e) { console.error(e) }
  }

  async function createItem(data) {
    if (!active) return
    try {
      const t = await createTask(active._id, data)
      setItems(s => [t, ...s])
    } catch (e) { console.error(e) }
  }

  async function updateItem(id, patch) {
    try {
      const t = await updateTask(id, patch)
      setItems(s => s.map(x => (x._id === t._id ? t : x)))
    } catch (e) { console.error(e) }
  }

  async function removeItem(id) {
    try {
      await deleteTask(id)
      setItems(s => s.filter(x => x._id !== id))
    } catch (e) { console.error(e) }
  }

  return (
    <div className="app">
      <LeftPanel boards={boards} onCreate={addBoard} onOpen={openBoard} activeId={active?._id} />
      <main className="board-area">
        {active ? (
          <BoardPane board={active} items={items} onCreate={createItem} onUpdate={updateItem} onDelete={removeItem} />
        ) : (
          <div className="empty">Pick or make a board to start</div>
        )}
      </main>
    </div>
  )
}
