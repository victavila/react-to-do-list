import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { updateTodo } from "../../todoSlice";
import { FaTag, FaRegFlag, FaFlag } from "react-icons/fa";
import { Priority } from "../../../../types/types";

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
  const [isImportant, setIsImportant] = useState(todo.isImportant);
  const [priority, setPriority] = useState(todo.priority);

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
    const newTodo = {...todo, text: newText, projectId: newProjectId, isImportant, priority};
    dispatch(updateTodo(newTodo));
  };

  const handleCancel = () => {
    toggleVisibility();
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setNewProjectId(e.target.value);
  }

  const handleImportanceChange = () => {
    setIsImportant(!isImportant);
  }

  const togglePriority = () => {
    if (priority === Priority.LOW) {
      setPriority(Priority.NONE);
    } else {
      setPriority(priority + 1);
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={newText} onChange={handleChange}></input>
      <select className="project-select" onChange={handleSelectChange} value={newProjectId}>
        {projects.map(project => (
          <option value={project.id} key={project.id}>{project.name}</option>
        ))}
      </select>
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
      <div className="form-icons">
        <FaTag
        onClick={handleImportanceChange}
        style={{color: isImportant ? "red" : "#222"}}
        />
        {priority === Priority.NONE ? 
        <FaRegFlag onClick={togglePriority} /> :
        <FaFlag
        onClick={togglePriority} 
        style={{color: priority === Priority.HIGH ? "red" 
        : priority === Priority.MEDIUM ? "orange"
        : "green"}}
        /> 
        }
      </div>      
    </form>
  )
}

export default EditTodo;