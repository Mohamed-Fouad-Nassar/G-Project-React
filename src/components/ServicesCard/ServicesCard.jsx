import styles from "./servicesCard.module.scss";

function ServicesCard({ link, icon, title, description }) {
  return (
    <article className={styles.box}>
      <a href={`#${link}`}>
        <i className={`${styles["f-icon"]} ${icon}`} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </article>
  );
}

export default ServicesCard;
