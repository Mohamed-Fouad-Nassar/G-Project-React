import styles from "./table.module.scss";

function Table({ children, titles }) {
  return (
    <section className={styles.table}>
      {titles && (
        <div className={styles["tab-head"]}>
          <span>no.</span>
          {titles.map((title) => (
            <span key={title}>{title}</span>
          ))}
          <span>actions</span>
        </div>
      )}
      <div className={styles["tab-body"]}>{children}</div>
    </section>
  );
}

export default Table;
