import { Link } from "react-router-dom";

import styles from "./cardMin.module.scss";

function CardMin({ imgSrc, link, title, description }) {
  return (
    <article className={styles.box}>
      <div className={styles.image}>
        <img src={imgSrc} alt={`${imgSrc}-image`} />
      </div>
      <div className={styles.text}>
        <Link to={link}>
          <h3>{title}</h3>
        </Link>
        {description && <p>{description}</p>}
      </div>
    </article>
  );
}

export default CardMin;
