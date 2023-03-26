import { usersReducer } from './features/users-slice';
import { tasksReducer } from './features/tasks-slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { tasks: tasksReducer, users: usersReducer },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;
