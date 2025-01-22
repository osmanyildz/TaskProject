import React from 'react'
import TaskItem from '../TaskItem'

function ListTasks({taskList, onDelete,onUpdate}) {

  return (
    <div className='task-list'>
      {
        taskList.map((task)=>{
            return (<TaskItem key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate}/>);
        })
      }
    </div>
  )
}

export default ListTasks
