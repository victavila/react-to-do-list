import { FaRegCircle, FaRegCheckCircle, FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { useAppDispatch } from "../../../../app/hooks";
import { deleteTodo } from "../../todoSlice";

interface TodoItemProps {
  text: string,
  completed: boolean,
  id: string,
  onClick: () => void,
}

const TodoItem = ({ text, completed, id, onClick }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  return (
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
          <FaRegEdit />
        </div>
    </div>
  )
}

export default TodoItem;