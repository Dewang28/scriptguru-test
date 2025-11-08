
export default function TaskCard({ task, onUpdate, onDelete }) {
  return (
    <div className="task">
      <div className="task-title">{task.title}</div>
      <div className="task-desc">{task.description || '-'}</div>
      <div className="task-meta">
        <span className="meta">P: {task.priority}</span>
        <span className="meta">A: {task.assignedTo || '-'}</span>
        <span className="meta">D: {task.dueDate ? task.dueDate.slice(0, 10) : '-'}</span>

        <select value={task.status} onChange={e => onUpdate(task._id, { status: e.target.value })}>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <button className="btn-delete" onClick={() => onDelete(task._id)}>Remove</button>
      </div>
    </div>
  )
}
