import { useState } from 'react'

export default function NewTask({ onCreate }) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [prio, setPrio] = useState('Low')
    const [assignee, setAssignee] = useState('')
    const [due, setDue] = useState('')
    const [status, setStatus] = useState('To Do')

    async function submit(e) {
        e.preventDefault()
        const t = title.trim()
        if (!t) return
        await onCreate({
            title: t,
            description: desc.trim(),
            priority: prio,
            assignedTo: assignee.trim(),
            dueDate: due || null,
            status
        })
        setTitle(''); setDesc(''); setPrio('Low'); setAssignee(''); setDue(''); setStatus('To Do')
    }

    return (
        <form onSubmit={submit} className="task-form" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Short note" />
            <input value={assignee} onChange={e => setAssignee(e.target.value)} placeholder="Who" />
            <input type="date" value={due} onChange={e => setDue(e.target.value)} />
            <select value={prio} onChange={e => setPrio(e.target.value)}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <select value={status} onChange={e => setStatus(e.target.value)}>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
            </select>
            <button type="submit">Add task</button>
        </form>
    )
}
