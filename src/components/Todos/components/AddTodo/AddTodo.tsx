import { useState } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { addTodo } from "../../todoSlice";

interface ButtonProperties {
  handleClick: () => void;
}

const AddTodo = ({ handleClick }: ButtonProperties) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleChange = (e: { target: HTMLInputElement }) => {
    setText(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (!text.trim()) {
      return;
    };
    dispatch(addTodo(text));
    setText("");
    handleClick();
  }

  const handleCancel = () => {
    setText("");
    handleClick();
  }
  
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
      <button type="submit">Add Todo</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default AddTodo;