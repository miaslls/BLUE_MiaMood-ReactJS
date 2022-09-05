import 'assets/CSS/Header.css';

import { useState } from 'react';
import { getDateToday, getTimeNow } from 'util/getDateTimeNow';

import Modal from 'components/Modal';
import CreateMoodForm from 'components/MoodForm';

import closeIcon from 'assets/ICON/icon-close.svg';
import calendar from 'assets/ICON/nav-icon-calendar.svg';
import add from 'assets/ICON/nav-icon-add.svg';
import list from 'assets/ICON/nav-icon-list.svg';
import home from 'assets/ICON/nav-icon-home.svg';

// 📌📌📌🚨 component HEADER

function Header({
  moodIcons,
  setMoodList,
  getMoodList,
  moodListStates,
  setMoodListStates,
  headerStates,
  setHeaderStates,
}) {
  // ----- 📌📌 SEARCH

  const handleSearch = (date) => {
    setHeaderStates({ ...headerStates, searchDate: date });

    const moodsByDate = moodListStates.all.filter((mood) => mood.date === date);

    setMoodList(moodsByDate);
  };

  // ----- 📌📌 FORM

  const emptyForm = {
    _id: undefined,
    type: undefined,
    text: undefined,
    date: getDateToday(),
    time: getTimeNow(),
    activeMood: {},
  };

  const [createFormState, setCreateFormState] = useState(emptyForm);

  // ----- 📌📌 MODAL

  const [showCreateModal, setShowCreateModal] = useState(false);

  const closeCreateModal = () => {
    let selectedIcon;

    moodListStates.selected === 'date' ? (selectedIcon = 'home') : (selectedIcon = 'list');

    setHeaderStates({ selectedIcon: selectedIcon, showSearch: false, searchDate: undefined });

    setShowCreateModal(false);
    setCreateFormState(emptyForm);
  };

  // 📌📌🚨 HEADER RETURN
  return (
    <header>
      <div id="page-title">
        Mia<span>Mood</span>
      </div>

      <nav>
        {/* ----- 📌📌 SEARCH */}

        {headerStates.showSearch && (
          <div id="search-date-container">
            <input
              id="search-date-input"
              type="date"
              defaultValue={getDateToday()}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />

            {/* ----- 📌 close search */}

            <div
              className="clickable"
              id="close-search-button"
              onClick={() => {
                setHeaderStates({ showSearch: false, searchDate: undefined, selectedIcon: 'home' });
                setMoodList(moodListStates.today);
              }}
            >
              <img src={closeIcon} alt="close" />
            </div>
          </div>
        )}

        {/* ----- 📌 MODAL / FORM */}

        {showCreateModal && (
          <Modal closeModal={closeCreateModal}>
            <CreateMoodForm
              moodIcons={moodIcons}
              emptyForm={emptyForm}
              formState={createFormState}
              setFormState={setCreateFormState}
              getMoodlist={getMoodList}
              closeModal={closeCreateModal}
            />
          </Modal>
        )}

        {/* ----- 📌📌 NAV ICONS */}

        <div id="nav-icon-container">
          {/* ----- 📌 icon HOME */}

          <div
            className={`nav-icon clickable ${
              headerStates.selectedIcon === 'home' && 'nav-icon-selected'
            }`}
            id="nav-icon-home"
            onClick={() => {
              setMoodListStates({ ...moodListStates, selected: 'date' });
              setHeaderStates({ selectedIcon: 'home', showSearch: false, searchDate: undefined });
            }}
          >
            <img src={home} alt="" />
          </div>

          {/* ----- 📌 icon SEARCH */}

          <div
            className={`nav-icon clickable ${
              headerStates.selectedIcon === 'search' && 'nav-icon-selected'
            }`}
            id="nav-icon-search"
            onClick={() => {
              setMoodListStates({ ...moodListStates, selected: 'date' });
              setHeaderStates({ selectedIcon: 'search', showSearch: true, searchDate: undefined });
            }}
          >
            <img src={calendar} alt="" />
          </div>

          {/* ----- 📌 icon LIST */}

          <div
            className={`nav-icon clickable ${
              headerStates.selectedIcon === 'list' && 'nav-icon-selected'
            }`}
            id="nav-icon-all"
            onClick={() => {
              setMoodListStates({ ...moodListStates, selected: 'all' });
              setHeaderStates({ selectedIcon: 'list', showSearch: false, searchDate: undefined });
            }}
          >
            <img src={list} alt="" />
          </div>

          {/* ----- 📌 icon ADD */}

          <div
            className={`nav-icon clickable ${
              headerStates.selectedIcon === 'add' && 'nav-icon-selected'
            }`}
            id="nav-icon-add"
            onClick={() => {
              setHeaderStates({ selectedIcon: 'add', showSearch: false, searchDate: undefined });
              setShowCreateModal(true);
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
