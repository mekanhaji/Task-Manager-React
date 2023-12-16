import { useState } from "react";

const data = [
  {
    id: 1,
    text: "click on Add button to add more task",
    day: "do it now!!😤",
    reminder: false,
  },
  {
    id: 2,
    text: "click ❌ to delete any task",
    day: "when it's no longer needed! 😉",
    reminder: true,
  },
  {
    id: 3,
    text: "double click on task to make is complete",
    day:"when it's done of course 🤷‍♂️"
  }
];

const storageKey = "taskData";

const updateStorage = (data) => {
  localStorage.setItem(storageKey, JSON.stringify(data));
};

const loadStorage = () => {
  const taskData = JSON.parse(localStorage.getItem(storageKey));

  if (taskData) return taskData;
  return data;
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(loadStorage());
  // add task
  const addTask = (task) => {
    const newId = tasks.length + 1;
    const newTask = { id : newId, ...task };
    const taskData = [...tasks, newTask];

    setTasks(taskData);
    updateStorage(taskData);
  };
  // deleting task
  const deleteTask = (id) => {
    const taskData = tasks.filter((tasks) => tasks.id !== id);

    setTasks(taskData);
    updateStorage(taskData);
  };
  //   toggle reminder
  const toggleReminder = (id) => {
    const taskData = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );

    setTasks(taskData);
    updateStorage(taskData);
  };

  return { tasks, addTask, deleteTask, toggleReminder };
};
