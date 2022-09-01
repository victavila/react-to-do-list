import { useAppSelector } from "../../app/hooks";
import { dateToYearMonthDay } from "../../utils/formatDates";
import Todos from "../Todos/Todos";
import "../Project/Project.css";

const Today = () => {
  const today = dateToYearMonthDay(new Date());
  const todos = useAppSelector(state => state.todos).filter(todo => todo.date === today);

  return (
    <div className="project">
      <h2>Today</h2>
      <Todos todos={todos} date={today} disable={false} project="inbox" />
    </div>
  )
}

export default Today;