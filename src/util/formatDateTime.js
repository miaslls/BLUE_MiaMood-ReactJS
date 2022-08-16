const formatDateTime = (date, time) => {
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(time);

  return `${formattedDate} @ ${formattedTime}`;
};

const formatDate = (date) => {
  let [year, month, day] = date.split("-");

  day = day.toString().padStart(2, "0");
  month = month.toString().padStart(2, "0");
  year = year.slice(-2);

  return `${day}.${month}.${year}`;
};

const formatTime = (time) => {
  let [hours, minutes] = time.split(":");
  const amPm = hours < 12 ? "am" : "pm";

  if (hours > 12) hours -= 12;

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");

  return `${hours}:${minutes + amPm}`;
};

export default formatDateTime;
