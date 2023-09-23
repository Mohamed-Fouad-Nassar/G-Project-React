import styles from "./registerLogInLayout.module.scss";

function RegisterLogInLayout({ children, isFit }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${isFit ? styles.fit : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default RegisterLogInLayout;
