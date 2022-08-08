import "./Journal.css";
import arrow from "./arrow-journal.svg";

function Journal() {
  return (
    <>
      <section className="element active-element" id="journal-element">
        <div className="animate-element">
          <div id="journal-container">
            <div id="journal-body"></div>
            <div id="journal-label">JOURNAL</div>
            <div id="journal-band"></div>
          </div>
          <div id="pencil-container">
            <div className="pencil-tip" id="tip-wood"></div>
            <div className="pencil-tip" id="tip-lead"></div>
            <div id="pencil-body"></div>
            <div className="pencil-metal-part"></div>
            <div className="pencil-metal-part"></div>
            <div className="pencil-metal-part"></div>
            <div id="pencil-eraser"></div>
          </div>
        </div>
      </section>

      <section className="element-label" id="journal-element-label">
        <img
          src={arrow}
          alt="arrow"
          className="label-arrow"
          id="journal-element-label-arrow"
        />
        <div className="element-label-text" id="journal-element-label-text">
          <h2>JOURNAL</h2>
        </div>
      </section>
    </>
  );
}

export default Journal;
