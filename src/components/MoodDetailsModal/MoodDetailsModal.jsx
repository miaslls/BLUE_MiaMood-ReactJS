import "./MoodDetailsModal.css";

import Modal from "components/Modal/Modal";
import MoodListItem from "components/MoodListItem/MoodListItem";

function MoodDetailsModal({ mood, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      {/* <MoodListItem
        type={mood.type}
        text={mood.text}
        dateTime={mood.dateTime}
      /> */}
      {mood.text}
    </Modal>
  );
}

export default MoodDetailsModal;
