import "./Letter.css";
import arrow from "./arrow-about.svg";

function Letter() {
  return (
    <>
      <section className="element inactive-element" id="letter-element">
        {/* <div className="animate-element"> */}
        <div id="letter-container">
          <div id="letter-logo">
            <i className="ri-emotion-2-line"></i>
          </div>
          <h1>
            <div id="letter-title">
              Mia<span>Logs</span>
            </div>
          </h1>
        </div>
        <div id="envelope-container">
          <div id="envelope-flap"></div>
          <div id="envelope-label"></div>
          {/* </div> */}
        </div>
      </section>

      <section
        className="element-label inactive-element"
        id="letter-element-label"
      >
        <img
          src={arrow}
          alt="arrow"
          className="label-arrow"
          id="letter-element-label-arrow"
        />
        <div className="element-label-text" id="letter-element-label-text">
          <h2>ABOUT</h2>
          <ul>
            <li>
              Mia<span>Logs</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Letter;
