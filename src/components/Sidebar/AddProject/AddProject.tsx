import { FormEvent, ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { addProject } from './projectSlice';

interface FormProps {
  toggleVisibility: () => void
}

const AddProject = ({ toggleVisibility }: FormProps) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    };
    dispatch(addProject(text));
    setText("");
    toggleVisibility();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleCancel = (): void => {
    setText("");
    toggleVisibility();
  }
  
  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange}></input>
      <button type="submit">Add</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default AddProject;