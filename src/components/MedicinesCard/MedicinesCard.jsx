import { Link } from "react-router-dom";

import styles from "./medicinesCard.module.scss";

function MedicinesCard({ imgSrc, title, category, pharmacies }) {
  return (
    <article className={styles.box}>
      <div className={styles.image}>
        <img
          className={styles["card-img-top"]}
          src={imgSrc}
          alt={`${imgSrc}-image`}
        />
      </div>
      <div className={styles["card-body"]}>
        <div className={styles.info}>
          <h5>{title}</h5>
          <span>{category}</span>
        </div>
        <div className={styles["pharmacies-name"]}>
          {pharmacies.map(({ name, id }) => (
            <Link key={id} to={`/pharmacies/${id}`}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

export default MedicinesCard;
