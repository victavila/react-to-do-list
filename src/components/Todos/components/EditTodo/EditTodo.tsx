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
  const [newText, setNewText] = useState(todo.text);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newText.trim()) {
      return;
    };
    toggleVisibility();
    const newTodo = {...todo, text: newText};
    dispatch(updateTodo(newTodo));
  };

  const handleCancel = () => {
    toggleVisibility();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={newText} onChange={handleChange}></input>
      <button type="submit">Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default EditTodo;