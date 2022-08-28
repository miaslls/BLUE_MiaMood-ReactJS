import "assets/CSS/Header.css";

function Header({ openCreateForm }) {
  return (
    <header>
      <div id="page-title">
        Mia<span>Mood</span>
      </div>

      <nav>
        <div
          className="nav-icon clickable"
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
