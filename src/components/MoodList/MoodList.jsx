import "./MoodList.css";
import { useState, useEffect } from "react";
import { MoodService } from "services/MoodService";

import MoodListItem from "components/MoodListItem/MoodListItem";
import MoodDetailsModal from "components/MoodDetailsModal/MoodDetailsModal";

function MoodList() {
  // 📌

  const [moodList, setMoodList] = useState([]);

  const getMoodList = async () => {
    const response = await MoodService.getAllMoods();
    setMoodList(response.moods);
  };

  useEffect(() => {
    getMoodList();
  }, []);

  // 📌

  const [moodModal, setMoodModal] = useState(false);

  const getMoodById = async (id) => {
    const response = await MoodService.getMoodById(id);
    setMoodModal(response.mood);
  };

  return (
    <>
      <section id="moodlist">
        <h2 id="moodlist-title">moods/ ALL</h2>
        {moodList.map((mood, index) => (
          <MoodListItem
            key={`moodlistItem-${index}`}
            mood={mood}
            clickItem={() => getMoodById(mood._id)}
          />
        ))}
      </section>
      {moodModal && (
        <MoodDetailsModal
          mood={moodModal}
          closeModal={() => setMoodModal(false)}
        />
      )}
    </>
  );
}

export default MoodList;
