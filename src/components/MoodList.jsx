import 'assets/CSS/MoodList.css';
import MoodListItem from 'components/MoodListItem';

import markerStroke from 'assets/IMG/marker-stroke.svg';

function MoodList({ moodIcons, moodList, getMoodList, openCreateForm, openEditForm, closeForm }) {
  return (
    <section id="moodlist">
      <h2 className="section-title">AllMoods</h2>
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
              moodIcons={moodIcons}
              getMoodList={getMoodList}
              openEditForm={openEditForm}
              closeForm={closeForm}
            />
          ))}
        </div>
      ) : (
        //  ----- 📌 NO MOODS

        <div id="no-moods">
          <p>this list is empty (or loading!)</p>
          <div id="no-moods-add" className="clickable" onClick={() => openCreateForm()}>
            ADD
            <div id="no-moods-add-icon">¯</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MoodList;
