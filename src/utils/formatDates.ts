const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const dateToYearMonthDay = (date: Date) => {
  let day: string | number = date.getDate();
  let month: string | number = date.getMonth() + 1;
  const year = date.getFullYear();
  if (day < 10) {day = `0${day}`;}
  if (month < 10) {month = `0${month}`;}
  return `${year}-${month}-${day}`;
}

export const dateToMonthDay = (date: string) => {
  const dateObj = new Date(`${date}T00:00:00`);
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();
  return `${month} ${day}`;
}

export const dateToDay = (date: Date) => {
  const day = days[date.getDay()];
  return day;
}