import React, {useState, useEffect} from 'react'
import "./App.css";
import TaskForm from './components/TaskForm';
import TaskCoulmn from './components/TaskCoulmn';
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  //console.log("tasks", tasks);
   useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task,index) => index !== taskIndex)
    setTasks(newTasks);
  }
  return (
    <div>
      <TaskForm setTasks={setTasks} />
      <main className='app_main'>
        <TaskCoulmn title="To do" icon={todoIcon} tasks={tasks} status="todo" handleDelete={handleDelete} />
        <TaskCoulmn title="Doing" icon={doingIcon} tasks={tasks} status="doing" handleDelete={handleDelete} />
        <TaskCoulmn title="Done" icon={doneIcon} tasks={tasks} status="done" handleDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App
