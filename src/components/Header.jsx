import 'assets/CSS/Header.css';

function Header({ setSelectedMoodList, openCreateForm }) {
  return (
    <header>
      <div id="page-title">
        Mia<span>Mood</span>
      </div>

      <nav>
        <div
          className="nav-icon clickable"
          id="nav-icon-home"
          onClick={() => setSelectedMoodList('today')}
        >
          2
        </div>

        <div
          className="nav-icon clickable"
          id="nav-icon-all"
          onClick={() => setSelectedMoodList('all')}
        >
          F
        </div>

        {/* <div
          className="nav-icon clickable"
          id="nav-icon-calendar"
          onClick={() => setSelectedMoodList('today')}
        >
          (
        </div>

        <div className="nav-icon clickable" id="nav-icon-search">
          D
        </div> */}

        <div
          className="nav-icon clickable"
          id="nav-icon-add"
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
