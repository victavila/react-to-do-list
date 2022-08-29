import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addTodo } from "../../todoSlice";
import { FaTag, FaRegFlag, FaFlag } from "react-icons/fa";
import { Priority } from "../../../../types/types";

interface ButtonProperties {
  handleClick: () => void;
}

const AddTodo = ({ handleClick }: ButtonProperties) => {
  const dispatch = useAppDispatch();
  const projects = [...useAppSelector(state => state.projects)];
  const inboxProject = {name: "Inbox", id: "inbox"};
  const [text, setText] = useState("");
  const [projectId, setProjectId] = useState("inbox");
  const [isImportant, setIsImportant] = useState(false);
  const [priority, setPriority] = useState<Priority>(Priority.NONE);
  const [date, setDate] = useState("");

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
    handleClick();
  }

  const handleCancel = () => {
    setText("");
    handleClick();
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
    <form className="todo-form" onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
      <select className="project-select" onChange={handleSelectChange} value={projectId}>
        {projects.map(project => (
          <option value={project.id} key={project.id}>{project.name}</option>
        ))}
      </select>
      <input type="date" onChange={handleDateChange} />
      <div className="form-buttons">
        <button type="submit">Add Todo</button>
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

export default AddTodo;