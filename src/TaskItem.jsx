import React, { useState } from 'react'
import CreateTask from './components/CreateTask';
function TaskItem({task, onDelete, onUpdate}) {
    const [isShowEdit, setIsShowEdit] = useState(false);
    const handleDeleteClick = ()=>{
        onDelete(task.id);
    }
    const handleEditClick = ()=>{
        setIsShowEdit(!isShowEdit);

    }
    const handleSubmit = (id, updatedHeader, updatedTask)=>{
        setIsShowEdit(false);
        onUpdate(id, updatedHeader, updatedTask);

    }
  return (
    <div className='task-item'>
        {
            isShowEdit ? 
             <CreateTask taskObject={task} isEditForm={isShowEdit} onUpdate={handleSubmit}/> :<>
         <div className='task-item-container'>
            <h3 >Göreviniz</h3>
            <p>{task.header}</p>
            <h3>Yapılacaklar</h3>
            <p>{task.task}</p>
           
        </div>
        <div className='task-item-button-group'>
        <button className='delete-task-button' onClick={handleDeleteClick}>Sil</button>
        <button className='update-task-button' onClick={handleEditClick}>Güncelle</button>
        </div></>
        }

   
    </div>
  
  )
}

export default TaskItem
