import "./MoodList.css";
import { useState, useEffect } from "react";
import { MoodService } from "services/MoodService";

import MoodListItem from "components/MoodListItem/MoodListItem";

function MoodList() {
  const [moodList, setMoodList] = useState([]);

  const getMoodList = async () => {
    const response = await MoodService.getAllMoods();
    setMoodList(response.moods);
  };

  useEffect(() => {
    getMoodList();
  }, []);

  console.log(moodList); // 🐞

  // const moodListArray = Array.from(moodList);

  return (
    <>
      <section id="moodlist">
        <div id="moodlist-title">moods/ ALL</div>
        {moodList.map((mood, index) => (
          <MoodListItem
            key={`moodlistItem-${index}`}
            type={mood.type}
            text={mood.text}
            dateTime={mood.dateTime}
          />
        ))}
      </section>
    </>
  );
}

export default MoodList;
