import styles from "./dataFieldSec.module.scss";

function DataFieldSec({ icon, data, isWhite }) {
  return (
    <div className={styles.field}>
      <div>
        <i className={`${styles["f-icon"]} ${icon}`} />
      </div>
      <span className={isWhite ? styles["white-text"] : ""}>{data}</span>
    </div>
  );
}

export default DataFieldSec;
