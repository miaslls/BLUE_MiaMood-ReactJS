import { useState, useEffect } from "react";
import { MoodService } from "services/MoodService";
import { getDateToday, getTimeNow } from "util/getDateTimeNow";
import formatDateTime from "util/formatDateTime";

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

  // ----- 📌📌 FORM

  const emptyForm = {
    _id: undefined,
    type: undefined,
    text: undefined,
    date: undefined,
    time: undefined,
  };

  const [formState, setFormState] = useState(emptyForm);
  const [activeMood, setActiveMood] = useState({});

  //----- 📌 handleChange

  const handleChange = (e, name) => {
    setFormState({ ...formState, [name]: e.target.value });
  };

  const setMoodType = (moodType) => {
    setFormState({ ...formState, type: moodType });
    setActiveMood({ [moodType]: true, activeType: moodType });
  };

  const setDateToday = () => {
    const today = getDateToday();
    setFormState({ ...formState, date: today });
    return today;
  };

  const setTimeNow = () => {
    const now = getTimeNow();
    setFormState({ ...formState, time: now });
    return now;
  };

  // ----- 📌 submit

  const submitForm = async () => {
    const { _id, type, text, date, time } = formState;
    const moodBody = { type, text, date, time };

    const response = _id
      ? await MoodService.updateMood(_id, moodBody)
      : await MoodService.createMood(moodBody);

    setFormState(emptyForm);
    getMoodList();
  };

  //  📌🦋 ----- SubmitButton

  function SubmitButton({ buttonText, editType = undefined }) {
    return (
      <button
        className="send-button clickable"
        type="button"
        onClick={() => submitForm()}
      >
        {buttonText}
        <span id="button-icon">
          {editType
            ? moodIcons[editType - 1]
            : moodIcons[activeMood.activeType - 1]}
        </span>
      </button>
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

        <nav>{/* <div className="nav-icon clickable">¯</div> */}</nav>
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
            <div className="moodlist-item" key={`mood-${index}`}>
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
                        onClick={() => setFormState(mood)}
                      />
                    </div>
                    <div className="mood-options-button clickable">
                      <img src={iconScissors} alt="delete button" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ----- 📌 FORM */}

        <section id="mood-form">
          <h2 className="section-title">MoodForm</h2>
          <div className="section-title-underline">
            <img src={markerStroke} alt="" />
          </div>

          <form autoComplete="off">
            <div id="mood-type-container">
              <input
                type="hidden"
                name="type"
                required
                defaultValue={formState.type}
                onChange={(e) => handleChange(e, "type")}
              />
              {/* 🚨 --- TODO: refactor this shit 🔻 */}
              <div
                className={`form-mood-icon clickable ${
                  activeMood[1] ? "active-mood" : null
                }`}
                onClick={() => setMoodType(1)}
              >
                &#60;
              </div>
              <div
                className={`form-mood-icon clickable ${
                  activeMood[2] ? "active-mood" : null
                }`}
                onClick={() => setMoodType(2)}
              >
                *
              </div>
              <div
                className={`form-mood-icon clickable ${
                  activeMood[3] ? "active-mood" : null
                }`}
                onClick={() => setMoodType(3)}
              >
                2
              </div>
              <div
                className={`form-mood-icon clickable ${
                  activeMood[4] ? "active-mood" : null
                }`}
                onClick={() => setMoodType(4)}
              >
                .
              </div>
              <div
                className={`form-mood-icon clickable ${
                  activeMood[5] ? "active-mood" : null
                }`}
                onClick={() => setMoodType(5)}
              >
                "
              </div>
              <div
                className={`form-mood-icon clickable ${
                  activeMood[6] ? "active-mood" : null
                }`}
                onClick={() => setMoodType(6)}
              >
                A
              </div>
            </div>

            <div id="date-time-container">
              <input
                className="input"
                type="date"
                name="date"
                required
                defaultValue={formState.date || setDateToday()}
                onChange={(e) => handleChange(e, "date")}
              />
              <input
                className="input"
                type="time"
                step="60"
                name="time"
                required
                defaultValue={formState.time || setTimeNow()}
                onChange={(e) => handleChange(e, "time")}
              />
            </div>

            <div id="text-container">
              <input
                id="text-input"
                className="input"
                type="text"
                name="text"
                placeholder="optional! this is example text..."
                defaultValue={formState.text}
                onChange={(e) => handleChange(e, "text")}
              />
            </div>

            {!formState._id && <SubmitButton buttonText={"add mood"} />}
            {formState._id && (
              <SubmitButton
                buttonText={"edit mood"}
                editType={formState.type}
              />
            )}
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
