import "./MoodList.css";

function MoodList() {
  return (
    <section id="moodlist">
      <div id="moodlist-title">moods/ TODAY</div>

      <div className="moodlist-item">
        <div className="mood-icon">*</div>
        <div className="mood-text-container">
          <div className="mood-title">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </div>
          <div className="mood-date-time">08/08/22 @ 09:51 pm</div>
        </div>
      </div>

      <div className="moodlist-item">
        <div className="mood-icon">"</div>
        <div className="mood-text-container">
          <div className="mood-title"></div>
          <div className="mood-date-time">08/08/22 @ 09:51 pm</div>
        </div>
      </div>
    </section>
  );
}

export default MoodList;
