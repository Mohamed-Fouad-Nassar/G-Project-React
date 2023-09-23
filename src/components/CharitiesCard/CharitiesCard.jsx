import { Link } from "react-router-dom";

import styles from "./charitiesCard.module.scss";

function CharitiesCard({ imgSrc, id, title, description }) {
  return (
    <div className={styles.slide}>
      <div className={styles["slide-image"]}>
        <img src={imgSrc} alt={`${imgSrc}-image`} />
      </div>
      <div className={styles["slide-body"]}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles["slide-foot"]}>
        <Link to={`/charities/${id}`}>
          <span>read more</span>
          <i className={`${styles["f-icon"]} fa-solid fa-arrow-right`}></i>
        </Link>
      </div>
    </div>
  );
}

export default CharitiesCard;
