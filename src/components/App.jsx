import 'assets/CSS/App.css';

import { useState, useEffect } from 'react';
import { MoodService } from 'services/MoodService';
import { getDateToday, getTimeNow } from 'util/getDateTimeNow';

import Header from 'components/Header';
import MoodList from 'components/MoodList';
import MoodForm from 'components/MoodForm';
import Statistics from 'components/Statistics';

const moodIcons = ['<', '*', '2', '.', '"', 'A'];

// 📌📌📌 function APP

function App() {
  // ----- 📌📌 LIST

  const [selectedMoodList, setSelectedMoodList] = useState('today');
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

  // 📌📌 APP RETURN

  return (
    <div id="outer-container">
      {/* ----- 📌 HEADER */}

      <Header openCreateForm={openCreateForm} />

      <main>
        {/* ----- 📌 MOODLIST */}

        <MoodList
          moodIcons={moodIcons}
          moodList={moodList}
          getMoodList={getMoodList}
          openCreateForm={openCreateForm}
          openEditForm={openEditForm}
          closeForm={closeForm}
        />

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
          <Statistics moodIcons={moodIcons} list={moodList} getMoodList={getMoodList} />
        )}
      </main>
    </div>
  );
}

export default App;
