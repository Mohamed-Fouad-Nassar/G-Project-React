import styles from "./modalImg.module.scss";

function ModalImg({ src, alt }) {
  return (
    <>
      <h3 className={styles.title}>{alt}</h3>
      <div className={styles.image} id="field">
        <img id="imgSrcField" src={src} alt={`${alt}-image`} />
      </div>
    </>
  );
}

export default ModalImg;
