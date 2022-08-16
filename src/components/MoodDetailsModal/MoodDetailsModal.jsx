import "./MoodDetailsModal.css";

import Modal from "components/Modal/Modal";
import formatDateTime from "util/formatDateTime";

function MoodDetailsModal({ mood, closeModal }) {
  const moodIcons = ["<", "*", "2", ".", '"', "A"];

  const { type, text, date, time } = mood;
  const formattedDateTime = formatDateTime(date, time);

  return (
    <Modal closeModal={closeModal}>
      <div className="mood-details">
        <div className="mood-details-icon">{moodIcons[type - 1]}</div>
        <div className="mood-details-text-container">
          <div className="mood-details-title">{text}</div>
          <div className="mood-details-date-time">{formattedDateTime}</div>
        </div>
      </div>
    </Modal>
  );
}

export default MoodDetailsModal;
