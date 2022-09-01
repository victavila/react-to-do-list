import { getUpcomingDays } from "../../utils/getUpcomingDays";
import DaySection from "../DaySection/DaySection";
import "../Project/Project.css";

const Upcoming = () => {
  const upcomingDays = getUpcomingDays();
  
  
  return (
    <div className="project">
      <h2>Upcoming</h2>
      {upcomingDays.map((day, id) => (
        <DaySection key={id} day={day} />
      ))}
    </div>
  )
}

export default Upcoming;