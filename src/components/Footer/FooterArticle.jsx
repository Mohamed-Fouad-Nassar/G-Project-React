import { Link } from "react-router-dom";

import styles from "./footerArticle.module.scss";

function FooterArticle({ title, id, description, author }) {
  return (
    <article className={styles.article}>
      <Link to={`/blog/${id}`}>
        <h4>{title}</h4>
      </Link>
      <p>{description}</p>
      <div className={styles.info}>
        <span>author: {author}</span>
      </div>
    </article>
  );
}

export default FooterArticle;
