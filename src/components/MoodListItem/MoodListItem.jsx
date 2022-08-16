import "./MoodListItem.css";

import formatDateTime from "util/formatDateTime";

function MoodListItem({ mood, clickItem }) {
  const moodIcons = ["<", "*", "2", ".", '"', "A"];

  const { type, text, date, time } = mood;
  const formattedDateTime = formatDateTime(date, time);

  return (
    <div className="moodlist-item" onClick={() => clickItem()}>
      <div className="mood-icon">{moodIcons[type - 1]}</div>
      <div className="mood-text-container">
        <div className="mood-title">{text}</div>
        <div className="mood-date-time">{formattedDateTime}</div>
      </div>
    </div>
  );
}

export default MoodListItem;
