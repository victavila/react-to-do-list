import { useContext } from "react"
import { useAppDispatch } from "../../app/hooks";
import AddTodoButton from "./components/AddTodoButton/AddTodoButton"
import TodoItem from "./components/TodoItem/TodoItem";
import { toggleTodo } from "./todoSlice";
import { TodoProps } from "../../types/types";
import "./Todos.css"
import { TodoModalContext } from "../../contexts/TodoModalContext";
import { DateContext } from "../../contexts/DateContext";

interface TodosProps {
  todos: TodoProps[],
  date: string,
  disable: boolean,
}

interface TodoModalProps {
  setTodoModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface DateProps {
  setInitialDate: React.Dispatch<React.SetStateAction<string>>
}

const Todos = ({ todos, date, disable }: TodosProps) => {
  const dispatch = useAppDispatch();
  const { setTodoModalOpen } = useContext(TodoModalContext) as TodoModalProps;
  const { setInitialDate } = useContext(DateContext) as DateProps;

  const handleClick = () => {
    setTodoModalOpen(true);
    setInitialDate(date);

  }

  
  return (
    <div className="todos">
      <ul>
        {todos.map(todo => (
          <TodoItem 
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo))}
          />
        ))}
      </ul>
      {disable ? <></> : <AddTodoButton handleClick={() => {handleClick()}} />}
    </div>
  )
}

export default Todos;