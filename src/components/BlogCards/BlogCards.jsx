import { Link } from "react-router-dom";

import styles from "./blogCards.module.scss";

function BlogCards({ imgSrc, title, id, description, author }) {
  return (
    <article className={styles.box}>
      <div className={styles.image}>
        <img src={imgSrc} alt={`${imgSrc}-image`} />
      </div>
      <div className={styles.text}>
        <Link to={`/blog/${id}`}>
          <h3>{title}</h3>
        </Link>
        {description && <p>{description}</p>}
        {author && (
          <div className={styles.info}>
            <span>author: {author}</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default BlogCards;
