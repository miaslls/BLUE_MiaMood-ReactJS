import 'assets/CSS/MoodList.css';
import MoodListItem from 'components/MoodListItem';
import markerStroke from 'assets/IMG/marker-stroke.svg';

// 📌📌📌 function LIST

function MoodList({
  selectedMoodList,
  setSelectedMoodList,
  moodList,
  moodIcons,
  getMoodList,
  openCreateForm,
  openEditForm,
  closeForm,
  searchDate,
}) {
  // ----- 📌 date TITLE

  const getMoodsDateTitle = () => {
    let date;

    if (selectedMoodList === 'date' && searchDate) {
      date = new Date(`${searchDate}T00:00:00`);
    } else {
      date = new Date();
    }

    return new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'long',
    }).format(date);
  };

  // 📌📌 LIST RETURN

  return (
    <section id="moodlist">
      <h2 className="section-title">
        {selectedMoodList === 'all' ? 'AllMoods' : getMoodsDateTitle()}
      </h2>
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
              getMoodList={getMoodList}
              openEditForm={openEditForm}
              closeForm={closeForm}
            />
          ))}
        </div>
      ) : (
        //  ----- 📌 NO MOODS

        <div id="no-moods">
          <p>this list is empty!</p>
          <div
            id="no-moods-add"
            className="clickable"
            onClick={() => {
              setSelectedMoodList('today');
              openCreateForm();
            }}
          >
            ADD
            <div id="no-moods-add-icon">¯</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MoodList;
