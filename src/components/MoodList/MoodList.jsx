import "./MoodList.css";
import { useState, useEffect } from "react";
import { MoodService } from "services/MoodService";

import MoodListItem from "components/MoodListItem/MoodListItem";
import MoodDetailsModal from "components/MoodDetailsModal/MoodDetailsModal";

function MoodList() {
  const [moodlist, setMoodlist] = useState([]);
  const [moodModal, setMoodModal] = useState(false);

  const getMoodList = async () => {
    const response = await MoodService.getAllMoods();
    // const responseArray = Array.from(response);
    // console.log(response); // 🐞
    setMoodlist(response);
  };

  useEffect(() => {
    getMoodList();
  }, []);

  // const moodlistArray = JSON.parse(moodlist);

  // console.log(moodlistArray); // 🐞

  const getMoodById = async (moodId) => {
    const response = await MoodService.moodById(moodId);
    setMoodModal(response);
  };

  return (
    <>
      <section id="moodlist">
        <div id="moodlist-title">moods/ ALL</div>
        {moodlist.map((mood, index) => (
          <MoodListItem
            key={`moodlistItem-${index}`}
            id={mood._id}
            type={mood.type}
            text={mood.text}
            dateTime={mood?.dateTime}
            //clickItem={() => getMoodById(mood._id)}
            clickItem={(moodId) => getMoodById(moodId)}
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
