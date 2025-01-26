import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import tasksReducer from './reducers/tasksReducer';
import weatherReducer from './reducers/weatherReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    weather: weatherReducer
  }
});

export default store;
