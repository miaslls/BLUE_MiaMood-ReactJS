import { useState } from "react";
import "App.css";

import Header from "components/Header/Header";
import MoodList from "components/MoodList/MoodList";
import Statistics from "components/Statistics/Statistics";
import CreateMoodModal from "components/CreateMoodModal/CreateMoodModal";

function App() {
  const [showCreateMoodModal, setShowCreateMoodModal] = useState(false);

  return (
    <div id="outer-container">
      <Header createMood={() => setShowCreateMoodModal(true)} />
      <main>
        <MoodList />
        <Statistics />

        {showCreateMoodModal && (
          <CreateMoodModal closeModal={() => setShowCreateMoodModal(false)} />
        )}
      </main>
    </div>
  );
}

export default App;
