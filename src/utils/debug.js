
export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const loadTasks = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

export const checkStoredUsers = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  console.log('Currently stored users:', users);
  return users;
};