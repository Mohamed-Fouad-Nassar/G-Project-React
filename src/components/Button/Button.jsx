import { Link } from "react-router-dom";

import styles from "./button.module.scss";

function Button({ type, href, children, secondary, onClick }) {
  if (type === "link")
    return (
      <Link
        to={href}
        className={`${secondary ? styles["sec-btn"] : styles["main-btn"]}`}
      >
        {children}
      </Link>
    );
  else
    return (
      <button
        type={type}
        className={`${secondary ? styles["sec-btn"] : styles["main-btn"]}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
}

export default Button;
