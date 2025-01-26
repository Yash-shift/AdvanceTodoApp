import { getTasks, saveTasks } from '../../services/taskService';

export const setTasks = () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  return {
    type: 'SET_TASKS',
    payload: savedTasks
  };
};

export const addTask = (task) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_TASK',
      payload: task
    });
    
    // Save to localStorage
    const tasks = getState().tasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
};

export const deleteTask = (taskId) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: taskId
    });
    
    // Save to localStorage
    const tasks = getState().tasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
};

export const toggleTaskCompletion = (taskId) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'TOGGLE_TASK_COMPLETION',
      payload: taskId
    });
    
    // Save to localStorage
    const tasks = getState().tasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
};
