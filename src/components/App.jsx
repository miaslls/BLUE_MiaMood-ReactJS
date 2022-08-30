import 'assets/CSS/App.css';

import { useState, useEffect } from 'react';
import { MoodService } from 'services/MoodService';
// import { getDateToday, getTimeNow } from 'util/getDateTimeNow';

import Header from 'components/Header';
import MoodList from 'components/MoodList';
import Loading from 'components/Loading';
import Statistics from 'components/Statistics';

const moodIcons = ['<', '*', '2', '.', '"', 'A'];

// 📌📌📌🚨 function APP

function App() {
  // ----- 📌📌 LIST

  const [moodList, setMoodList] = useState([]);
  const [selectedMoodList, setSelectedMoodList] = useState('date');
  const [moodListLoading, setMoodListLoading] = useState('false');

  // ----- 📌 getMoodList

  const getMoodList = async () => {
    setMoodListLoading(true);

    let response;

    switch (selectedMoodList) {
      case 'date':
        response = await MoodService.getTodayMoods();
        break;
      case 'all':
        response = await MoodService.getAllMoods();
        break;
      default:
        response = { moods: [] };
    }

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

  // ----- 📌📌 SEARCH

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
        selectedMoodList={selectedMoodList}
        setSelectedMoodList={setSelectedMoodList}
        setMoodListLoading={setMoodListLoading}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        setSearchDate={setSearchDate}
      />

      <main>
        {/* ----- 📌 MOODLIST */}

        {moodListLoading && <Loading />}

        {!moodListLoading && (
          <MoodList
            moodIcons={moodIcons}
            moodList={moodList}
            getMoodList={getMoodList}
            selectedMoodList={selectedMoodList}
            searchDate={searchDate}
          />
        )}

        {/* ----- 📌 STATISTICS */}

        {!moodListLoading && (
          <Statistics moodIcons={moodIcons} moodList={moodList} getMoodList={getMoodList} />
        )}
      </main>
    </div>
  );
}

export default App;
