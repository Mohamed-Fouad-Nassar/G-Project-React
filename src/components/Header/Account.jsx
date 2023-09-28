import { useRef } from "react";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";

import styles from "./account.module.scss";

function Account({ avatar }) {
  const menuRef = useRef();
  const accRef = useRef();

  const handleClick = () => {
    console.log("handle sign out button click");
  };

  const toggleMenu = () => {
    if (menuRef.current.classList.contains(`${styles.active}`)) {
      menuRef.current.classList.remove(`${styles.active}`);
      if (window.innerWidth <= 991)
        menuRef.current.parentElement.parentElement.style.paddingBottom =
          "10px";
      else
        menuRef.current.parentElement.parentElement.style.paddingBottom = "0";
    } else {
      menuRef.current.classList.add(`${styles.active}`);
      if (window.innerWidth <= 991)
        menuRef.current.parentElement.parentElement.style.paddingBottom =
          "180px";
      else
        menuRef.current.parentElement.parentElement.style.paddingBottom = "0";
    }
  };

  useOnClickOutside(accRef, () => {
    if (menuRef.current.classList.contains(`${styles.active}`)) {
      if (window.innerWidth > 991) {
        menuRef.current.classList.remove(`${styles.active}`);
        menuRef.current.parentElement.parentElement.style.paddingBottom = "0";
      }
    }
  });

  return (
    <article ref={accRef} className={styles.acc}>
      <div className={styles["h-btn"]} onClick={toggleMenu}>
        <img src={avatar} alt={`${avatar}-image`} />
      </div>
      <div ref={menuRef} className={styles.menu}>
        <ul>
          <li>
            <Link to="/profile">
              <i className={`${styles["f-icon"]} fa-solid fa-user`} />
              view profile
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <i className={`${styles["f-icon"]} fa-solid fa-chart-column`} />
              dashboard
            </Link>
          </li>
          <li>
            <button className={styles.danger} onClick={handleClick}>
              <i
                className={`${styles["f-icon"]} fa-solid fa-arrow-right-from-bracket`}
              />
              log out
            </button>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Account;
