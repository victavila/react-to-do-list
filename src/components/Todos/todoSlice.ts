import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoProps } from '../../types/types';
import {v4 as  uuid } from 'uuid';

const initialState: TodoProps[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTodo: TodoProps = {
        id: uuid(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleTodo(state, action: PayloadAction<TodoProps>) {
      let todo = state.find(todo => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
})

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;