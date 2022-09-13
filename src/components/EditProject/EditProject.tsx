import { FormEvent, ChangeEvent, useState, useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateProject } from '../AddProject/projectSlice';
import "../AddProject/AddProject.css";
import { ProjectModalContext } from '../../contexts/ProjectModalContext';
import { ProjectContext } from '../../contexts/ProjectContext';
import { EditProjectContext } from '../../contexts/EditProjectContext';

interface ProjectContextProps {
  selectedProject: string
}

interface ProjectModalContextProps {
  setProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface EditProjectContextProps {
  setEditProjectOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EditProject = () => {
  const dispatch = useAppDispatch();
  const { selectedProject } = useContext(ProjectContext) as ProjectContextProps;
  const project = useAppSelector(state => state.projects).filter(project => project.id === selectedProject)[0];
  const [text, setText] = useState(project.name);
  const { setProjectModalOpen } = useContext(ProjectModalContext) as ProjectModalContextProps;
  const { setEditProjectOpen } = useContext(EditProjectContext) as EditProjectContextProps;

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    };
    const newProject = {...project, name: text};
    dispatch(updateProject(newProject));
    setProjectModalOpen(false);
    setEditProjectOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleCancel = (): void => {
    setText("");
    setProjectModalOpen(false);
    setEditProjectOpen(false);
  }
  
  return (
    <div className='add-project-container'>
      <div>
        <h3>Edit Project</h3>
      </div>
      <form className="project-form" onSubmit={handleSubmit}>
        <label>
          <h4>Name</h4>
        </label>
        <input value={text} onChange={handleChange}></input>
        <div className='button-container'>
          <button className='add-button' type="submit">Save</button>
          <button className='cancel-button' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditProject;