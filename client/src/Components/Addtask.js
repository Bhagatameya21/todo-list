import './Addtask.css';
import React, { useState } from 'react';
import axios from 'axios';
function Addtask(props) {
  const [task, Settask] = useState('');
  const addtask = () => {
    if (task.trim() === '') {
      return;
    } else {
      axios
        .post('http://localhost:8000/api/tasks', {
          todo: task,
          isComplete: false,
        })
        .then((res) => {
          Settask('');
          props.addTask(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className='title'>
        <h1>Todo List</h1>
      </div>
      <div className='addtask'>
        <i className='fa-duotone fa-message-plus fa-2x'></i>
        <input
          type='text'
          placeholder='Add Task . . .'
          value={task}
          onChange={(event) => Settask(event.target.value)}
        />

        <button onClick={() => addtask()}>Add Task</button>
      </div>
    </>
  );
}

export default Addtask;
