import 'assets/CSS/MoodListItem.css';

import pencilIcon from 'assets/ICON/options-icon-edit.svg';
import binIcon from 'assets/ICON/options-icon-delete.svg';

function MoodListItem({ mood, moodIcons }) {
  // ----- 📌 date/time formatting

  const moodDate = new Date(`${mood.date}T${mood.time}`);

  // const titleDate = new Intl.DateTimeFormat('en-US', {
  //   weekday: 'long',
  //   day: '2-digit',
  //   month: 'long',
  // }).format(moodDate);

  const postDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'numeric',
  }).format(moodDate);

  const postTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(moodDate);

  // 📌📌🚨 ITEM RETURN

  return (
    <>
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
                <img src={pencilIcon} alt="edit button" />
              </div>

              <div className="mood-options-button clickable">
                <img src={binIcon} alt="delete button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoodListItem;
