import 'assets/CSS/MoodListItem.css';

import { useState } from 'react';

import Modal from 'components/Modal';
import EditMoodForm from 'components/MoodForm';
import ConfirmDelete from 'components/ConfirmDelete';

import pencilIcon from 'assets/ICON/options-icon-edit.svg';
import binIcon from 'assets/ICON/options-icon-delete.svg';

// ----- 📌📌📌🚨 component ITEM

function MoodListItem({
  mood,
  index,
  moodList,
  getMoodList,
  selectedMoodList,
  setHeaderStates,
  moodIcons,
}) {
  // ----- 📌 date/time formatting

  const moodDate = new Date(`${mood.date}T${mood.time}`);

  const titleDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  }).format(moodDate);

  const postDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'numeric',
  }).format(moodDate);

  const postTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(moodDate);

  // ----- 📌📌 FORM

  const [editFormState, setEditFormState] = useState({});

  // ----- 📌 EDIT MODAL

  const [showEditModal, setShowEditModal] = useState(false);

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditFormState({});
  };

  // ----- 📌 DELETE MODAL

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // ----- 📌 show OPTIONS

  const [showMoodOptions, setShowMoodOptions] = useState(false);

  // 📌📌🚨 ITEM RETURN

  return (
    <>
      {/* ----- 📌 EDIT MODAL */}

      {showEditModal && (
        <Modal closeModal={closeEditModal}>
          <EditMoodForm
            moodIcons={moodIcons}
            emptyForm={{}}
            formState={editFormState}
            setFormState={setEditFormState}
            getMoodlist={getMoodList}
            closeModal={closeEditModal}
          />
        </Modal>
      )}

      {/* ----- 📌 DELETE MODAL */}

      {showDeleteModal && (
        <Modal closeModal={() => setShowDeleteModal(false)}>
          <ConfirmDelete
            moodIcons={moodIcons}
            getMoodList={getMoodList}
            mood={mood}
            postDate={postDate}
            postTime={postTime}
            selectedMoodList={selectedMoodList}
            setHeaderStates={setHeaderStates}
            closeModal={() => setShowDeleteModal(false)}
          />
        </Modal>
      )}

      {/* ----- 📌 titleDate */}

      {selectedMoodList === 'all' && (index === 0 || mood.date !== moodList[index - 1].date) && (
        <div className="moodlist-date-title">{titleDate}</div>
      )}

      {/* ----- 📌 mood */}

      <div
        className="moodlist-item"
        onMouseEnter={() => setShowMoodOptions(true)}
        onMouseLeave={() => setShowMoodOptions(false)}
      >
        <div className="mood-icon">{moodIcons[mood.type - 1]}</div>
        <div className="mood-text-container">
          <div className="mood-text-top-row">{mood.text}</div>
          <div className="mood-text--bottom-row">
            <div className="mood-date-time">
              {postDate} @ {postTime}
            </div>
          </div>
        </div>

        {/* ----- 📌 edit/delete */}

        <div
          className="mood-options-container"
          id={showMoodOptions ? 'mood-options-shown' : undefined}
        >
          <div
            className="mood-options-button clickable"
            onClick={() => {
              setEditFormState({
                ...mood,
                activeMood: { [mood.type]: true, activeType: mood.type },
              });
              setShowEditModal(true);
            }}
          >
            <img src={pencilIcon} alt="edit button" id="edit-mood-icon" />
          </div>

          <div className="mood-options-button clickable" onClick={() => setShowDeleteModal(true)}>
            <img src={binIcon} alt="delete button" id="delete-mood-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MoodListItem;
