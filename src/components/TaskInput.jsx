import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ 
        id: Date.now(), 
        text: task, 
        priority: 'Medium',
        completed: false
      }));
      setTask('');
    }
  };

  return (
    <div className="flex gap-2">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
        className="flex-1 px-4 py-2 border text-bold border-gray-400 hover:border bg-green-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
      />
      <button 
        onClick={handleAddTask}
        className="px-6 py-2 bg-green-100 text-green-400 rounded-lg hover:bg-white hover:text-gray-600  transition-colors"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
