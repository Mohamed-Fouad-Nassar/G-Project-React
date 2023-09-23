import { useState } from "react";

import styles from "./articleStatistics.module.scss";

function ArticleStatistics({ likes, liked, saves, saved }) {
  const [likesNum, setLikesNum] = useState(parseInt(likes));
  const [isLiked, setIsLiked] = useState(liked);

  const [savesNum, setSavesNum] = useState(parseInt(saves));
  const [isSaved, setIsSaved] = useState(saved);

  const handleLikeBn = (e) => {
    if (isLiked) {
      e.target.classList.remove(`${styles.active}`);
      setLikesNum((prevState) => (prevState -= 1));
      setIsLiked(false);
    } else {
      e.target.classList.add(`${styles.active}`);
      setLikesNum((prevState) => (prevState += 1));
      setIsLiked(true);
    }
  };

  const handleSaveBn = (e) => {
    if (isSaved) {
      e.target.classList.remove(`${styles.active}`);
      setSavesNum((prevState) => (prevState -= 1));
      setIsSaved(false);
    } else {
      e.target.classList.add(`${styles.active}`);
      setSavesNum((prevState) => (prevState += 1));
      setIsSaved(true);
    }
  };

  return (
    <div className={styles.statistics}>
      <button className={isLiked ? styles.active : ""} onClick={handleLikeBn}>
        <i className={`${styles["f-icon"]} fa-regular fa-thumbs-up`} />
        <i className={`${styles["f-icon"]} fa-solid fa-thumbs-up`} />
        <span>{likesNum || 0}</span>
      </button>

      <button className={isSaved ? styles.active : ""} onClick={handleSaveBn}>
        <i className={`${styles["f-icon"]} fa-regular fa-bookmark`} />
        <i className={`${styles["f-icon"]} fa-solid fa-bookmark`} />
        <span>{savesNum || 0}</span>
      </button>
    </div>
  );
}

export default ArticleStatistics;
