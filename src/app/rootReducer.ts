import { combineReducers } from '@reduxjs/toolkit';
import todos from '../components/Todos/todoSlice';


export const rootReducer = combineReducers({
  todos,
});
export type RootState = ReturnType<typeof rootReducer>;