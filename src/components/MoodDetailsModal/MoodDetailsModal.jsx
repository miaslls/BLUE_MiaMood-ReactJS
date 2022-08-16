import Modal from "components/Modal/Modal";
import formatDateTime from "util/formatDateTime";

function MoodDetailsModal({ mood, closeModal }) {
  const moodIcons = ["A", "<", "*", "2", ".", '"'];

  const { type, text, dateTime } = mood;
  const formattedDateTime = formatDateTime(dateTime);

  return (
    <Modal closeModal={closeModal}>
      <div className="moodlist-item">
        <div className="mood-icon">{moodIcons[type]}</div>
        <div className="mood-text-container">
          <div className="mood-title">{text}</div>
          <div className="mood-date-time">{formattedDateTime}</div>
        </div>
      </div>
    </Modal>
  );
}

export default MoodDetailsModal;
