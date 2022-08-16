import "./Header.css";

// 🚨 TODO: add LINK TO HOME + fix HOME

function Header({ createMood }) {
  return (
    <header>
      <div id="page-title">
        Mia<span>Mood</span>
      </div>

      <nav>
        <div className="nav-icon clickable">2</div>

        <div className="nav-icon clickable">F</div>

        {/* <div className="nav-icon">D</div>
        <div className="nav-icon">(</div> */}

        <div className="nav-icon clickable" onClick={() => createMood()}>
          ¯
        </div>
      </nav>
    </header>
  );
}

export default Header;
