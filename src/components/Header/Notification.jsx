import { Link } from "react-router-dom";

import styles from "./notification.module.scss";

function Notification({ icon, link, number }) {
  return (
    <article className={styles.notification}>
      <div className={styles["h-btn"]}>
        <Link to={link} data-number={number}>
          <i className={`${styles["f-icon"]} ${icon}`} />
        </Link>
      </div>
    </article>
  );
}

export default Notification;
