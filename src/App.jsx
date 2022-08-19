import "App.css";
import { useState } from "react";
import Header from "components/Header/Header";
import MoodList from "components/MoodList/MoodList";
import MoodForm from "components/MoodForm/MoodForm";
// import Statistics from "components/Statistics/Statistics";

function App() {
  const [showCreateMoodForm, setShowCreateMoodForm] = useState(false);
  const [saving, setSaving] = useState(false);

  return (
    <div id="outer-container">
      <Header openCreateMoodForm={() => setShowCreateMoodForm(true)} />

      <main>
        <MoodList saving={saving} />
        {/* <Statistics /> */}

        {showCreateMoodForm && (
          <MoodForm
            closeModal={() => setShowCreateMoodForm(false)}
            moodBody={false}
            saving={saving}
            setSaving={setSaving}
          />
        )}
      </main>
    </div>
  );
}

export default App;
