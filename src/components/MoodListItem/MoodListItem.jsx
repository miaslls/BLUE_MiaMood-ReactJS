import "./MoodListItem.css";
import formatDateTime from "util/formatDateTime";
import iconPencil from "./icon-pencil.svg";
import iconScissors from "./icon-scissors.svg";

function MoodListItem({ mood }) {
  const moodIcons = ["<", "*", "2", ".", '"', "A"];

  const { type, text, date, time } = mood;
  const formattedDateTime = formatDateTime(date, time);

  return (
    <div className="moodlist-item">
      <div className="mood-icon">{moodIcons[type - 1]}</div>
      <div className="mood-text-container">
        <div className="mood-text-top-row">{text}</div>
        <div className="mood-text--bottom-row">
          <div className="mood-date-time">{formattedDateTime}</div>
          <div className="mood-options-container">
            <div className="mood-options-button clickable">
              <img src={iconPencil} alt="edit button" />
            </div>
            <div className="mood-options-button clickable">
              <img src={iconScissors} alt="delete button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoodListItem;
