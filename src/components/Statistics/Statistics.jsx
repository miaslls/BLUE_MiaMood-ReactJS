import "./Statistics.css";
import arrowTip from "./arrow-tip.svg";

function Statistics() {
  return (
    <section id="statistics">
      <div id="statistics-title-container">
        <div id="statistics-date">August 08, 2022</div>
        <div id="statistics-icon">"</div>
      </div>
      <div id="statistics-moods-container">
        <div className="statistics-mood" id="mood-1">
          <div className="statistics-mood-icon clickable" id="mood-1-icon">
            &#60;
          </div>
          <div className="statistics-mood-counter" id="mood-1-counter">
            0
          </div>
        </div>

        <div className="statistics-mood" id="mood-2">
          <div className="statistics-mood-icon clickable" id="mood-2-icon">
            *
          </div>
          <div className="statistics-mood-counter" id="mood-2-counter">
            0
          </div>
        </div>

        <div className="statistics-mood" id="mood-3">
          <div className="statistics-mood-icon clickable" id="mood-3-icon">
            2
          </div>
          <div className="statistics-mood-counter" id="mood-3-counter">
            2
          </div>
        </div>

        <div className="statistics-mood" id="mood-4">
          <div className="statistics-mood-icon clickable" id="mood-4-icon">
            .
          </div>
          <div className="statistics-mood-counter" id="mood-4-counter">
            0
          </div>
        </div>

        <div className="statistics-mood" id="mood-5">
          <div className="statistics-mood-icon clickable" id="mood-5-icon">
            "
          </div>
          <div className="statistics-mood-counter" id="mood-5-counter">
            10
          </div>
        </div>

        <div className="statistics-mood" id="mood-6">
          <div className="statistics-mood-icon clickable" id="mood-6-icon">
            A
          </div>
          <div className="statistics-mood-counter" id="mood-6-counter">
            3
          </div>
        </div>
      </div>
      <div id="statistics-tip-container">
        <div id="tip-arrow">
          <img src={arrowTip} />
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
