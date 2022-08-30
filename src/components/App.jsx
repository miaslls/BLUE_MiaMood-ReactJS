import 'assets/CSS/App.css';

import { useState, useEffect } from 'react';
// import { MoodService } from 'services/MoodService';
// import { getDateToday, getTimeNow } from 'util/getDateTimeNow';

import Header from 'components/Header';
import MoodList from 'components/MoodList';

const moodIcons = ['<', '*', '2', '.', '"', 'A'];

// 🦋
const mockMoodList = [
  {
    _id: 1,
    type: 1,
    text: 'mock mood 1',
    date: '2022-08-30',
    time: '09:44:05',
  },
  {
    _id: 2,
    type: 2,
    text: 'mock mood 2',
    date: '2022-08-30',
    time: '09:45:10',
  },
  {
    _id: 3,
    type: 3,
    text: 'mock mood 3',
    date: '2022-08-29',
    time: '09:46:15',
  },
];

// 📌📌📌 function APP

function App() {
  const [moodList, setMoodList] = useState([]);
  const [selectedMoodList, setSelectedMoodList] = useState();

  useEffect(() => {
    setMoodList(mockMoodList);
    setSelectedMoodList('date');
  }, []);

  console.log(moodList, selectedMoodList); // 🦋

  return (
    <div id="outer-container">
      {/* ----- 📌 HEADER */}

      <Header setSelectedMoodList={setSelectedMoodList} />

      <main>
        {/* ----- 📌 MOODLIST */}

        <MoodList moodIcons={moodIcons} moodList={moodList} selectedMoodList={selectedMoodList} />
      </main>
    </div>
  );
}

export default App;
