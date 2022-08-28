import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoProps } from '../../types/types';
import {v4 as  uuid } from 'uuid';

const initialState: TodoProps[] = [];

interface NewTodoProps {
  text: string,
  projectId: string,
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<NewTodoProps>) {
      const newTodo: TodoProps = {
        id: uuid(),
        text: action.payload.text,
        completed: false,
        projectId: action.payload.projectId,
      };
      state.push(newTodo);
    },
    toggleTodo(state, action: PayloadAction<TodoProps>) {
      let todo = state.find(todo => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.splice(state.findIndex(todo => todo.id === action.payload), 1);
    },
    updateTodo(state, action: PayloadAction<TodoProps>) {
      let todo = state.find(todo => todo.id === action.payload.id);

      if (todo) {
        todo.text = action.payload.text;
        todo.projectId = action.payload.projectId;
      }
    }
  }
})

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;