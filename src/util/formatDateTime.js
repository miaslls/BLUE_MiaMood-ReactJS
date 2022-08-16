const formatDateTime = (dateTime) => {
  const [dateRaw, timeRaw] = dateTime.split("T");

  const formattedDate = formatDate(dateRaw);
  const formattedTime = formatTime(timeRaw);

  return `${formattedDate} @ ${formattedTime}`;
};

const formatDate = (dateRaw) => {
  const [year, month, day] = dateRaw.split("-");
  return `${day}.${month}.${year.slice(-2)}`;
};

const formatTime = (timeRaw) => {
  let [hours, minutes] = timeRaw.split(":");
  const amPm = hours < 12 ? "am" : "pm";

  if (hours > 12) hours -= 12;

  return `${hours}:${minutes + amPm}`;
};

export default formatDateTime;
