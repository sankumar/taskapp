import React from 'react'
import Todo from '../assets/direct-hit.png';
import './TaskCoulmn.css';
import TaskCard from './TaskCard';

const TaskCoulmn = ({icon, title, tasks, status, handleDelete}) => {
  return (
    <section className='task_column'>
        <h2 className='task_column_heading'>
            <img className='task_column_icon' src={icon} alt='' />
            {title}
        </h2>
       
        {
          tasks.map((task, index) => task.status === status && <TaskCard 
          key={index} 
          title={task.task} 
          tags={task.tags}
          handleDelete={handleDelete}
          index={index}
           />
        )}
    </section>
  )
}

export default TaskCoulmn
