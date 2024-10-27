import { useState } from "react";
import { AddTask } from "./components/AddTask";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useTasks } from "./services/storage.service";

function App() {
  const [showForm, setShowForm] = useState(false);
  const { addTask, tasks, toggleReminder, deleteTask } = useTasks();

  return (
    <div className="container">
      <Header
        onAdd={() => setShowForm(!showForm)}
        btnText={showForm ? "Hide" : "Add Task"}
      />
      {showForm && <AddTask onAddTask={addTask} />}
      {tasks.length !== 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p className="text-color">No Tasks to doo!!🤔</p>
      )}
    </div>
  );
}

export default App;
