import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";

import CancelBtn from "./cancelBtn";

import styles from "./doctorModal.module.scss";

function DoctorModal({ children, backUrl, title }) {
  const navigate = useNavigate();
  const popUpRef = useRef();

  useOnClickOutside(popUpRef, () => {
    navigate(backUrl);
  });

  return (
    <div className={`${styles.modal} ${styles.active}`}>
      <div className={styles.overlay} />
      <div className={styles.data} ref={popUpRef}>
        <div className={styles["top-sec"]}>
          <CancelBtn url={backUrl} />
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

export default DoctorModal;
