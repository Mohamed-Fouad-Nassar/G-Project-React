import { useEffect, useRef } from "react";

import styles from "./themes.module.scss";

function Themes() {
  let body = document.body;

  const changeTheme = () => {
    if (body.getAttribute("data-theme") === "light") {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      lightIconRef.current.style.display = "none";
      darkIconRef.current.style.display = "block";
    } else {
      body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      darkIconRef.current.style.display = "none";
      lightIconRef.current.style.display = "block";
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      body.setAttribute("data-theme", "light");
      lightIconRef.current.style.display = "block";
      darkIconRef.current.style.display = "none";
    } else if (localStorage.getItem("theme") === "dark") {
      body.setAttribute("data-theme", "dark");
      darkIconRef.current.style.display = "block";
      lightIconRef.current.style.display = "none";
    } else {
      if (body.getAttribute("data-theme") === "light") {
        lightIconRef.current.style.display = "block";
        darkIconRef.current.style.display = "none";
      } else {
        darkIconRef.current.style.display = "block";
        lightIconRef.current.style.display = "none";
      }
    }
  }, []);

  const lightIconRef = useRef();
  const darkIconRef = useRef();

  return (
    <article className={styles.themes}>
      <div className={styles["h-btn"]} onClick={changeTheme}>
        <i
          ref={lightIconRef}
          className={`${styles["f-icon"]} fa-solid fa-sun`}
        ></i>
        <i
          ref={darkIconRef}
          className={`${styles["f-icon"]} fa-solid fa-moon`}
        ></i>
      </div>
    </article>
  );
}

export default Themes;
