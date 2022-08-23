import { useState, useEffect } from "react";
import { MoodService } from "services/MoodService";
import { getDateToday, getTimeNow } from "util/getDateTimeNow";

import markerStroke from "assets/IMG/marker-stroke.svg";
import arrow from "assets/IMG/statistics-arrow.svg";

// ----- 📌📌📌🚨 function COUNTER

function MoodTypeCounter({ moodCount, icon, index, getMoodList }) {
  // ----- 📌 quickAdd

  const quickAdd = async (moodType) => {
    const moodBody = {
      type: moodType,
      text: "",
      date: getDateToday(),
      time: getTimeNow(),
    };

    const response = await MoodService.createMood(moodBody);

    if (response.mood) {
      getMoodList();
    }
  };

  // ----- 📌📌🚨 COUNTER RETURN

  return (
    <div className="statistics-mood">
      <div
        className="statistics-mood-icon clickable"
        onClick={() => quickAdd(index + 1)}
      >
        {icon}
      </div>
      <div className="statistics-mood-counter">{moodCount[index + 1]}</div>
    </div>
  );
}

// ----- 📌📌📌🚨 function STATISTICS

function Statistics({ moodIcons, list, getMoodList }) {
  const [moodCount, setMoodCount] = useState({});

  // 🚨 this 🔻 is CRAP and should be refactored

  const countMoodsByType = (list) => {
    const count1 = list.filter((mood) => {
      if (mood.type === 1) {
        return true;
      }
      return false;
    }).length;

    const count2 = list.filter((mood) => {
      if (mood.type === 2) {
        return true;
      }
      return false;
    }).length;

    const count3 = list.filter((mood) => {
      if (mood.type === 3) {
        return true;
      }
      return false;
    }).length;

    const count4 = list.filter((mood) => {
      if (mood.type === 4) {
        return true;
      }
      return false;
    }).length;

    const count5 = list.filter((mood) => {
      if (mood.type === 5) {
        return true;
      }
      return false;
    }).length;

    const count6 = list.filter((mood) => {
      if (mood.type === 6) {
        return true;
      }
      return false;
    }).length;

    setMoodCount({
      1: count1,
      2: count2,
      3: count3,
      4: count4,
      5: count5,
      6: count6,
      total: list.length,
    });
  };

  useEffect(() => {
    countMoodsByType(list);
  }, [list]);

  // 📌📌🚨 STATISTICS RETURN

  return (
    <>
      <section id="statistics">
        <h2 className="section-title">Statistics</h2>
        <div className="section-title-underline">
          <img src={markerStroke} alt="" />
        </div>

        <div id="statistics-moods-container">
          {moodIcons.map((icon, index) => (
            <MoodTypeCounter
              key={`statistics-mood-type-${index + 1}`}
              moodCount={moodCount}
              icon={icon}
              index={index}
              getMoodList={getMoodList}
            />
          ))}
        </div>

        <div id="statistics-tip-container">
          <div id="statistics-tip-arrow">
            <img src={arrow} alt="" />
          </div>
          <div id="statistics-tip-text">click icon to quick add</div>
        </div>
      </section>
    </>
  );
}

export default Statistics;
