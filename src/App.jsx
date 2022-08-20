import { useState, useEffect } from "react";
import { MoodService } from "services/MoodService";
import { getDateToday, getTimeNow } from "util/getDateTimeNow";
import formatDateTime from "util/formatDateTime";
import MoodForm from "components/MoodForm";

import markerStroke from "assets/IMG/marker-stroke.svg";
import iconPencil from "assets/ICON/icon-pencil.svg";
import iconScissors from "assets/ICON/icon-scissors.svg";

const moodIcons = ["<", "*", "2", ".", '"', "A"];

// 📌📌📌🚨 function APP

function App() {
  // ----- 📌📌 LIST

  const [moodList, setMoodList] = useState([]);

  const getMoodList = async () => {
    const response = await MoodService.getAllMoods();
    setMoodList(response.moods);
  };

  useEffect(() => {
    getMoodList();
  }, []);

  // ----- 📌 delete // 🐞 FIXME: useContext?

  const [moodToDelete, setMoodToDelete] = useState(undefined);

  // useEffect(() => {
  //   if (moodToDelete) {
  //     MoodService.deleteMood(moodToDelete._id);
  //     setMoodToDelete(undefined);
  //     getMoodList();
  //   }
  // }, [moodToDelete]);

  const deleteMood = async (id) => {
    const response = await MoodService.deleteMood(id);
    getMoodList();
  };

  // ----- 📌📌 FORM

  const emptyForm = {
    _id: undefined,
    type: undefined,
    text: undefined,
    date: getDateToday(),
    time: getTimeNow(),
  };

  const [formState, setFormState] = useState(emptyForm);
  const [activeMood, setActiveMood] = useState({});
  const [formOpen, setFormOpen] = useState(false);

  // ----- 📌📌 ITEM

  function MoodListItem({ mood, index, deleteMood }) {
    const moodDate = new Date(mood.date);
    const titleDate = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
      timeZone: "America/Sao_Paulo",
    }).format(moodDate);

    return (
      <>
        {(index === 0 || mood.date !== moodList[index - 1].date) && (
          <div className="moodlist-date-title">{titleDate}</div>
        )}
        <div className="moodlist-item" key={mood._id}>
          <div className="mood-icon">{moodIcons[mood.type - 1]}</div>
          <div className="mood-text-container">
            <div className="mood-text-top-row">{mood.text}</div>
            <div className="mood-text--bottom-row">
              <div className="mood-date-time">
                {formatDateTime(mood.date, mood.time)}
              </div>
              <div className="mood-options-container">
                <div className="mood-options-button clickable">
                  <img
                    src={iconPencil}
                    alt="edit button"
                    onClick={() => {
                      setFormState(mood);
                      setFormOpen(true);
                    }}
                  />
                </div>
                <div className="mood-options-button clickable">
                  <img
                    src={iconScissors}
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

  // 📌📌📌 APP RETURN

  return (
    <div id="outer-container">
      {/* ----- 📌 HEADER */}

      <header>
        <div id="page-title">
          Mia<span>Mood</span>
        </div>

        <nav>
          <div className="nav-icon clickable" onClick={() => setFormOpen(true)}>
            ¯
          </div>
        </nav>
      </header>

      <main>
        {/* ----- 📌 LIST */}

        <section id="moodlist">
          <h2 className="section-title">AllMoods</h2>
          <div className="section-title-underline">
            <img src={markerStroke} alt="" />
          </div>

          {/* ----- 📌 ITEM */}

          {moodList.map((mood, index) => (
            <MoodListItem
              key={mood._id}
              mood={mood}
              index={index}
              deleteMood={deleteMood}
              // setMoodToDelete={setMoodToDelete}
            />
          ))}
        </section>

        {/* ----- 📌 FORM */}

        {formOpen && (
          <MoodForm
            emptyForm={emptyForm}
            formState={formState}
            setFormState={setFormState}
            activeMood={activeMood}
            setActiveMood={setActiveMood}
            getMoodlist={getMoodList}
            setFormOpen={setFormOpen}
          />
        )}
      </main>
    </div>
  );
}

export default App;
