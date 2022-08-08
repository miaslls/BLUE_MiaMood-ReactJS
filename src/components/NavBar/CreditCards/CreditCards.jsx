import "./CreditCards.css";
import arrow from "./arrow-finances.svg";

function CreditCards() {
  return (
    <>
      <section className="element inactive-element" id="creditcards-element">
        {/* <div className="animate-element"> */}
        <div className="creditcard-container" id="creditcard-back-container">
          <div id="creditcard-back-stripe"></div>
        </div>
        <div className="creditcard-container" id="creditcard-front-container">
          <div id="creditcatd-chip-container">
            <div className="creditcard-chip-part" id="chip-part-a1"></div>
            <div className="creditcard-chip-part" id="chip-part-a2"></div>
            <div className="creditcard-chip-part" id="chip-part-b1"></div>
            <div className="creditcard-chip-part" id="chip-part-b2"></div>
          </div>
          <div id="creditcard-details">
            <div id="creditcard-numbers-container">
              <div className="creditcatd-number-block"></div>
              <div className="creditcatd-number-block"></div>
              <div className="creditcatd-number-block"></div>
              <div className="creditcatd-number-block"></div>
            </div>
            <div id="creditcard-name-container"></div>
          </div>
          {/* </div> */}
        </div>
      </section>

      <section
        className="element-label inactive-element"
        id="creditcards-element-label"
      >
        <img
          src={arrow}
          alt="arrow"
          className="label-arrow"
          id="creditcards-element-label-arrow"
        />
        <div className="element-label-text" id="creditcards-element-label-text">
          <h2>finances</h2>
        </div>
      </section>
    </>
  );
}

export default CreditCards;
