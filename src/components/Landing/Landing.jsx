import landing from "../../assets/images/default/landing-image.png";

import styles from "./landing.module.scss";

function Landing() {
  return (
    <section className={styles.landing}>
      <div className={`${styles.container} container`}>
        <div className={styles["down-btn"]}>
          <a href="#services">
            <i className="fa-solid fa-angles-down" />
          </a>
        </div>
        <div className={styles.left}>
          <h1>welcome to hope</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum a
            ullam ducimus nulla reprehenderit quod ea vero consequatur minus,
            delectus, eligendi corrupti aliquam! Voluptate dolore amet quia
            similique beatae.
          </p>
        </div>
        <div className={styles.right}>
          <img src={landing} alt="Landing-Image" />
        </div>
      </div>
    </section>
  );
}

export default Landing;
