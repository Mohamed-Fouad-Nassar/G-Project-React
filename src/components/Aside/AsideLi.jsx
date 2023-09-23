import { Link } from "react-router-dom";

import styles from "./asideLi.module.scss";

function AsideLi({ type, icon, title, href, imgSrc, onClick, isDanger }) {
  return (
    <li className={styles.li}>
      {type === "button" ? (
        <button
          className={`btn ${isDanger ? styles.danger : ""}`}
          onClick={onClick}
        >
          <i className={`${styles["f-icon"]} ${icon}`} />
          <span>{title}</span>
        </button>
      ) : type === "buttonImg" ? (
        <button className={styles.btnImg}>
          <div className={styles.image}>
            <img src={imgSrc} alt={`${imgSrc}-image`} />
          </div>
          <div className={styles.data}>
            <span>{title}</span>
          </div>
        </button>
      ) : (
        <Link to={href} className={`btn ${isDanger ? styles.danger : ""}`}>
          <i className={`${styles["f-icon"]} ${icon}`} />
          <span>{title}</span>
        </Link>
      )}
    </li>
  );
}

export default AsideLi;
