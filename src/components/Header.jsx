import 'assets/CSS/Header.css';

function Header({ openCreateForm }) {
  return (
    <header>
      <div id="page-title">
        Mia<span>Mood</span>
      </div>

      <nav>
        <div className="nav-icon clickable" id="nav-icon-home">
          2
        </div>
        <div className="nav-icon clickable" id="nav-icon-list">
          F
        </div>
        <div className="nav-icon clickable" id="nav-icon-calendar">
          (
        </div>
        <div className="nav-icon clickable" id="nav-icon-search">
          D
        </div>

        <div
          className="nav-icon clickable"
          id="nav-icon-"
          onClick={() => {
            openCreateForm();
          }}
        >
          ¯
        </div>
      </nav>
    </header>
  );
}

export default Header;
