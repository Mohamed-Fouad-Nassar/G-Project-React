import styles from "./tableCol.module.scss";

function TableCol({ id, title, category, modifyDate, children }) {
  return (
    <div className={styles.item}>
      <span>{id}</span>
      <span>{title}</span>
      {category && <span>{category}</span>}
      <span>{modifyDate}</span>
      {children}
    </div>
  );
}

export default TableCol;
