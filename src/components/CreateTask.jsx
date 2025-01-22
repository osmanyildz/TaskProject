import React from 'react'
import { useState } from 'react'

function CreateTask({onCreate, taskObject, isEditForm, onUpdate}) {
    const [header, setHeader] = useState(taskObject?.header || "");
    const [task, setTask] = useState(taskObject?.task || "");
    
    const handleHeaderChange = (event)=>{
        setHeader(event.target.value);
    }
    const handleTaskChange =(event)=>{
        setTask(event.target.value);
    }
    const handleSubmit = (event)=>{
      
        event.preventDefault();
        if(isEditForm){
            onUpdate(taskObject.id, header, task)
          
        }else{
            onCreate(header,task);
        }
  
        setHeader('');
        setTask('');
    }
    
  return (
    <div>
        {
            isEditForm ? 
             <div className='task-update-container'>
                <h3>Task'ı Düzenle</h3>
            <form className='task-form'> 
                    <label className='header-label' >Başlığı Düzenle</label>
                   <input value={header} className='header-input' onChange={handleHeaderChange} />
                   <label className='task-label'>Açıklamayı Düzenle</label>
                   <textarea value={task} className='task-textarea' rows={5} onChange={handleTaskChange}></textarea>
                   <button className='task-create-button update-button' onClick={handleSubmit}>Düzenle</button>
                   </form>
          
            </div> :
             <div className='task-container'>
             <form className='task-form'> 
                     <label className='header-label' > Başlık</label>
                    <input value={header} className='header-input' onChange={handleHeaderChange} />
                    <label className='task-label'> Task</label>
                    <textarea value={task} className='task-textarea' rows={5} onChange={handleTaskChange}></textarea>
                    <button className='task-create-button' onClick={handleSubmit}>Oluştur</button>
                    </form>
           
             </div>
        }
   
    </div>
  )
}

export default CreateTask
