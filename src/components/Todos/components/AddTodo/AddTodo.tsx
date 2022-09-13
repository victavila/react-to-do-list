import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addTodo } from "../../todoSlice";
import { FaTag, FaRegFlag, FaFlag } from "react-icons/fa";
import { Priority } from "../../../../types/types";
import "./AddTodo.css";
import { TodoModalContext } from "../../../../contexts/TodoModalContext";
import { DateContext } from "../../../../contexts/DateContext";

interface ButtonProperties {
  project: string,
}

interface TodoModalProps {
  todoModalOpen: boolean,
  setTodoModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface DateProps {
  initialDate: string;
}

const AddTodo = ({ project }: ButtonProperties) => {
  const dispatch = useAppDispatch();
  const projects = [...useAppSelector(state => state.projects)];
  const inboxProject = {name: "Inbox", id: "inbox"};
  const [text, setText] = useState("");
  const [projectId, setProjectId] = useState(project);
  const [isImportant, setIsImportant] = useState(false);
  const { initialDate } = useContext(DateContext) as DateProps;
  const [priority, setPriority] = useState<Priority>(Priority.NONE);
  const [date, setDate] = useState(initialDate);
  const { setTodoModalOpen } = useContext(TodoModalContext) as TodoModalProps;

  projects.push(inboxProject);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    };
    dispatch(addTodo({text, projectId, isImportant, priority, date}));
    setText("");
    setTodoModalOpen(false);
  }

  const handleCancel = () => {
    setText("");
    setTodoModalOpen(false);
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setProjectId(e.target.value);
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
    <div className="add-todo-container">
      <div>
        <h3>Add Todo</h3>
      </div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="todo-row">
          <input type="text" placeholder="Todo Name" value={text} onChange={handleChange} />
        </div>
        <div className="todo-row  middle">
          <select className="project-select" onChange={handleSelectChange} value={projectId}>
            {projects.map(project => (
              <option value={project.id} key={project.id}>{project.name}</option>
            ))}
          </select>
          <input type="date" onChange={handleDateChange} value={date} />
        </div>
        <div className="todo-row bottom">
          <div className="form-buttons">
            <button className="add-button" type="submit">Add</button>
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

export default AddTodo;