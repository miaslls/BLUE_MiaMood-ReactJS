import 'assets/CSS/MoodList.css';

import MoodListItem from 'components/MoodListItem';

import markerStroke from 'assets/IMG/marker-stroke.svg';
import separator from 'assets/IMG/separator.svg';

// 📌📌📌 function LIST

function MoodList({ moodIcons, moodList, selectedMoodList }) {
  // 📌📌 LIST RETURN

  return (
    <section id="moodlist">
      <div id="moodlist-separator">
        <img src={separator} alt="" />
      </div>

      {/* 🚨🔻 */}
      <h2 className="section-title">{selectedMoodList === 'all' ? 'AllMoods' : 'DATE ❗❗❗'}</h2>

      <div className="section-title-underline">
        <img src={markerStroke} alt="" />
      </div>

      {/* ----- 📌 ITEM */}

      {moodList.length > 0 ? (
        <div id="moodlist-items-container">
          {moodList.map((mood, index, array) => (
            <MoodListItem
              key={mood._id}
              mood={mood}
              index={index}
              moodList={array}
              selectedMoodList={selectedMoodList}
              moodIcons={moodIcons}
            />
          ))}
        </div>
      ) : (
        //  ----- 📌 NO MOODS

        <div id="no-moods">
          <p>this list is empty!</p>
        </div>
      )}
    </section>
  );
}

export default MoodList;
