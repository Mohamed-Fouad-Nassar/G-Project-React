import { Link } from "react-router-dom";

import RegisterLogInLayout from "../../layouts/RegisterLogInLayout/RegisterLogInLayout";

import BackBtn from "../../components/BackBtn/BackBtn";
import Button from "../../components/Button/Button";
import RegisterLogInImgSec from "../../components/RegisterLogInImgSec/RegisterLogInImgSec";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./register.module.scss";

function Register() {
  useSetTitle("Register");

  const handleBlurInput = (e) => {
    if (e.target.value.length > 0)
      e.target.classList.add(`${styles.hasContent}`);
    else e.target.classList.remove(`${styles.hasContent}`);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("register submit form handle function");
  };

  return (
    <RegisterLogInLayout>
      <div className={styles.left}>
        <BackBtn />
        <div className={styles.head}>
          <h2>register</h2>
          <p>
            please enter your details to sign up <br />
            and to be part of our great community
          </p>
        </div>
        <form onSubmit={submitForm}>
          <div className={styles.field}>
            <div className={styles.input}>
              <label htmlFor="name">
                full name
                <span>*</span>
              </label>
              <input id="name" type="text" onBlur={handleBlurInput} />
            </div>
            <span className={`${styles["error-message"]}`}></span>
          </div>

          <div className={styles.field}>
            <div className={styles.input}>
              <label htmlFor="email">
                email
                <span>*</span>
              </label>
              <input id="email" type="text" onBlur={handleBlurInput} />
            </div>
            <span className={`${styles["error-message"]} ${styles.active}`}>
              error message here, error message here, error message here, error
              message here, error message here.
            </span>
          </div>

          <div className={styles.field}>
            <div className={styles.input}>
              <label htmlFor="password">
                password
                <span>*</span>
              </label>
              <input id="password" type="password" onBlur={handleBlurInput} />
            </div>
            <span className={`${styles["error-message"]}`}></span>
          </div>

          <div className={styles.field}>
            <div className={styles.input}>
              <label htmlFor="confirmPassword">
                confirm Password
                <span>*</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                onBlur={handleBlurInput}
              />
            </div>
            <span className={`${styles["error-message"]} ${styles.active}`}>
              error message here
            </span>
          </div>

          <section className={styles["check-box"]}>
            <input type="checkbox" name="agree" id="terms" />
            <label htmlFor="terms">
              i agree with all
              <a href="#">terms of use</a>
              and
              <a href="#">our privacy policy</a>
            </label>
            <span className={`${styles["error-message"]} ${styles.active}`}>
              you must accept all terms to register
            </span>
          </section>

          <div className={styles["flex-sec"]}>
            <Button type="submit">register</Button>
            <Button type="reset" secondary={true}>
              clear form
            </Button>
          </div>
        </form>

        <div className={styles["reg-link"]}>
          <span>already have account?</span>
          <Link to="/login">log in</Link>
        </div>
      </div>
      <RegisterLogInImgSec />
    </RegisterLogInLayout>
  );
}

export default Register;
