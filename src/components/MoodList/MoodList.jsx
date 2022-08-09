import { useState, useEffect } from "react";
import { MoodService } from "../../services/MoodService";

import "./MoodList.css";
import MoodListItem from "./MoodListItem";

function MoodList() {
  const [moodlist, setMoodlist] = useState({});

  const getMoodList = async () => {
    const response = await MoodService.getAllMoods();
    setMoodlist(response);
  };

  useEffect(() => {
    getMoodList();
  }, []);

  const moodlistArray = Array.from(moodlist);

  return (
    <section id="moodlist">
      <div id="moodlist-title">moods/ TODAY</div>
      {moodlistArray.map((mood, index) => (
        <MoodListItem
          key={index}
          type={mood.type}
          text={mood.text}
          dateTime={mood.dateTime}
        />
      ))}
    </section>
  );
}

export default MoodList;
