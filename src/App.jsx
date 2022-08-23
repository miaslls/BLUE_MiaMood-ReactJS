import { useState, useEffect } from "react";
import { MoodService } from "services/MoodService";
import { getDateToday, getTimeNow } from "util/getDateTimeNow";
import MoodForm from "components/MoodForm";
import Statistics from "components/Statistics";

import markerStroke from "assets/IMG/marker-stroke.svg";
import pencilIcon from "assets/ICON/icon-pencil.svg";
import scissorsIcon from "assets/ICON/icon-scissors.svg";

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

  const openCreateForm = () => {
    setFormState(emptyForm);
    setActiveMood({});
    setFormOpen(true);
  };

  const openEditForm = (mood) => {
    setFormState(mood);
    setActiveMood({ [mood.type]: true, activeType: mood.type });
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormState(emptyForm);
    setActiveMood({});
    setFormOpen(false);
  };

  // ----- 📌📌📌🚨 function ITEM

  function MoodListItem({ mood, index, moodList, openEditForm, closeForm }) {
    const moodDate = new Date(`${mood.date}T${mood.time}`);
    const titleDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    }).format(moodDate);
    const postDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "numeric",
    }).format(moodDate);
    const postTime = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(moodDate);

    // ----- 📌 delete

    const deleteMood = async (id) => {
      const response = await MoodService.deleteMood(id);
      if (response.message === "deleted") {
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
        <div className="moodlist-item" key={mood._id}>
          <div className="mood-icon">{moodIcons[mood.type - 1]}</div>
          <div className="mood-text-container">
            <div className="mood-text-top-row">{mood.text}</div>
            <div className="mood-text--bottom-row">
              <div className="mood-date-time">
                {postDate} @ {postTime}
              </div>
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

  // 📌📌🚨 APP RETURN

  return (
    <div id="outer-container">
      {/* ----- 📌 HEADER */}

      <header>
        <div id="page-title">
          Mia<span>Mood</span>
        </div>

        <nav>
          <div
            className="nav-icon clickable"
            onClick={() => {
              openCreateForm();
            }}
          >
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

          {moodList.length > 0 ? (
            <div id="moodlist-items-container">
              {moodList.map((mood, index, array) => (
                <MoodListItem
                  key={mood._id}
                  mood={mood}
                  index={index}
                  moodList={array}
                  openEditForm={openEditForm}
                  closeForm={closeForm}
                />
              ))}
            </div>
          ) : (
            <div id="no-moods">
              <p>this list is empty (or loading!)</p>
              <div
                id="no-moods-add"
                className="clickable"
                onClick={() => openCreateForm()}
              >
                ADD
                <div id="no-moods-add-icon">¯</div>
              </div>
            </div>
          )}
        </section>

        {/* ----- 📌 FORM */}

        {formOpen && (
          <MoodForm
            moodIcons={moodIcons}
            emptyForm={emptyForm}
            formState={formState}
            setFormState={setFormState}
            activeMood={activeMood}
            setActiveMood={setActiveMood}
            getMoodlist={getMoodList}
            setFormOpen={setFormOpen}
            closeForm={closeForm}
          />
        )}

        {/* ----- 📌 STATISTICS */}

        {!formOpen && (
          // <Statistics moodIcons={moodIcons} moodCount={moodCount} />
          <Statistics
            moodIcons={moodIcons}
            list={moodList}
            getMoodList={getMoodList}
          />
        )}
      </main>
    </div>
  );
}

export default App;
