import { FormEvent, ChangeEvent, useState, useContext } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addProject } from './projectSlice';
import "./AddProject.css";
import { ProjectModalContext } from '../../contexts/ProjectModalContext';

interface ProjectModalContextProps {
  setProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddProject = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const { setProjectModalOpen } = useContext(ProjectModalContext) as ProjectModalContextProps;

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    };
    dispatch(addProject(text));
    setText("");
    setProjectModalOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleCancel = (): void => {
    setText("");
    setProjectModalOpen(false);
  }
  
  return (
    <div className='add-project-container'>
      <div>
        <h3>Add Project</h3>
      </div>
      <form className="project-form" onSubmit={handleSubmit}>
        <label>
          <h4>Name</h4>
        </label>
        <input value={text} onChange={handleChange}></input>
        <div className='button-container'>
          <button className='add-button' type="submit">Add</button>
          <button className='cancel-button' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddProject;