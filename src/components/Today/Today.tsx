import { useAppSelector } from "../../app/hooks";
import { dateToYearMonthDay } from "../../utils/formatDates";
import Todos from "../Todos/Todos";

const Today = () => {
  const today = dateToYearMonthDay(new Date());
  const todos = useAppSelector(state => state.todos).filter(todo => todo.date === today);

  return (
    <div className="today">
      <h2>Today</h2>
      <Todos todos={todos} date={today} disable={false} />
    </div>
  )
}

export default Today;