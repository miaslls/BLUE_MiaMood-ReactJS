import "./Statistics.css";
import arrowTip from "./arrow-tip.svg";

function MoodTypeCounter({ icon, index }) {
  return (
    <div className="statistics-mood">
      <div
        className="statistics-mood-icon clickable"
        //   onClick={() => addOne(index)}
      >
        {icon}
      </div>
      <div className="statistics-mood-counter"> {/* {moodCount[index]} */}</div>
    </div>
  );
}

//   const [moodCount, setMoodCount] = useState({});

//   const addOne = (index) => {
//     const mood = { [index]: Number(selectedMoodType[index] || 0) + 1 };
//     setSelectedMoodType({ ...selectedMoodType, ...mood });
//   };

function Statistics() {
  const moodIconList = ["<", "*", "2", ".", '"', "A"];

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
