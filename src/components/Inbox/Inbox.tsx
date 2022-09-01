import { useAppSelector } from "../../app/hooks";
import Todos from "../Todos/Todos";
import "../Project/Project.css";

const Inbox = () => {
  const todos = useAppSelector(state => state.todos);
  const visibleTodos = todos.filter(todo => todo.projectId === "inbox");
  
  return (
    <div className="project">
      <h2>Inbox</h2>
      <Todos todos={visibleTodos} date="" disable={false} project="inbox" />
    </div>
  )
}

export default Inbox;