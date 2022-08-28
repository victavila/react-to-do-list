import { useAppSelector } from "../../app/hooks";
import Todos from "../Todos/Todos";

const Today = () => {
  const todos = useAppSelector(state => state.todos);
  
  return (
    <div className="today">
      <h2>Today</h2>
      <Todos todos={todos} />
    </div>
  )
}

export default Today;