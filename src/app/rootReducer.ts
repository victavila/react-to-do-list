import { combineReducers } from '@reduxjs/toolkit';
import todos from '../components/Todos/todoSlice';
import projects from '../components/Sidebar/AddProject/projectSlice';


export const rootReducer = combineReducers({
  todos,
  projects
});
export type RootState = ReturnType<typeof rootReducer>;