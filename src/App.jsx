import "App.css";
import { useState, useEffect } from "react";
import { MoodService } from "services/MoodService";
import MoodForm from "components/MoodForm/MoodForm";

// TODO: organize CSS
import "components/Header/Header.css";
import "components/MoodList/MoodList.css";

import MoodListItem from "components/MoodListItem/MoodListItem";
import markerStroke from "assets/IMG/marker-stroke.svg";

function App() {
  const [moodList, setMoodList] = useState([]);

  const getMoodList = async () => {
    const response = await MoodService.getAllMoods();
    setMoodList(response.moods);
  };

  useEffect(() => {
    getMoodList();
  }, []);

  const [showCreateMoodForm, setShowCreateMoodForm] = useState(false);

  const [showEditMoodForm, setShowEditMoodForm] = useState(false);
  const [moodToEdit, setMoodToEdit] = useState(null);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!saving) {
      getMoodList();
    }
  }, [saving]);

  return (
    <div id="outer-container">
      <header>
        <div id="page-title">
          Mia<span>Mood</span>
        </div>

        <nav>
          {/* <div className="nav-icon clickable">2</div>
        <div className="nav-icon clickable">F</div>
        <div className="nav-icon">D</div>
        <div className="nav-icon">(</div> */}

          <div
            className="nav-icon clickable"
            onClick={() => setShowCreateMoodForm(true)}
          >
            ¯
          </div>
        </nav>
      </header>

      <main>
        <section id="moodlist">
          <h2 id="moodlist-title">all moods</h2>
          <div id="moodlist-title-underline">
            <img src={markerStroke} alt="" />
          </div>

          {moodList.map((mood, index) => (
            <MoodListItem
              key={`moodlistItem-${index}`}
              mood={mood}
              getMoodToEdit={(chosenMood) => {
                setMoodToEdit(chosenMood);
                // PRECISAVA ESPERAR DEFINIR!?!?!?
                // setShowEditMoodForm(true);
                console.log("in APP", moodToEdit); // 🐞
              }}
            />
          ))}
        </section>
      </main>
      {showCreateMoodForm && (
        <MoodForm
          closeModal={() => setShowCreateMoodForm(false)}
          moodBody={false}
          saving={saving}
          setSaving={setSaving}
        />
      )}

      {showEditMoodForm && (
        <MoodForm
          closeModal={() => setShowEditMoodForm(false)}
          // moodBody={moodToEdit}
          moodBody={{
            _id: 1,
            type: 1,
            text: "fuck",
            dateTime: "2022-08-19:07:00",
          }}
          saving={saving}
          setSaving={setSaving}
        />
      )}
    </div>
  );
}

export default App;
