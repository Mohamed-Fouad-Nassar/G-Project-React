import styles from "./socialMediaDiv.module.scss";

function SocialMediaDiv({ children }) {
  return <div className={styles.contact}>{children}</div>;
}

export default SocialMediaDiv;
