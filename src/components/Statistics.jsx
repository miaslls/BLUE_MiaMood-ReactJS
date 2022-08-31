import 'assets/CSS/Statistics.css';

import { useState, useEffect } from 'react';
import { MoodService } from 'services/MoodService';
import { getDateToday, getTimeNow } from 'util/getDateTimeNow';

import markerStroke from 'assets/IMG/marker-stroke.svg';
import arrow from 'assets/IMG/statistics-arrow.svg';

// ----- 📌📌📌🚨 component COUNTER

function MoodTypeCounter({
  moodCount,
  icon,
  index,
  getMoodList,
  selectedMoodList,
  setSelectedNavIcon,
  setSearchDate,
  setShowSearch,
}) {
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
      setShowSearch(false);
      setSearchDate();
      selectedMoodList === 'date' ? setSelectedNavIcon('home') : setSelectedNavIcon('list');
      getMoodList();
    }
  };

  // ----- 📌📌🚨 COUNTER RETURN

  return (
    <div className="statistics-mood">
      <div className="statistics-mood-icon clickable" onClick={() => quickAdd(index + 1)}>
        {icon}
      </div>
      {moodCount[index].count > 0 && (
        <div className="statistics-mood-counter">{moodCount[index].count}</div>
      )}
    </div>
  );
}

// ----- 📌📌📌🚨 component STATISTICS

function Statistics({
  moodIcons,
  moodList,
  getMoodList,
  selectedMoodList,
  setSelectedNavIcon,
  setSearchDate,
  setShowSearch,
}) {
  const initialCount = [
    { countType: 1, count: 0 },
    { countType: 2, count: 0 },
    { countType: 3, count: 0 },
    { countType: 4, count: 0 },
    { countType: 5, count: 0 },
    { countType: 6, count: 0 },
  ];

  const [moodCount, setMoodCount] = useState(initialCount);

  // ----- 📌 count

  const countMoodsByType = (list) => {
    const count = [...initialCount];

    count.forEach((type) => {
      type.count = list.filter((mood) => {
        if (mood.type === type.countType) {
          return true;
        }
        return false;
      }).length;
    });

    // ----- 📌 average

    let countSum = 0;

    count.forEach((type) => {
      if (type.countType <= 5) {
        countSum += type.count * type.countType;
      }
    });

    let countAverage = countSum / list.length;

    // add ❤
    countAverage += count[5].count * 0.1;

    countAverage > 5 ? (countAverage = 5) : (countAverage = Math.round(countAverage));

    //     // ----- 📌 set

    count.total = list.length;
    count.average = countAverage;

    setMoodCount(count);
  };

  // ----- 📌 update

  useEffect(() => {
    countMoodsByType(moodList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moodList]);

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
              selectedMoodList={selectedMoodList}
              setSelectedNavIcon={setSelectedNavIcon}
              setSearchDate={setSearchDate}
              setShowSearch={setShowSearch}
            />
          ))}
        </div>

        {/* ----- 📌 tip */}

        <div id="statistics-tip-container">
          <div id="statistics-tip-arrow">
            <img src={arrow} alt="" />
          </div>
          <div id="statistics-tip-text">click mood to quick add</div>
        </div>
      </section>
    </>
  );
}

export default Statistics;
