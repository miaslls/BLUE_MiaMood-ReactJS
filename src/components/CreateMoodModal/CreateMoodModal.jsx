import "./CreateMoodModal.css";
import { useState } from "react";
import { MoodService } from "services/MoodService";
import { getDateToday, getTimeNow } from "util/getDateTimeNow";

import Modal from "components/Modal/Modal";

function CreateMoodModal({ closeModal, onCreateMood }) {
  const moodIcons = ["<", "*", "2", ".", '"', "A"];

  const form = {
    type: "",
    text: "",
    date: getDateToday(),
    time: getTimeNow(),
  };

  const [formState, setFormState] = useState(form);
  const [activeMood, setActiveMood] = useState({});

  const handleChange = (e, name) => {
    setFormState({ ...formState, [name]: e.target.value });
  };

  const setMoodType = (moodType) => {
    setFormState({ ...formState, type: moodType });
    setActiveMood({ [moodType]: true, activeType: moodType });
  };

  // 📌

  const createMood = async () => {
    const { type, text, date, time } = formState;
    const mood = { type, text, date, time };
    const response = await MoodService.createMood(mood);
    onCreateMood(response.mood);
    closeModal();
  };

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

        <button
          className="send-button clickable"
          type="button"
          onClick={createMood}
        >
          add mood{" "}
          <span id="button-icon">{moodIcons[activeMood.activeType - 1]}</span>
        </button>
      </form>
    </Modal>
  );
}

export default CreateMoodModal;
