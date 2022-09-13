import { useAppSelector } from "../../app/hooks";
import Todos from "../Todos/Todos";
import "../Project/Project.css";

const Important = () => {
  const todos = useAppSelector(state => state.todos);
  const visibleTodos = todos.filter(todo => todo.isImportant);
  
  return (
    <div className="project">
      <h2>Important</h2>
      <Todos todos={visibleTodos} date="" disable={true} />
    </div>
  )
}

export default Important;