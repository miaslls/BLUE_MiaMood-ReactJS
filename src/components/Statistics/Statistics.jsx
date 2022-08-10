import { useState } from "react";

import "./Statistics.css";
import arrowTip from "./arrow-tip.svg";

function MoodTypeCounter({ icon, index, moodCount, onAdd }) {
  return (
    <div className="statistics-mood">
      <div
        className="statistics-mood-icon clickable"
        onClick={() => onAdd(index)}
      >
        {icon}
      </div>
      <div className="statistics-mood-counter">{moodCount}</div>
    </div>
  );
}

// 🚨🚨🚨 TODO: add UNDER COSTRUCTION
// 🚨🚨🚨 TODO: getAllMoods - countMoods

function Statistics() {
  const moodIconList = ["<", "*", "2", ".", '"', "A"];

  const [moodCount, setMoodCount] = useState({});

  const addOne = (index) => {
    const mood = { [index]: Number(moodCount[index] || 0) + 1 };
    setMoodCount({ ...moodCount, ...mood });
  };

  return (
    <section id="statistics">
      <div id="statistics-title-container">
        <div id="statistics-date">August 08, 2022</div>
        <div id="statistics-icon">"</div>
      </div>
      <div id="statistics-moods-container">
        {moodIconList.map((icon, index) => (
          <MoodTypeCounter
            key={`moodIcon-${index}`}
            icon={icon}
            index={index}
            moodCount={moodCount[index]}
            onAdd={(index) => addOne(index)}
          />
        ))}
      </div>
      <div id="statistics-tip-container">
        <div id="tip-arrow">
          <img src={arrowTip} alt="" />
        </div>
        <div id="tip-text">
          click to
          <br />
          quick add
        </div>
      </div>
    </section>
  );
}

export default Statistics;
