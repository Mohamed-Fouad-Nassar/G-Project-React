import Logo from "../Logo/Logo";

import styles from "./mobileNavTopSec.module.scss";

function MobileNavTopSec({ onClick }) {
  return (
    <div className={styles["top-sec"]}>
      <div className={styles["close-btn"]} onClick={onClick}>
        <i className={`${styles["f-icon"]} fa-solid fa-xmark`} />
      </div>
      <Logo href="/" />
    </div>
  );
}

export default MobileNavTopSec;
