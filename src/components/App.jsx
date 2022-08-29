import 'assets/CSS/App.css';

// import { useState, useEffect } from 'react';
// import { MoodService } from 'services/MoodService';
// import { getDateToday, getTimeNow } from 'util/getDateTimeNow';

import Header from 'components/Header';

// const moodIcons = ['<', '*', '2', '.', '"', 'A'];

// 📌📌📌 function APP

function App() {
  return (
    <div id="outer-container">
      {/* ----- 📌 HEADER */}

      <Header />
    </div>
  );
}

export default App;
