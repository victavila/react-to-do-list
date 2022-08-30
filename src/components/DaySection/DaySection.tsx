import { useAppSelector } from "../../app/hooks";
import Todos from "../Todos/Todos";

interface DayProps {
  day: {
    dayWeek: string,
    dateString: string, 
    monthDay: string,
  }
};

const DaySection = ({ day }: DayProps) => {
  const todos = useAppSelector(state => state.todos).filter(todo => todo.date === day.dateString);
  
  return (
    <div className="day-section">
      <h3 className="day-heading">{day.dayWeek} {day.monthDay}</h3>
      <Todos todos={todos} date={day.dateString} disable={false} project="inbox" />
    </div>
  )
}

export default DaySection;