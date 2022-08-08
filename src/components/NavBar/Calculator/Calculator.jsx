import "./Calculator.css";
import arrow from "./arrow-calculator.svg";

function Calculator() {
  return (
    <>
      <section className="element inactive-element" id="calculator-element">
        {/* <div className="animate-element"> */}
        <div id="calculator-container">
          <div id="calculator-solar-container">
            <div className="calculator-solar-part"></div>
            <div className="calculator-solar-part"></div>
            <div className="calculator-solar-part"></div>
            <div className="calculator-solar-part"></div>
            <div className="calculator-solar-part"></div>
            <div className="calculator-solar-part"></div>
            <div className="calculator-solar-part"></div>
            <div className="calculator-solar-part"></div>
          </div>

          <div id="calculator-display">
            <div id="calculator-display-text">1 + 2 = 4</div>
          </div>

          <div id="calculator-button-container">
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>
            <div className="calculator-button-small"></div>

            <div id="calculator-button-large"></div>
          </div>
          {/* </div> */}
        </div>
      </section>

      <section
        className="element-label inactive-element"
        id="calculator-element-label"
      >
        <img
          src={arrow}
          alt="arrow"
          className="label-arrow"
          id="calculator-element-label-arrow"
        />

        <div className="element-label-text" id="calculator-element-label-text">
          <h2>calculator</h2>
        </div>
      </section>
    </>
  );
}

export default Calculator;
