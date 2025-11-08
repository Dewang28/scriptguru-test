import NewTask from './NewTask'
import TaskCard from './TaskCard'

export default function BoardPane({ board, items = [], onCreate, onUpdate, onDelete }) {
  const groups = { 'To Do': [], 'In Progress': [], Done: [] }
  items.forEach(t => groups[t.status || 'To Do'].push(t))

  return (
    <>
      <header className="board-header">
        <h2>{board.name}</h2>
      </header>

      <div style={{ marginBottom: 12 }}>
        <NewTask onCreate={onCreate} />
      </div>

      <div className="columns">
        {Object.keys(groups).map(key => (
          <section key={key} className="column">
            <h3>{key}</h3>
            <div className="task-list">
              {groups[key].map(t => (
                <TaskCard key={t._id} task={t} onUpdate={onUpdate} onDelete={onDelete} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
