import { useRef } from "react";
import styles from "./topButton.module.scss";

function TopButton() {
  const TopButtonRef = useRef();

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  window.onscroll = () => {
    if (window.pageYOffset >= 700) {
      TopButtonRef.current.style.scale = "1";
    } else {
      TopButtonRef.current.style.scale = "0";
    }
  };

  return (
    <div className={styles.top} onClick={ScrollToTop} ref={TopButtonRef}>
      <a>
        <i className={`${styles["f-icon"]} fa-solid fa-angle-up`} />
      </a>
    </div>
  );
}

export default TopButton;
