import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { updateTodo } from "../../todoSlice";
import { FaTag, FaRegFlag, FaFlag } from "react-icons/fa";
import { Priority } from "../../../../types/types";
import "./EditTodo.css";

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
  const [date, setDate] = useState(todo.date);

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
    const newTodo = {...todo, text: newText, projectId: newProjectId, isImportant, priority, date};
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

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDate(e.target.value);
  }
  
  return (
    <div className="edit-todo-container">
      <form onSubmit={handleSubmit}>
        <div className="todo-row">
          <input type="text" value={newText} onChange={handleChange}></input>
        </div>
        <div className="todo-row  middle">
          <select className="project-select" onChange={handleSelectChange} value={newProjectId}>
            {projects.map(project => (
              <option value={project.id} key={project.id}>{project.name}</option>
            ))}
          </select>
          <input type="date" onChange={handleDateChange} value={date} />
        </div>
        <div className="todo-row bottom">
          <div className="form-buttons">
            <button className="add-button" type="submit">Save</button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          </div>
          <div className="form-icons">
            <FaTag
            className="tag-icon"
            onClick={handleImportanceChange}
            style={{color: isImportant ? "red" : "#222"}}
            />
            {priority === Priority.NONE ? 
            <FaRegFlag className="flag-icon" onClick={togglePriority} /> :
            <FaFlag
            className="flag-icon"
            onClick={togglePriority} 
            style={{color: priority === Priority.HIGH ? "red" 
            : priority === Priority.MEDIUM ? "orange"
            : "green"}}
            /> 
            }
          </div>
        </div>      
      </form>
    </div>
  )
}

export default EditTodo;