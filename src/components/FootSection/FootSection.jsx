import Button from "../Button/Button";

import styles from "./footSection.module.scss";

function FootSection({ targetPage, type, onClick, className }) {
  return (
    <div className={`${styles["sec-foot"]} ${className}`}>
      {type === "link" ? (
        <Button type="link" href={targetPage}>
          see more
        </Button>
      ) : (
        <Button onClick={onClick}>see more</Button>
      )}
    </div>
  );
}

export default FootSection;
