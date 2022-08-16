import "./MoodListItem.css";

import formatDateTime from "util/formatDateTime";

function MoodListItem({ mood, clickItem }) {
  const moodIcons = ["A", "<", "*", "2", ".", '"'];

  const { type, text, dateTime } = mood;
  const formattedDateTime = formatDateTime(dateTime);

  return (
    <div className="moodlist-item" onClick={() => clickItem()}>
      <div className="mood-icon">{moodIcons[type]}</div>
      <div className="mood-text-container">
        <div className="mood-title">{text}</div>
        <div className="mood-date-time">{formattedDateTime}</div>
      </div>
    </div>
  );
}

export default MoodListItem;
