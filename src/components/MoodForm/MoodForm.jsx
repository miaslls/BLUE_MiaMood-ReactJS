import "./MoodForm.css";
import { useState } from "react";
import { MoodService } from "services/MoodService";
import { getDateToday, getTimeNow } from "util/getDateTimeNow";

import Modal from "components/Modal/Modal";

function MoodForm({ closeModal, saving, setSaving, moodBody }) {
  const moodIcons = ["<", "*", "2", ".", '"', "A"];

  const emptyForm = {
    type: "",
    text: "",
    date: getDateToday(),
    time: getTimeNow(),
  };

  const [form, setForm] = useState(emptyForm);

  const [activeMood, setActiveMood] = useState({});

  if (moodBody) setForm(moodBody);

  const handleChange = (e, name) => {
    setForm({ ...form, [name]: e.target.value });
  };

  const setMoodType = (moodType) => {
    setForm({ ...form, type: moodType });
    setActiveMood({ [moodType]: true, activeType: moodType });
  };

  // 📌

  const submitForm = async () => {
    setSaving(true);

    const { type, text, date, time, _id } = form;
    const moodBody = { type, text, date, time };

    const response = _id
      ? await MoodService.updateMood(_id, moodBody)
      : await MoodService.createMood(moodBody);

    setSaving(false);

    console.log(response); // 🐞
    closeModal();
  };

  // 📌

  function SubmitButton({ buttonText }) {
    return (
      <button
        className="send-button clickable"
        type="button"
        onClick={() => submitForm()}
        disabled={saving}
      >
        {buttonText}
        <span id="button-icon">{moodIcons[activeMood.activeType - 1]}</span>
      </button>
    );
  }

  // 📌

  return (
    <Modal closeModal={closeModal}>
      <form autoComplete="off">
        <h2 id="form-title">mood/ADD</h2>

        <div id="mood-type-container">
          <input
            type="hidden"
            name="type"
            required
            onChange={(e) => handleChange(e, "type")}
          />

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
            defaultValue={getDateToday()}
            required
            onChange={(e) => handleChange(e, "date")}
          />
          <input
            className="input"
            type="time"
            step="60"
            name="time"
            defaultValue={getTimeNow()}
            required
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
            onChange={(e) => handleChange(e, "text")}
          />
        </div>

        {!moodBody && <SubmitButton buttonText={"add mood"} moodId={false} />}
        {moodBody && (
          <SubmitButton buttonText={"edit mood"} moodId={moodBody._id} />
        )}
      </form>
    </Modal>
  );
}

export default MoodForm;
