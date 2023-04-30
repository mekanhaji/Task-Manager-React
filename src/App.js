import { useState, useEffect } from 'react'
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from './components/AddTask';

const data =  [
	{
		id:1,
		text:"click on Add butten to add more task",
		day:"do it now!!😤",
		reminder:false,
	},
	{
		id:2,
		text:"click ❌ to delete any task",
		day:"when it done.. 😉",
		reminder:true,
	},
]

function App() {
	const [showForm, setShowForm] = useState(false)
	const [tasks, setTasks] = useState(data)

	// add task
	const addTask =  (task) => {
		const newId = tasks.length + 1
		const newTask = {newId, ...task}

		setTasks([...tasks, newTask])
		console.log(newTask)
	}
	// deleting task
	const deleteTask = (id) => {
		setTasks(tasks.filter((tasks) => tasks.id !== id))
	}
	//   toggle reminder
	const toggleReminder = (id) => {
	setTasks(
		tasks.map((task) =>
			task.id === id ? {...task, reminder : !task.reminder} : task
		)
	)
	// console.log(tasks.filter((tasks) => tasks.id == id ? console.log(tasks): ""))
	}

	return (
		<div className="container">
			<Header
				onAdd={() => setShowForm(!showForm)}
				btnText={showForm ?  'Hide' : "Add Task"}
				btnColor={showForm ?  'black' : "green"}
			/>
			{
				showForm && <AddTask onAddTask={ addTask } />
			}
			{
				tasks.length !== 0 ?
				<Tasks
					tasks={tasks}
					onDelete={ deleteTask }
					onToggle={ toggleReminder }
				/> : "No Tasks to doo!!🤔"
			}
		</div>
	);
}

export default App;