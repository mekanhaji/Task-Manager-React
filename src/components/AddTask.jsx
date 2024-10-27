import { useState } from "react"

export const AddTask = ({ onAddTask }) => {
    const [text, setTasks] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    // valided form beform making changes
    const onSubmited = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Enter Task name')
            return
        }

        onAddTask({text, day, reminder})

        setTasks('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={ onSubmited  }>
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="task title" 
                    value={text}
                    onChange={(e) => setTasks(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    type="text" 
                    placeholder="task day & time" 
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    type="checkbox" 
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input className="btn btn-block" type="submit" value='save'/>
        </form>
    )
}
