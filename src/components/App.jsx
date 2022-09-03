import 'assets/CSS/App.css';

import { useState, useEffect } from 'react';
import { MoodService } from 'services/MoodService';
import { getDateToday } from 'util/getDateTimeNow';

import Header from 'components/Header';
import MoodList from 'components/MoodList';
import Loading from 'components/Loading';
import Statistics from 'components/Statistics';

const moodIcons = ['<', '*', '2', '.', '"', 'A'];

// 📌📌📌🚨 component APP

function App() {
  // ----- 📌📌 LIST

  const [moodListStates, setMoodListStates] = useState({
    loading: false,
    selected: 'date',
    full: [],
    today: [],
  });

  const [moodList, setMoodList] = useState([]);

  // ----- 📌 getMoodList
  // 👁‍🗨

  const getMoodList = async () => {
    setMoodListStates({ ...moodListStates, loading: true });

    const response = await MoodService.getAllMoods();
    const todayMoods = [...response.moods.filter((mood) => mood.date === getDateToday())];

    moodListStates.selected === 'date' ? setMoodList(todayMoods) : setMoodList(response.moods);

    setMoodListStates({
      ...moodListStates,
      all: response.moods,
      today: todayMoods,
      loading: false,
    });
  };

  useEffect(() => {
    getMoodList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 👁‍🗨
  useEffect(() => {
    moodListStates.selected === 'date'
      ? setMoodList(moodListStates.today)
      : setMoodList(moodListStates.all);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moodListStates.selected]);

  // ----- 📌📌 HEADER

  const [selectedNavIcon, setSelectedNavIcon] = useState('home');

  // ----- 📌search

  const [showSearch, setShowSearch] = useState(false);
  const [searchDate, setSearchDate] = useState();

  // 📌📌🚨 APP RETURN

  return (
    <div id="outer-container">
      {/* ----- 📌 HEADER */}

      <Header
        moodIcons={moodIcons}
        setMoodList={setMoodList}
        getMoodList={getMoodList}
        moodListStates={moodListStates}
        setMoodListStates={setMoodListStates}
        selectedNavIcon={selectedNavIcon}
        setSelectedNavIcon={setSelectedNavIcon}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        setSearchDate={setSearchDate}
      />

      <main>
        {/* ----- 📌 MOODLIST */}

        {moodListStates.loading && <Loading />}

        {!moodListStates.loading && (
          <MoodList
            moodIcons={moodIcons}
            moodList={moodList}
            getMoodList={getMoodList}
            selectedMoodList={moodListStates.selected}
            setSelectedNavIcon={setSelectedNavIcon}
            searchDate={searchDate}
            setSearchDate={setSearchDate}
            setShowSearch={setShowSearch}
          />
        )}

        {/* ----- 📌 STATISTICS */}

        {!moodListStates.loading && (
          <Statistics
            moodIcons={moodIcons}
            moodList={moodList}
            getMoodList={getMoodList}
            selectedMoodList={moodListStates.selected}
            setSelectedNavIcon={setSelectedNavIcon}
            setSearchDate={setSearchDate}
            setShowSearch={setShowSearch}
          />
        )}
      </main>
    </div>
  );
}

export default App;
