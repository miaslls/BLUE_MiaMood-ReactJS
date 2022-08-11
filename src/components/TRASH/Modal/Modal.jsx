import "./Modal.css";
import Overlay from "components/TRASH/Overlay/Overlay";

import closeIcon from "./close-icon.svg";

function Modal({ children, closeModal }) {
  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) closeModal();
  };

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
