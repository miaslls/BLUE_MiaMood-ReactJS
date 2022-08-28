import 'assets/CSS/MoodListItem.css';

import { MoodService } from 'services/MoodService';

import pencilIcon from 'assets/ICON/icon-pencil.svg';
import scissorsIcon from 'assets/ICON/icon-scissors.svg';

function MoodListItem({ mood, index, moodList, moodIcons, getMoodList, openEditForm, closeForm }) {
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

  // ----- 📌 delete

  const deleteMood = async (id) => {
    const response = await MoodService.deleteMood(id);

    if (response.message === 'deleted') {
      closeForm();
      getMoodList();
    }
  };

  // 📌📌🚨 ITEM RETURN

  return (
    <>
      {(index === 0 || mood.date !== moodList[index - 1].date) && (
        <div className="moodlist-date-title">{titleDate}</div>
      )}

      {/* ----- 📌 mood */}

      <div className="moodlist-item">
        <div className="mood-icon">{moodIcons[mood.type - 1]}</div>
        <div className="mood-text-container">
          <div className="mood-text-top-row">{mood.text}</div>
          <div className="mood-text--bottom-row">
            <div className="mood-date-time">
              {postDate} @ {postTime}
            </div>

            {/* ----- 📌 edit/delete */}

            <div className="mood-options-container">
              <div className="mood-options-button clickable">
                <img
                  src={pencilIcon}
                  alt="edit button"
                  onClick={() => {
                    closeForm();
                    openEditForm(mood);
                  }}
                />
              </div>

              <div className="mood-options-button clickable">
                <img
                  src={scissorsIcon}
                  alt="delete button"
                  onClick={() => {
                    deleteMood(mood._id);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoodListItem;
