import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/types';
import { v4 as uuid } from 'uuid';

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTodo: Todo = {
        id: uuid(),
        text: action.payload,
      }
      state.push(newTodo);
    }
  }
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;