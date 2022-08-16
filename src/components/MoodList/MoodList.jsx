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

  console.log("moodlist", moodList); // 🐞

  // 📌

  const [moodModal, setMoodModal] = useState(false);

  const getMoodById = async (id) => {
    const response = await MoodService.getMoodById(id);
    setMoodModal(response.mood);
    console.log("id in fetch", id, "response", response); // 🐞
  };

  console.log("moodModal", moodModal); // 🐞

  return (
    <>
      <section id="moodlist">
        <div id="moodlist-title">moods/ ALL</div>
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
