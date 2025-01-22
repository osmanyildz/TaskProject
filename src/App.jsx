import { useState } from 'react';
import './App.css'
import CreateTask from './components/CreateTask'
import ListTasks from './components/ListTasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask=(header,task)=>{
    const createdTasks = 
      [...tasks, {
          id:Math.round(Math.random()*9999999),
          header, 
          task }
        ]
        setTasks(createdTasks);
  }
  const deleteTaskById = (id)=>{
   const afterDeletedTasks= tasks.filter((task) => {
      return task.id !=id;
    })
    setTasks(afterDeletedTasks);
  }
  const updateTaskById = (id, updatedHeader, updatedTask) =>{

    const updatedTasks = tasks.map((task)=>{
      if(task.id===id){
        return {id, header: updatedHeader, task: updatedTask}
      }
   
      return task;
    })
   
    setTasks(updatedTasks);
   
  }
  return (
   <div className='App'>
    <h3>Lütfen Bir Task Giriniz.</h3>
    <CreateTask onCreate={createTask}/>
    <h1>Görevler</h1>
    <ListTasks taskList = {tasks} onDelete={deleteTaskById} onUpdate={updateTaskById} />
   </div>


  )
}

export default App
