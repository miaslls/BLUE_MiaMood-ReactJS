import "./Planner.css";
import arrow from "./arrow-planner.svg";

function Planner() {
  return (
    <>
      <section className="element inactive-element" id="planner-element">
        {/* <div className="animate-element"> */}
        <div id="planner-outer-container">
          <div id="planner-inner-container">
            <div id="planner-paper-container">
              <div id="planner-title">PLANNER</div>
              <div id="paper-divider"></div>
              <div className="paper-rings-container" id="rings-container-left">
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
              </div>
              <div className="paper-rings-container" id="rings-container-right">
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
                <div className="paper-ring"></div>
              </div>
              <div id="paper-bindings-container">
                <div className="paper-binding"></div>
                <div className="paper-binding"></div>
                <div className="paper-binding"></div>
                <div className="paper-binding"></div>
                <div className="paper-binding"></div>
                <div className="paper-binding"></div>
                <div className="paper-binding"></div>
                <div className="paper-binding"></div>
                <div className="paper-binding"></div>
                <div className="paper-binding"></div>
              </div>
              <div id="paper-bookmark-container">
                <div id="bookmark-body"></div>
                <div id="bookmark-flag-container">
                  <div id="bookmark-flag-left"></div>
                  <div id="bookmark-flag-right"></div>
                </div>
              </div>
              <div id="paper-tabs-container">
                <div className="paper-tab" id="pink-tab"></div>
                <div className="paper-tab" id="yellow-tab"></div>
                <div className="paper-tab" id="blue-tab"></div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section
        className="element-label inactive-element"
        id="planner-element-label"
      >
        <img
          src={arrow}
          alt="arrow"
          className="label-arrow"
          id="planner-element-label-arrow"
        />
        <div className="element-label-text" id="planner-element-label-text">
          <h2>PLANNER</h2>
        </div>
      </section>
    </>
  );
}

export default Planner;
