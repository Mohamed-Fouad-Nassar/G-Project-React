import styles from "./dashInfoSectionDiv.module.scss";

function DashInfoSectionDiv({ title, children }) {
  return (
    <article className={styles.box}>
      <div className={styles.head}>
        <h2>{title}</h2>
      </div>
      {children}
    </article>
  );
}

export default DashInfoSectionDiv;
