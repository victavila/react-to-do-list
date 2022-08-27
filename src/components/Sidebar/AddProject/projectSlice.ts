import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { ProjectProps } from '../../../types/types';

const initialState: ProjectProps[] = [];

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<string>) {
      const newProject: ProjectProps = {
        id: uuid(),
        name: action.payload,
      };
      state.push(newProject);
    }
  }
})

export const { addProject } = projectSlice.actions;

export default projectSlice.reducer;