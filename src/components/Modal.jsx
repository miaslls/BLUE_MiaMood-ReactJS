import 'assets/CSS/Modal.css';

import Overlay from 'components/Overlay';

import closeIcon from 'assets/ICON/icon-close.svg';

// 📌📌📌🚨 function MODAL

function Modal({ children, closeModal }) {
  // ----- 📌 handleClick

  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) closeModal();
  };

  // 📌📌🚨 MODAL RETURN

  return (
    <Overlay overlayClick={closeModal}>
      <div className="modal-container" onClick={handleClick}>
        <div className="modal-close-icon" onClick={(e) => handleClick(e, true)}>
          <img src={closeIcon} alt="close" />
        </div>

        <div className="modal-content">{children}</div>
      </div>
    </Overlay>
  );
}

export default Modal;
