import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { updateTodo } from "../../todoSlice";

interface EditTodoProps {
  toggleVisibility: () => void,
  id: string,
};

const EditTodo = ({toggleVisibility, id}: EditTodoProps) => {
  const dispatch = useAppDispatch();
  const todo = useAppSelector(state => state.todos).filter(todo => todo.id === id)[0];
  const projects = [...useAppSelector(state => state.projects)]
  const [newText, setNewText] = useState(todo.text);
  const [newProjectId, setNewProjectId] = useState(todo.projectId);

  projects.push({name: "Inbox", id: "inbox"});

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newText.trim()) {
      return;
    };
    toggleVisibility();
    const newTodo = {...todo, text: newText, projectId: newProjectId};
    dispatch(updateTodo(newTodo));
  };

  const handleCancel = () => {
    toggleVisibility();
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setNewProjectId(e.target.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={newText} onChange={handleChange}></input>
      <select className="project-select" onChange={handleSelectChange} value={newProjectId}>
        {projects.map(project => (
          <option value={project.id} key={project.id}>{project.name}</option>
        ))}
      </select>
      <button type="submit">Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default EditTodo;