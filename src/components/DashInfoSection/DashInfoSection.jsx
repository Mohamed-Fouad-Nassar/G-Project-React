import { Link } from "react-router-dom";

import styles from "./dashInfoSection.module.scss";

function DashInfoSection({ href, number, isReverse }) {
  return (
    <div className={`${styles.info} ${isReverse ? styles.reverse : ""}`}>
      <section className={styles.modify}>
        <h3>add a new item</h3>
        <Link to={href}>
          <i className={`${styles["f-icon"]} fa-solid fa-circle-plus`} />
        </Link>
      </section>
      <section className={styles["items-num"]}>
        <h3>number of item</h3>
        <span>{number}</span>
      </section>
    </div>
  );
}

export default DashInfoSection;
