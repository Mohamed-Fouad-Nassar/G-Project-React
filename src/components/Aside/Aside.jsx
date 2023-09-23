import styles from "./aside.module.scss";

function Aside({ className, children }) {
  return (
    <aside className={`${styles.aside} ${className}`}>
      <ul>{children}</ul>
    </aside>
  );
}

export default Aside;
