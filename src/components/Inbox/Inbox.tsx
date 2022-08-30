import { useAppSelector } from "../../app/hooks";
import Todos from "../Todos/Todos";

const Inbox = () => {
  const todos = useAppSelector(state => state.todos);
  const visibleTodos = todos.filter(todo => todo.projectId === "inbox");
  
  return (
    <div className="inbox">
      <h2>Inbox</h2>
      <Todos todos={visibleTodos} date="" disable={false} />
    </div>
  )
}

export default Inbox;