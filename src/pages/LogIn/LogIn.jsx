import { Link } from "react-router-dom";

import RegisterLogInLayout from "../../layouts/RegisterLogInLayout/RegisterLogInLayout";

import BackBtn from "../../components/BackBtn/BackBtn";
import Button from "../../components/Button/Button";
import RegisterLogInImgSec from "../../components/RegisterLogInImgSec/RegisterLogInImgSec";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./logIn.module.scss";

function LogIn() {
  useSetTitle("Log in");

  const handleBlurInput = (e) => {
    if (e.target.value.length > 0)
      e.target.classList.add(`${styles.hasContent}`);
    else e.target.classList.remove(`${styles.hasContent}`);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <RegisterLogInLayout>
      <div className={styles.left}>
        <BackBtn />
        <div className={styles.head}>
          <h2>log in</h2>
          <p>
            to stay in touch with us, <br />
            please log in to your account
          </p>
        </div>
        <form onSubmit={submitForm}>
          <div className={styles.field}>
            <div className={styles.input}>
              <input type="text" id="email" onBlur={handleBlurInput} />
              <label htmlFor="email">
                email
                <span>*</span>
              </label>
            </div>
            <span className={`${styles["error-message"]}`}></span>
          </div>

          <div className={styles.field}>
            <div className={styles.input}>
              <input type="password" id="password" onBlur={handleBlurInput} />
              <label htmlFor="password">
                password
                <span>*</span>
              </label>
            </div>
            <span className={`${styles["error-message"]} ${styles.active}`}>
              error message here
            </span>
          </div>

          <div className={styles["flex-sec"]}>
            <div className={styles["left-sec"]}>
              <input type="checkbox" name="remember" id="rem" />
              <label htmlFor="rem">remember me</label>
            </div>
            <div className={styles["right-sec"]}>
              <Link to="/reset-password">forget password</Link>
            </div>
          </div>

          <Button type="submit">log in</Button>
        </form>
        <div className={styles["reg-link"]}>
          <span>{"you don't have account,"}</span>
          <Link to="/register">create account?</Link>
        </div>
        {/* <div className={styles["social-log"]}>
          <h3>log in with</h3>
          <div className={styles.links}>
            <a href="#">
              <i className={`${styles["f-icon"]} fa-brands fa-facebook-f`} />
            </a>
            <a href="#">
              <i className={`${styles["f-icon"]} fa-brands fa-twitter`} />
            </a>
            <a href="#">
              <i className={`${styles["f-icon"]} fa-brands fa-google`} />
            </a>
          </div>
        </div> */}
      </div>
      <RegisterLogInImgSec />
    </RegisterLogInLayout>
  );
}

export default LogIn;
