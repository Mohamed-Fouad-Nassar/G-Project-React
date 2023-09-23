import styles from "./tableCol.module.scss";

function TableCol({ id, title, category, modifyDate }) {
  return (
    <div className={styles.item}>
      <span>{id}</span>
      <span>{title}</span>
      <span>{category}</span>
      <span>{modifyDate}</span>
      <span>
        <a href={`#${id}`}>
          <i className={`${styles["f-icon"]} fa-solid fa-pencil`} />
        </a>
        <button>
          <i className={`${styles["f-icon"]} fa-solid fa-eye`} />
        </button>
        <button className={styles.danger}>
          <i className={`${styles["f-icon"]} fa-solid fa-trash-can`} />
        </button>
      </span>
    </div>
  );
}

export default TableCol;
