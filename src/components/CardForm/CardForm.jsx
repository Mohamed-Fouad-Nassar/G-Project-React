import Button from "../Button/Button";

import styles from "./cardForm.module.scss";

function CardForm({ imgSrc, id, title, category }) {
  const addToCard = (e) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <article className={styles.box}>
      <div className={styles.image}>
        <img src={imgSrc} alt={`${imgSrc}-image`} />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        {category && <span>{category}</span>}
      </div>
      <div className={styles.form}>
        <form>
          <input type="hidden" value={id} />
          <Button type="submit" onClick={addToCard}>
            <i className={`${styles["f-icon"]} fa-solid fa-cart-plus`} />
            add to card
          </Button>
        </form>
      </div>
    </article>
  );
}

export default CardForm;
