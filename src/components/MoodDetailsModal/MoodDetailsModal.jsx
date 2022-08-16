import Modal from "components/Modal/Modal";
import MoodListItem from "components/MoodListItem/MoodListItem";

function MoodDetailsModal({ mood, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <MoodListItem mood={mood} />
    </Modal>
  );
}

export default MoodDetailsModal;
