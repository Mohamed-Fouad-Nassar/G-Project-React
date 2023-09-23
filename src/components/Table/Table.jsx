import TableCol from "./TableCol";

import styles from "./table.module.scss";

function Table() {
  return (
    <section className={styles.table}>
      <div className={styles["tab-head"]}>
        <span>no.</span>
        <span>title</span>
        <span>category</span>
        <span>modify date</span>
        <span>actions</span>
      </div>
      <div className={styles["tab-body"]}>
        <TableCol
          id="1"
          title="item 1 title"
          category="category 1"
          modifyDate="1 jun 2022"
        />
        <TableCol
          id="2"
          title="item 2 title"
          category="category 2"
          modifyDate="1 jun 2022"
        />
        <TableCol
          id="3"
          title="item 3 title"
          category="category 1"
          modifyDate="1 jun 2022"
        />
        <TableCol
          id="4"
          title="item 4 title"
          category="category 2"
          modifyDate="1 jun 2022"
        />
      </div>
    </section>
  );
}

export default Table;
