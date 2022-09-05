import 'assets/CSS/ConfirmDelete.css';

import { MoodService } from 'services/MoodService';

import confirmIcon from 'assets/ICON/icon-confirm.svg';
import cancelIcon from 'assets/ICON/icon-cancel.svg';

// ----- 📌📌📌🚨 component CONFIRM DELETE

function ConfirmDelete({
  moodIcons,
  getMoodList,
  mood,
  postDate,
  postTime,
  selectedMoodList,
  setHeaderStates,
  closeModal,
}) {
  // ----- 📌 delete

  const deleteMood = async (id) => {
    const response = await MoodService.deleteMood(id);

    if (response.message === 'deleted') {
      let selectedIcon;

      selectedMoodList === 'date' ? (selectedIcon = 'home') : (selectedIcon = 'list');

      setHeaderStates({ selectedIcon: selectedIcon, showSearch: false, searchDate: undefined });

      getMoodList();
      closeModal();
    }
  };

  // 📌📌🚨 CONFIRM DELETE RETURN

  return (
    <div id="delete-modal-container">
      <div className="moodlist-item">
        <div className="mood-icon">{moodIcons[mood.type - 1]}</div>
        <div className="mood-text-container">
          <div className="mood-text-top-row">{mood.text}</div>
          <div className="mood-text--bottom-row">
            <div className="mood-date-time">
              {postDate} @ {postTime}
            </div>
          </div>
        </div>
      </div>

      <div id="confirm-delete-container">
        <div id="confirm-delete-text">delete mood?</div>
        <div id="confirm-delete-icon-container">
          <div className="confirm-delete-icon clickable" onClick={() => closeModal()}>
            <img src={cancelIcon} alt="cancel" />
          </div>
          <div className="confirm-delete-icon clickable" onClick={() => deleteMood(mood._id)}>
            <img src={confirmIcon} alt="confirm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
