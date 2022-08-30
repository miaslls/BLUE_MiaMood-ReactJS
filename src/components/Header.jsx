import 'assets/CSS/Header.css';

import { useState } from 'react';
import { MoodService } from 'services/MoodService';
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
  selectedMoodList,
  setSelectedMoodList,
  setMoodListLoading,
  showSearch,
  setShowSearch,
  setSearchDate,
}) {
  const [selectedNavIcon, setSelectedNavIcon] = useState('home');

  // ----- 📌📌 SEARCH

  const handleSearch = async (date) => {
    setMoodListLoading(true);

    setSearchDate(date);
    const [year, month, day] = date.split('-');

    const response = await MoodService.getMoodsByDate(year, month, day);

    setMoodList(response.moods);
    setMoodListLoading(false);
  };

  // ----- 📌📌 FORM

  const emptyForm = {
    _id: undefined,
    type: undefined,
    text: undefined,
    date: getDateToday(),
    time: getTimeNow(),
  };

  const [createFormState, setCreateFormState] = useState(emptyForm);
  const [activeCreateMood, setActiveCreateMood] = useState({});

  // ----- 📌📌 MODAL

  const [showCreateModal, setShowCreateModal] = useState(false);

  const closeCreateModal = () => {
    setShowCreateModal(false);
    selectedMoodList === 'date' ? setSelectedNavIcon('home') : setSelectedNavIcon('list');
    setCreateFormState(emptyForm);
    setActiveCreateMood({});
  };

  // 📌📌🚨 HEADER RETURN
  return (
    <header>
      <div id="page-title">
        Mia<span>Mood</span>
      </div>

      <nav>
        {/* ----- 📌📌 SEARCH */}

        {showSearch && (
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
                setShowSearch(false);
                setSearchDate();
                setSelectedNavIcon('home');
                getMoodList();
              }}
            >
              <img src={closeIcon} alt="" />
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
              activeMood={activeCreateMood}
              setActiveMood={setActiveCreateMood}
              getMoodlist={getMoodList}
              closeModal={closeCreateModal}
            />
          </Modal>
        )}

        {/* ----- 📌📌 NAV ICONS */}

        <div id="nav-icon-container">
          {/* ----- 📌 icon HOME */}

          <div
            className={`nav-icon clickable ${selectedNavIcon === 'home' && 'nav-icon-selected'}`}
            id="nav-icon-home"
            onClick={() => {
              setSelectedNavIcon('home');
              setSelectedMoodList('date');
              setShowSearch(false);
              setSearchDate();
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
              setShowSearch(true);
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
              setShowSearch(false);
              setSearchDate();
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
              setShowSearch(false);
              setSearchDate();
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
