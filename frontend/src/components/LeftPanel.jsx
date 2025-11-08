import { useState } from 'react'

export default function LeftPanel({ boards = [], onCreate, onOpen, activeId }) {
  const [val, setVal] = useState('')

  function submit() {
    const name = val.trim()
    if (!name) return
    onCreate(name)
    setVal('')
  }

  return (
    <aside className="sidebar">
      <div className="new-board">
        <input value={val} onChange={e => setVal(e.target.value)} placeholder="Board name" />
        <button onClick={submit}>New</button>
      </div>

      <ul className="boards">
        {boards.map(b => (
          <li key={b._1 || b._id} className={b._id === activeId ? 'active' : ''} onClick={() => onOpen(b)}>
            {b.name}
          </li>
        ))}
      </ul>
    </aside>
  )
}
