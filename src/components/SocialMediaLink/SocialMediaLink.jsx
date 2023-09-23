import styles from "./socialMediaLink.module.scss";

function SocialMediaLink({ href, icon, title }) {
  return (
    <div className={styles["social-link"]}>
      <a href={href} title={title}>
        <i className={`${styles["f-icon"]} ${icon}`}></i>
      </a>
    </div>
  );
}

export default SocialMediaLink;
