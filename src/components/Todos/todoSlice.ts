import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/types';

const initialState: Todo[] = [];

const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
  }
})