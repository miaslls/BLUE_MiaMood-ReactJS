import 'assets/CSS/Statistics.css';

import { useState, useEffect } from 'react';
import { MoodService } from 'services/MoodService';
import { getDateToday, getTimeNow } from 'util/getDateTimeNow';

import markerStroke from 'assets/IMG/marker-stroke.svg';
import arrow from 'assets/IMG/statistics-arrow.svg';

// ----- 📌📌📌🚨 function COUNTER

function MoodTypeCounter({ moodCount, icon, index, getMoodList }) {
  // ----- 📌 quickAdd

  const quickAdd = async (moodType) => {
    const moodBody = {
      type: moodType,
      text: '',
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
      <div className="statistics-mood-icon clickable" onClick={() => quickAdd(index + 1)}>
        {icon}
      </div>
      {moodCount[index + 1] > 0 && (
        <div className="statistics-mood-counter">{moodCount[index + 1]}</div>
      )}
    </div>
  );
}

// ----- 📌📌📌🚨 function STATISTICS

function Statistics({ moodIcons, list, getMoodList }) {
  const [moodCount, setMoodCount] = useState({});

  // ----- 📌 count
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

    // ----- 📌 average

    const moodSum = count1 * 1 + count2 * 2 + count3 * 3 + count4 * 4 + count5 * 5;

    let moodAverage = moodSum / list.length;

    // add ❤
    moodAverage += count6 * 0.1;

    moodAverage > 5 ? (moodAverage = 5) : (moodAverage = Math.round(moodAverage));

    // ----- 📌 set

    setMoodCount({
      1: count1,
      2: count2,
      3: count3,
      4: count4,
      5: count5,
      6: count6,
      total: list.length,
      average: moodAverage,
    });
  };

  // ----- 📌 update

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

        {/* ----- 📌 text */}

        {moodCount.total > 0 && (
          <div id="statistics-text-container">
            <div id="statistics-text-total">
              TOTAL MOODS: [ <b>{moodCount.total}</b> ]
            </div>
            {moodCount.average > 0 && (
              <div id="statistics-text-average">
                MOOD AVERAGE:{' '}
                <span id="statistics-average-icon">{moodIcons[moodCount.average - 1]}</span>
              </div>
            )}
          </div>
        )}

        {/* ----- 📌 moods + counter */}

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

        {/* ----- 📌 tip */}

        <div id="statistics-tip-container">
          <div id="statistics-tip-arrow">
            <img src={arrow} alt="" />
          </div>
          <div id="statistics-tip-text">quick add</div>
        </div>
      </section>
    </>
  );
}

export default Statistics;
