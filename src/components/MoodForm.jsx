import 'assets/CSS/MoodForm.css';

import { useState, useEffect } from 'react';
import { MoodService } from 'services/MoodService';

import closeIcon from 'assets/ICON/icon-close.svg';
import alertIcon from 'assets/ICON/alert-icon-caution.svg';

//  📌📌 ----- SubmitButton

function SubmitButton({ children, moodIcons, activeMood, submitForm, editType = undefined }) {
  return (
    <button className="clickable" id="send-button" type="button" onClick={() => submitForm()}>
      {children}
      <span id="send-button-icon">
        {editType ? moodIcons[editType - 1] : moodIcons[activeMood.activeType - 1]}
      </span>
    </button>
  );
}

//  ----- 📌📌📌🚨 component FORM

function MoodForm({ moodIcons, emptyForm, formState, setFormState, getMoodlist, closeModal }) {
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
    setFormState({
      ...formState,
      type: moodType,
      activeMood: { [moodType]: true, activeType: moodType },
    });
  };

  //----- 📌 handleKeyPress

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitForm();
    }
  };

  // ----- 📌 submitForm

  const [noTypeAlert, setNoTypeAlert] = useState(false);

  const submitForm = async () => {
    const { _id, type, text, date, time } = formState;
    const moodBody = { type, text, date, time };

    if (!type) {
      setNoTypeAlert(true);
    }

    if (type && date && time) {
      const response = _id
        ? await MoodService.updateMood(_id, moodBody)
        : await MoodService.createMood(moodBody);

      if (response.mood) {
        setFormState(emptyForm);
        closeModal();
        getMoodlist();
      }
    }
  };

  // ----- 📌📌🚨 FORM RETURN

  return (
    <section id="mood-form">
      {noTypeAlert && (
        <div id="alert-no-type">
          <div id="no-type-icon">
            <img src={alertIcon} alt="" />
          </div>
          <div id="no-type-text">select mood!</div>
        </div>
      )}

      {/* ----- 📌 TYPE input */}

      <form autoComplete="off">
        <div id="mood-type-container">
          <input
            type="hidden"
            name="type"
            required
            defaultValue={getTypeInput()}
            onChange={(e) => handleChange(e, 'type')}
          />

          {moodIcons.map((icon, index) => (
            <div
              key={`form-mood-type-${index + 1}`}
              className={`form-mood-icon clickable ${
                formState.activeMood[index + 1] ? 'active-mood' : undefined
              }`}
              onClick={() => {
                setMoodType(index + 1);
                setNoTypeAlert(false);
              }}
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
            onChange={(e) => handleChange(e, 'date')}
          />

          <input
            className="input"
            type="time"
            step="60"
            name="time"
            required
            defaultValue={getTimeInput()}
            onChange={(e) => handleChange(e, 'time')}
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
            onChange={(e) => handleChange(e, 'text')}
            onKeyPress={(e) => handleKeyPress(e)}
          />
        </div>

        {/* ----- 📌📌 BUTTONS */}

        <div id="form-buttons-container">
          <div className="form-button clickable" id="close-button" onClick={() => closeModal()}>
            <img src={closeIcon} alt="" />
          </div>

          {/* ----- 📌 submitButton */}

          <div className="form-button" id="submit-button-container">
            <SubmitButton
              moodIcons={moodIcons}
              activeMood={formState.activeMood}
              submitForm={submitForm}
              editType={formState.type}
            >
              {formState._id ? 'edit' : 'add'}
            </SubmitButton>
          </div>
        </div>
      </form>
    </section>
  );
}

export default MoodForm;
