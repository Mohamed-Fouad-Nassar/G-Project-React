import styles from "./modalField.module.scss";

function ModalField({ title, value }) {
  return (
    <article className={styles.box}>
      <label htmlFor="field">{`${title}:`}</label>
      <div className={styles.field} id="field">
        <span id="nameField">{value}</span>
      </div>
    </article>
  );
}

export default ModalField;
