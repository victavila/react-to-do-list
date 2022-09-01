import { VscAdd } from "react-icons/vsc";
import "./AddTodoButton.css";

interface ButtonProperties {
  handleClick: () => void;
}

const AddTodoButton = ({ handleClick }: ButtonProperties) => {
  return (
    <button className="add-todo" onClick={handleClick}><span className="plus"><VscAdd /></span>Add Todo</button>
  )
}

export default AddTodoButton;