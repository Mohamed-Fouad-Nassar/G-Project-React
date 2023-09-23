import { useNavigate } from "react-router-dom";

import styles from "./backBtn.module.scss";

function BackBtn() {
  const navigate = useNavigate();

  return (
    <button
      className={styles["back-btn"]}
      onClick={() => {
        navigate(-1);
      }}
    >
      <i className={`${styles["f-icon"]} fa-solid fa-arrow-left`} />
    </button>
  );
}

export default BackBtn;
