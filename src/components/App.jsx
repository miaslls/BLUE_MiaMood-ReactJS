import 'assets/CSS/App.css';

import { useState, useEffect } from 'react';
import { MoodService } from 'services/MoodService';
import { getDateToday, getTimeNow } from 'util/getDateTimeNow';

import Header from 'components/Header';
import Loading from 'components/Loading';
import MoodList from 'components/MoodList';
import MoodForm from 'components/MoodForm';
import Statistics from 'components/Statistics';

const moodIcons = ['<', '*', '2', '.', '"', 'A'];

// 📌📌📌 function APP

function App() {
  // ----- 📌📌 LIST

  const [selectedMoodList, setSelectedMoodList] = useState('today');
  const [moodListLoading, setMoodListLoading] = useState(true);
  const [moodList, setMoodList] = useState([]);

  const getMoodList = async () => {
    setMoodListLoading(true);

    let response;

    selectedMoodList === 'today'
      ? (response = await MoodService.getTodayMoods())
      : (response = await MoodService.getAllMoods());

    setMoodList(response.moods);
    setMoodListLoading(false);
  };

  useEffect(() => {
    getMoodList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMoodList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMoodList]);

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

      <Header setSelectedMoodList={setSelectedMoodList} openCreateForm={openCreateForm} />

      <main>
        {/* ----- 📌 MOODLIST */}

        {moodListLoading && <Loading />}

        {!moodListLoading && (
          <MoodList
            selectedMoodList={selectedMoodList}
            moodList={moodList}
            moodIcons={moodIcons}
            getMoodList={getMoodList}
            openCreateForm={openCreateForm}
            openEditForm={openEditForm}
            closeForm={closeForm}
          />
        )}

        {/* ----- 📌 FORM */}

        {formOpen && !moodListLoading && (
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

        {!formOpen && !moodListLoading && (
          <Statistics moodIcons={moodIcons} list={moodList} getMoodList={getMoodList} />
        )}
      </main>
    </div>
  );
}

export default App;
