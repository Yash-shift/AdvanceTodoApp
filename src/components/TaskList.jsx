// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteTask, setTasks, toggleTaskCompletion } from '../redux/actions/taskActions';

// const TaskList = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector(state => state.tasks) || [];

//   useEffect(() => {
//     dispatch(setTasks());
//   }, [dispatch]);

//   const handleDeleteTask = (taskId) => {
//     dispatch(deleteTask(taskId));
//   };

//   const handleToggleComplete = (taskId) => {
//     dispatch(toggleTaskCompletion(taskId));
//   };

//   if (!Array.isArray(tasks)) {
//     return <div>Loading tasks...</div>;
//   }

//   const activeTasks = tasks.filter(task => !task.completed);
//   const completedTasks = tasks.filter(task => task.completed);

//   const TaskItem = ({ task }) => (
//     <li key={task.id} className={`flex items-center justify-between p-3 ${task.completed ? 'bg-gray-100' : 'bg-gray-50'} rounded-lg hover:bg-gray-100 transition-colors`}>
//       <div className="flex items-center space-x-3">
//         <button
//           onClick={() => handleToggleComplete(task.id)}
//           className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
//             ${task.completed 
//               ? 'border-green-500 bg-green-500' 
//               : 'border-gray-300 hover:border-green-500'}`}
//         >
//           {task.completed && (
//             <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           )}
//         </button>
//         <span className={`text-gray-800 ${task.completed ? 'line-through text-gray-500' : ''}`}>
//           {task.text}
//         </span>
//         <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
//           task.priority === 'High' ? 'bg-red-100 text-red-600' :
//           task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
//           'bg-green-100 text-green-600'
//         }`}>
//           {task.priority}
//         </span>
//       </div>
//       <button 
//         onClick={() => handleDeleteTask(task.id)}
//         className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//         </svg>
//       </button>
//     </li>
//   );

//   return (
//     <div className="space-y-6">
//       <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">Active Tasks</h3>
//         {activeTasks.length === 0 ? (
//           <p className="text-gray-500">No active tasks</p>
//         ) : (
//           <ul className="space-y-3">
//             {activeTasks.map(task => (
//               <TaskItem key={task.id} task={task} />
//             ))}
//           </ul>
//         )}
//       </div>

//       {completedTasks.length > 0 && (
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Completed Tasks</h3>
//           <ul className="space-y-3">
//             {completedTasks.map(task => (
//               <TaskItem key={task.id} task={task} />
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskList;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, setTasks, toggleTaskCompletion } from '../redux/actions/taskActions';
import { Star, Trash2 } from 'lucide-react';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks) || [];
  const [hoveredStar, setHoveredStar] = useState(null);

  useEffect(() => {
    dispatch(setTasks());
  }, [dispatch]);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleComplete = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  if (!Array.isArray(tasks)) {
    return <div>Loading tasks...</div>;
  }

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const TaskItem = ({ task }) => (
    <li key={task.id} className={`flex items-center justify-between p-3 ${task.completed ? 'bg-gray-100' : 'bg-gray-50'} rounded-lg hover:bg-gray-100 transition-colors`}>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleToggleComplete(task.id)}
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
            ${task.completed 
              ? 'border-green-500 bg-green-500' 
              : 'border-gray-300 hover:border-green-500'}`}
        >
          {task.completed && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
        <span className={`text-gray-800 ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.text}
        </span>
        <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
          task.priority === 'High' ? 'bg-red-100 text-red-600' :
          task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
          'bg-green-100 text-green-600'
        }`}>
          {task.priority}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button 
          onMouseEnter={() => setHoveredStar(task.id)}
          onMouseLeave={() => setHoveredStar(null)}
          className="text-gray-400 hover:text-yellow-400 p-2 rounded-full hover:bg-yellow-50 transition-colors"
        >
          <Star
            className={`h-5 w-5 ${hoveredStar === task.id ? 'fill-current' : ''}`}
          />
        </button>
        <button 
          onClick={() => handleDeleteTask(task.id)}
          className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </li>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Active Tasks</h3>
        {activeTasks.length === 0 ? (
          <p className="text-gray-500">No active tasks</p>
        ) : (
          <ul className="space-y-3">
            {activeTasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        )}
      </div>

      {completedTasks.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Completed Tasks</h3>
          <ul className="space-y-3">
            {completedTasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskList;
