import styles from "./headSection.module.scss";

function HeadSection({ title, description, isWhite }) {
  return (
    <div
      className={`${styles["sec-head"]} ${isWhite ? styles["white-text"] : ""}`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={isWhite ? styles["head-shape-w"] : styles["head-shape"]}>
        <span />
      </div>
    </div>
  );
}

export default HeadSection;
