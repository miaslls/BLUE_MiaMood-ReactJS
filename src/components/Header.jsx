import 'assets/CSS/Header.css';

import { useState } from 'react';

import calendar from 'assets/ICON/nav-icon-calendar.svg';
import add from 'assets/ICON/nav-icon-add.svg';
import list from 'assets/ICON/nav-icon-list.svg';
import home from 'assets/ICON/nav-icon-home.svg';

// 📌📌📌 function HEADER

function Header({ setSelectedMoodList }) {
  const [selectedNavIcon, setSelectedNavIcon] = useState();

  // 📌📌 HEADER RETURN
  return (
    <header>
      <div id="page-title">
        Mia<span>Mood</span>
      </div>

      <nav>
        <div id="nav-icon-container">
          {/* ----- 📌 icon HOME */}

          <div
            className={`nav-icon clickable ${selectedNavIcon === 'home' && 'nav-icon-selected'}`}
            id="nav-icon-home"
            onClick={() => {
              setSelectedNavIcon('home');
              setSelectedMoodList('date');
            }}
          >
            <img src={home} alt="" />
          </div>

          {/* ----- 📌 icon SEARCH */}

          <div
            className={`nav-icon clickable ${selectedNavIcon === 'search' && 'nav-icon-selected'}`}
            id="nav-icon-search"
            onClick={() => {
              setSelectedNavIcon('search');
              setSelectedMoodList('date');
            }}
          >
            <img src={calendar} alt="" />
          </div>

          {/* ----- 📌 icon LIST */}

          <div
            className={`nav-icon clickable ${selectedNavIcon === 'list' && 'nav-icon-selected'}`}
            id="nav-icon-all"
            onClick={() => {
              setSelectedNavIcon('list');
              setSelectedMoodList('all');
            }}
          >
            <img src={list} alt="" />
          </div>

          {/* ----- 📌 icon ADD */}

          <div
            className={`nav-icon clickable ${selectedNavIcon === 'add' && 'nav-icon-selected'}`}
            id="nav-icon-add"
            onClick={() => {
              setSelectedNavIcon('add');
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
