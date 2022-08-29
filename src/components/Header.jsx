import 'assets/CSS/Header.css';
import { getDateToday } from 'util/getDateTimeNow';

import closeIcon from 'assets/ICON/icon-close.svg';

// 📌📌📌 function HEADER

function Header({
  getMoodList,
  setSelectedMoodList,
  openCreateForm,
  showSearch,
  setShowSearch,
  setSearchDate,
  closeForm,
}) {
  // ----- 📌📌 handleSearch

  const handleSearch = (date) => {
    setSelectedMoodList('date');

    setSearchDate(date);
    const [year, month, day] = date.split('-');

    getMoodList(year, month, day);
  };

  // 📌📌 HEADER RETURN

  return (
    <header>
      <div id="page-title">
        Mia<span>Mood</span>
      </div>

      <nav>
        {/* ----- 📌 SEARCH */}

        {showSearch && (
          <div id="search-date-container">
            <input
              id="search-date-input"
              type="date"
              defaultValue={getDateToday()}
              onChange={(e) => {
                setSelectedMoodList('date');
                handleSearch(e.target.value);
              }}
            />

            <div
              className="clickable"
              id="close-search-button"
              onClick={() => setShowSearch(false)}
            >
              <img src={closeIcon} alt="" />
            </div>
          </div>
        )}

        {/* ----- 📌 icon HOME */}

        <div
          className="nav-icon clickable"
          id="nav-icon-home"
          onClick={() => {
            closeForm();
            setShowSearch(false);
            setSelectedMoodList('today');
          }}
        >
          2
        </div>

        {/* ----- 📌 icon ALL */}

        <div
          className="nav-icon clickable"
          id="nav-icon-all"
          onClick={() => {
            closeForm();
            setShowSearch(false);
            setSelectedMoodList('all');
          }}
        >
          F
        </div>

        {/* ----- 📌 icon SEARCH */}

        <div
          className="nav-icon clickable"
          id="nav-icon-search"
          onClick={() => {
            closeForm();
            setSelectedMoodList('date');
            setShowSearch(true);
            setSearchDate(getDateToday());
          }}
        >
          D
        </div>

        {/* ----- 📌 icon ADD */}

        <div
          className="nav-icon clickable"
          id="nav-icon-add"
          onClick={() => {
            setShowSearch(false);
            setSelectedMoodList('today');
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
