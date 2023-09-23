import { Link } from "react-router-dom";

import styles from "./navLi.module.scss";

function NavLi({ href, icon, title }) {
  return (
    <li className={styles.link}>
      <Link to={href} title={title}>
        <i className={`${styles["f-icon"]} ${icon}`} />
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default NavLi;
