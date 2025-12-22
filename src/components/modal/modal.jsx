import { createPortal } from "react-dom";

export const Modal = ({ children, onClose }) => {
    
  return createPortal(
    <div>
      <button onClick={onClose}>close</button>
      {children}
    </div>,
    document.getElementById("modal")
  );
};
