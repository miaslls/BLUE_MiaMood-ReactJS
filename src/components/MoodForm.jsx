import { useState, useEffect } from "react";
import { MoodService } from "services/MoodService";

import markerStroke from "assets/IMG/marker-stroke.svg";
import closeIcon from "assets/ICON/icon-close.svg";

function MoodForm({
  moodIcons,
  emptyForm,
  formState,
  setFormState,
  activeMood,
  setActiveMood,
  getMoodlist,
  setFormOpen,
  closeForm,
}) {
  // ----- 📌 input default value

  const [defaultInputValues, setDefaultInputValues] = useState({});

  useEffect(() => {
    setDefaultInputValues({
      type: formState.type,
      date: formState.date,
      time: formState.time,
      text: formState.text,
    });
  }, [formState]);

  const getTypeInput = () => defaultInputValues.type;
  const getDateInput = () => defaultInputValues.date;
  const getTimeInput = () => defaultInputValues.time;
  const getTextInput = () => defaultInputValues.text;

  //----- 📌 handleChange

  const handleChange = (e, name) => {
    setFormState({ ...formState, [name]: e.target.value });
  };

  const setMoodType = (moodType) => {
    setFormState({ ...formState, type: moodType });
    setActiveMood({ [moodType]: true, activeType: moodType });
  };

  // ----- 📌 submit

  const submitForm = async () => {
    const { _id, type, text, date, time } = formState;
    const moodBody = { type, text, date, time };

    if (type && date && time) {
      const response = _id
        ? await MoodService.updateMood(_id, moodBody)
        : await MoodService.createMood(moodBody);

      if (response.mood) {
        setFormState(emptyForm);
        setFormOpen(false);
        getMoodlist();
      }
    }
  };

  //  📌📌 ----- SubmitButton

  function SubmitButton({ children, editType = undefined }) {
    return (
      <button
        className="clickable"
        id="send-button"
        type="button"
        onClick={() => submitForm()}
      >
        {children}
        <span id="send-button-icon">
          {editType
            ? moodIcons[editType - 1]
            : moodIcons[activeMood.activeType - 1]}
        </span>
      </button>
    );
  }

  // 📌📌📌 RETURN

  return (
    <section id="mood-form">
      <h2 className="section-title">MoodForm</h2>
      <div className="section-title-underline">
        <img src={markerStroke} alt="" />
      </div>

      {/* ----- 📌 TYPE input */}

      <form autoComplete="off">
        <div id="mood-type-container">
          <input
            type="hidden"
            name="type"
            required
            defaultValue={getTypeInput()}
            onChange={(e) => handleChange(e, "type")}
          />

          {moodIcons.map((icon, index) => (
            <div
              key={`form-mood-type-${index + 1}`}
              className={`form-mood-icon clickable ${
                activeMood[index + 1] ? "active-mood" : null
              }`}
              onClick={() => setMoodType(index + 1)}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* ----- 📌 DATE/TIME input */}

        <div id="date-time-container">
          <input
            className="input"
            type="date"
            name="date"
            required
            defaultValue={getDateInput()}
            onChange={(e) => handleChange(e, "date")}
          />

          <input
            className="input"
            type="time"
            step="60"
            name="time"
            required
            defaultValue={getTimeInput()}
            onChange={(e) => handleChange(e, "time")}
          />
        </div>

        {/* ----- 📌 TEXT input */}

        <div id="text-container">
          <input
            id="text-input"
            className="input"
            type="text"
            name="text"
            placeholder="optional! this is example text..."
            defaultValue={getTextInput()}
            onChange={(e) => handleChange(e, "text")}
          />
        </div>

        {/* ----- 📌📌 BUTTONS */}

        <div id="form-buttons-container">
          <div
            className="form-button clickable"
            id="close-button"
            onClick={() => closeForm(false)}
          >
            <img src={closeIcon} alt="" />
          </div>

          {/* ----- 📌 submit */}

          <div className="form-button" id="submit-button-container">
            <SubmitButton editType={formState.type}>
              {formState._id ? "edit" : "add"}
            </SubmitButton>
          </div>
        </div>
      </form>
    </section>
  );
}

export default MoodForm;
