import { getUpcomingDays } from "../../utils/getUpcomingDays";
import DaySection from "../DaySection/DaySection";

const Upcoming = () => {
  const upcomingDays = getUpcomingDays();
  
  
  return (
    <div className="upcoming">
      <h2>Upcoming</h2>
      {upcomingDays.map((day, id) => (
        <DaySection key={id} day={day} />
      ))}
    </div>
  )
}

export default Upcoming;