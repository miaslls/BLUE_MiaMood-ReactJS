import "./MoodList.css";
import { useState, useEffect } from "react";
import { MoodService } from "services/MoodService";
import MoodListItem from "components/MoodListItem/MoodListItem";
import markerStroke from "./marker-stroke.svg";

function MoodList({ saving }) {
  // 📌

  const [moodList, setMoodList] = useState([]);

  const getMoodList = async () => {
    const response = await MoodService.getAllMoods();
    setMoodList(response.moods);
  };

  useEffect(() => {
    getMoodList();
  }, []);

  useEffect(() => {
    if (!saving) {
      getMoodList();
    }
  }, [saving]);

  // 📌

  return (
    <section id="moodlist">
      <h2 id="moodlist-title">all moods</h2>
      <div id="moodlist-title-underline">
        <img src={markerStroke} alt="" />
      </div>
      {moodList.map((mood, index) => (
        <MoodListItem key={`moodlistItem-${index}`} mood={mood} />
      ))}
    </section>
  );
}

export default MoodList;
