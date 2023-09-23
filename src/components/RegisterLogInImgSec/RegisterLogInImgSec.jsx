import introImg from "../../assets/images/default/intro-image.png";

import styles from "./registerLogInImgSec.module.scss";

function RegisterLogInImgSec() {
  return (
    <div className={styles["right"]}>
      <img src={introImg} alt="intro-image" />
    </div>
  );
}

export default RegisterLogInImgSec;
