import 'assets/CSS/App.css';

import { useState, useEffect } from 'react';
import { MoodService } from 'services/MoodService';
// import { getDateToday, getTimeNow } from 'util/getDateTimeNow';

import Header from 'components/Header';
import MoodList from 'components/MoodList';
import Loading from 'components/Loading';

const moodIcons = ['<', '*', '2', '.', '"', 'A'];

// 📌📌📌 function APP

function App() {
  const [moodList, setMoodList] = useState([]);
  const [selectedMoodList, setSelectedMoodList] = useState('date');
  const [moodListLoading, setMoodListLoading] = useState('false');

  // ----- 📌 getMoodList

  const getMoodList = async () => {
    setMoodListLoading(true);

    let response;

    selectedMoodList === 'date'
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

  return (
    <div id="outer-container">
      {/* ----- 📌 HEADER */}

      <Header setSelectedMoodList={setSelectedMoodList} />

      <main>
        {/* ----- 📌 MOODLIST */}

        {moodListLoading && <Loading />}

        {!moodListLoading && (
          <MoodList moodIcons={moodIcons} moodList={moodList} selectedMoodList={selectedMoodList} />
        )}
      </main>
    </div>
  );
}

export default App;
