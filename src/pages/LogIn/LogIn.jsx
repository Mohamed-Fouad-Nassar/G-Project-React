import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";

import RegisterLogInLayout from "../../layouts/RegisterLogInLayout/RegisterLogInLayout";

import BackBtn from "../../components/BackBtn/BackBtn";
import Button from "../../components/Button/Button";
import RegisterLogInImgSec from "../../components/RegisterLogInImgSec/RegisterLogInImgSec";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./logIn.module.scss";

function LogIn() {
  useSetTitle("Log in");

  const passwordRef = useRef(null);

  const emailSchema = Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required();

  const passwordSchema = Joi.string().pattern(
    new RegExp("^[a-zA-Z0-9]{3,30}$")
  );

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [remember, setRemember] = useState(false);

  const validateInput = (schema, value) => {
    return schema.validate(value);
  };

  const handleBlurInput = (e) => {
    if (e.target.value.length > 0)
      e.target.classList.add(`${styles.hasContent}`);
    else e.target.classList.remove(`${styles.hasContent}`);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!emailErr && !passwordErr && email && password) {
      console.log(`
      email: ${email},
      password: ${password},
      remember: ${remember}
      `);
    }
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
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => {
                  handleBlurInput(e);
                  if (validateInput(emailSchema, e.target.value).error) {
                    setEmailErr(
                      validateInput(emailSchema, e.target.value).error
                        .details[0].message
                    );
                    e.target.parentElement.classList.remove(`${styles.valid}`);
                  } else {
                    setEmailErr("");
                    e.target.parentElement.classList.add(`${styles.valid}`);
                  }
                }}
              />
              <label htmlFor="email">
                email
                <span>*</span>
              </label>
            </div>
            {emailErr && (
              <span className={`${styles["error-message"]} ${styles.active}`}>
                {emailErr}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <div className={styles.input}>
              <input
                type="password"
                id="password"
                value={password}
                ref={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={(e) => {
                  handleBlurInput(e);
                  if (validateInput(passwordSchema, e.target.value).error) {
                    setPasswordErr(
                      validateInput(passwordSchema, e.target.value).error
                        .details[0].message
                    );
                    e.target.parentElement.classList.remove(`${styles.valid}`);
                  } else {
                    setPasswordErr("");
                    e.target.parentElement.classList.add(`${styles.valid}`);
                  }
                }}
              />
              <span
                onClick={(e) => {
                  if (passwordRef.current.type === "text") {
                    passwordRef.current.type = "password";
                    e.target.parentElement.classList.remove(`${styles.show}`);
                  } else {
                    passwordRef.current.type = "text";
                    e.target.parentElement.classList.add(`${styles.show}`);
                  }
                }}
              >
                <i className={`${styles["f-icon"]} fa-solid fa-eye`}></i>
                <i className={`${styles["f-icon"]} fa-solid fa-eye-slash`}></i>
              </span>
              <label htmlFor="password">
                password
                <span>*</span>
              </label>
            </div>
            {passwordErr && (
              <span className={`${styles["error-message"]} ${styles.active}`}>
                {passwordErr}
              </span>
            )}
          </div>

          <div className={styles["flex-sec"]}>
            <div className={styles["left-sec"]}>
              <input
                type="checkbox"
                name="remember"
                id="rem"
                onChange={() => {
                  setRemember((prevState) => !prevState);
                }}
              />
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
