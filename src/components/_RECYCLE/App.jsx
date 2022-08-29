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
  // ----- 📌📌 SEARCH

  const [showSearch, setShowSearch] = useState(false);
  const [searchDate, setSearchDate] = useState();

  // ----- 📌📌 LIST

  const [selectedMoodList, setSelectedMoodList] = useState('today');
  const [moodListLoading, setMoodListLoading] = useState(true);
  const [moodList, setMoodList] = useState([]);

  const getMoodList = async (year, month, day) => {
    setMoodListLoading(true);

    let response;

    switch (selectedMoodList) {
      case 'all':
        response = await MoodService.getAllMoods();
        break;

      case 'today':
        response = await MoodService.getTodayMoods();
        break;

      // 🚨 DISGRACEFUL 🔻
      case 'date':
        year && month && day
          ? (response = await MoodService.getMoodsByDate(year, month, day))
          : (response = await MoodService.getTodayMoods());
        break;

      default:
        response = await MoodService.getTodayMoods();
        break;
    }

    setMoodList(response.moods);
    setMoodListLoading(false);
  };

  useEffect(() => {
    getMoodList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedMoodList !== 'date') {
      getMoodList();
    }
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

      <Header
        getMoodList={getMoodList}
        setSelectedMoodList={setSelectedMoodList}
        openCreateForm={openCreateForm}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        setSearchDate={setSearchDate}
        closeForm={closeForm}
      />

      <main>
        {/* ----- 📌 MOODLIST */}

        {moodListLoading && <Loading />}

        {!moodListLoading && (
          <MoodList
            selectedMoodList={selectedMoodList}
            moodList={moodList}
            moodIcons={moodIcons}
            getMoodList={getMoodList}
            openEditForm={openEditForm}
            closeForm={closeForm}
            searchDate={searchDate}
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
            setShowSearch={setShowSearch}
          />
        )}

        {/* ----- 📌 STATISTICS */}

        {!formOpen && !moodListLoading && (
          <Statistics
            moodIcons={moodIcons}
            list={moodList}
            getMoodList={getMoodList}
            setSelectedMoodList={setSelectedMoodList}
          />
        )}
      </main>
    </div>
  );
}

export default App;
