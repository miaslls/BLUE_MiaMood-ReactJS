import "./Header.css";

function Header() {
  return (
    <header>
      <div id="page-title">
        Mia<span>Mood</span>
      </div>
      <nav>
        <div className="nav-icon">F</div>
        <div className="nav-icon">D</div>
        <div className="nav-icon">(</div>
        <div className="nav-icon">¯</div>
        <div className="nav-icon">2</div>
      </nav>
    </header>
  );
}

export default Header;
