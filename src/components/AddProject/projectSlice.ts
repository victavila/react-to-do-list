import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { ProjectProps } from '../../types/types';

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
    },
    updateProject(state, action: PayloadAction<ProjectProps>) {
      let project = state.find(project => project.id === action.payload.id);

      if (project) {
        project.name = action.payload.name;
      }
    },
    deleteProject(state, action: PayloadAction<string>) {
      state.splice(state.findIndex(project => project.id === action.payload), 1);
    }
  }
})

export const { addProject, updateProject, deleteProject } = projectSlice.actions;

export default projectSlice.reducer;