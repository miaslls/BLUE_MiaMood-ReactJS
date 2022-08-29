import 'assets/CSS/Header.css';
import { getDateToday } from 'util/getDateTimeNow';

import closeIcon from 'assets/ICON/icon-close.svg';

import calendar from 'assets/ICON/nav-icon-calendar.svg';
import add from 'assets/ICON/nav-icon-add.svg';
import list from 'assets/ICON/nav-icon-list.svg';
import home from 'assets/ICON/nav-icon-home.svg';

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

            {/* ----- 📌 close search */}

            <div
              className="clickable"
              id="close-search-button"
              onClick={() => {
                setShowSearch(false);
                setSelectedMoodList('today');
              }}
            >
              <img src={closeIcon} alt="" />
            </div>
          </div>
        )}

        <div id="nav-icon-container">
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
            <img src={home} alt="" />
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
            <img src={calendar} alt="" />
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
            <img src={list} alt="" />
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
            <img src={add} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
