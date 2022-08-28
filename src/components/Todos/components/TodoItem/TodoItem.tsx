import { useState } from "react";
import { FaRegCircle, FaRegCheckCircle, FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { useAppDispatch } from "../../../../app/hooks";
import { deleteTodo } from "../../todoSlice";
import EditTodo from "../EditTodo/EditTodo";

interface TodoItemProps {
  text: string,
  completed: boolean,
  id: string,
  onClick: () => void,
}

const TodoItem = ({ text, completed, id, onClick }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const [formVisibility, setFormVisibility] = useState(false);

  const toggleVisibility = () => {
    setFormVisibility(!formVisibility);
  }

  return (
    <div>
      {formVisibility ? 
      <EditTodo toggleVisibility={toggleVisibility} id={id}/> :
      <div className="todo-item">
        <div className="checkbox" onClick={onClick}>
          {completed ? <FaRegCheckCircle /> : <FaRegCircle />}
        </div>
        <div 
        className="todo-text" 
        style={{textDecoration: completed ? "line-through" : "none"}}>
          {text}
          </div>
          <div className="todo-icons">
            <FaRegTrashAlt onClick={() => dispatch(deleteTodo(id))} />
            <FaRegEdit onClick={toggleVisibility}/>
          </div>
      </div>}
    </div>
  )
}

export default TodoItem;