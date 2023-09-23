import styles from "./dashHeadSec.module.scss";

function DashHeadSec({ title }) {
  return (
    <div className={styles["sec-head"]}>
      <h2>{title}</h2>
    </div>
  );
}

export default DashHeadSec;
