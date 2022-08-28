import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addTodo } from "../../todoSlice";

interface ButtonProperties {
  handleClick: () => void;
}

const AddTodo = ({ handleClick }: ButtonProperties) => {
  const dispatch = useAppDispatch();
  const projects = [...useAppSelector(state => state.projects)];
  const inboxProject = {name: "Inbox", id: "inbox"};
  const [text, setText] = useState("");
  const [projectId, setProjectId] = useState("inbox");

  projects.push(inboxProject);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    };
    dispatch(addTodo({text, projectId}));
    setText("");
    handleClick();
  }

  const handleCancel = () => {
    setText("");
    handleClick();
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setProjectId(e.target.value);
  }
  
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
      <select className="project-select" onChange={handleSelectChange} value={projectId}>
        {projects.map(project => (
          <option value={project.id} key={project.id}>{project.name}</option>
        ))}
      </select>
      <button type="submit">Add Todo</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default AddTodo;