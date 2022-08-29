import { dateToDay, dateToMonthDay, dateToYearMonthDay } from "./formatDates";

export const getUpcomingDays = () => {
  const upcomingDays = [];
  for (let i = 0; i < 7; i++) {
    let date = new Date();
    date.setDate(date.getDate() + i);
    const dateString = dateToYearMonthDay(date);
    const monthDay = dateToMonthDay(dateString);
    let dayWeek;
    if (i === 0) {
      dayWeek = "Today";
    } 
    else if (i === 1) {
      dayWeek = "Tomorrow";
    } else {
      dayWeek = dateToDay(date);
    }
    const day = {dayWeek, dateString, monthDay};
    upcomingDays.push(day);
  }
  return upcomingDays;
}