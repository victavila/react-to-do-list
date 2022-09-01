import { useState } from "react";
import { FaRegCircle, FaRegCheckCircle, FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { useAppDispatch } from "../../../../app/hooks";
import { Priority } from "../../../../types/types";
import { dateToMonthDay } from "../../../../utils/formatDates";
import { deleteTodo } from "../../todoSlice";
import EditTodo from "../EditTodo/EditTodo";
import "./TodoItem.css";

interface TodoItemProps {
  text: string,
  completed: boolean,
  id: string,
  date: string,
  priority: Priority,
  onClick: () => void,
}

const TodoItem = ({ text, completed, id, date, priority, onClick }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const [formVisibility, setFormVisibility] = useState(false);

  const toggleVisibility = () => {
    setFormVisibility(!formVisibility);
  }

  return (
    <li>
      {formVisibility ? 
      <EditTodo toggleVisibility={toggleVisibility} id={id}/> :
      <div className="todo-item">
        <div className="todo-top">
          <div className="row-left">
            <div className="checkbox" onClick={onClick}>
              {completed ? 
              <FaRegCheckCircle
              style={{color: priority === Priority.HIGH ? "red" 
            : priority === Priority.MEDIUM ? "orange"
            : "green"}}
               />
               : <FaRegCircle
               style={{color: priority === Priority.HIGH ? "red" 
            : priority === Priority.MEDIUM ? "orange"
            : "green"}}
               />}
            </div>
            <div 
            className="todo-text" 
            style={{textDecoration: completed ? "line-through" : "none"}}>
              {text}
            </div>
          </div>
          <div className="todo-icons">
            <FaRegTrashAlt className="trash-icon" onClick={() => dispatch(deleteTodo(id))} />
            <FaRegEdit className="edit-icon" onClick={toggleVisibility} />
          </div>
        </div>
        <div className="todo-bottom">
          {date !== "" ? <div className="todo-date">{dateToMonthDay(date)}</div> : <></>}
        </div>
      </div>}
    </li>
  )
}

export default TodoItem;