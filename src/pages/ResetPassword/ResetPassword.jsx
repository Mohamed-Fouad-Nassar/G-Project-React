import RegisterLogInLayout from "../../layouts/RegisterLogInLayout/RegisterLogInLayout";

import Button from "../../components/Button/Button";
import BackBtn from "../../components/BackBtn/BackBtn";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./resetPassword.module.scss";

function ResetPassword() {
  useSetTitle("Reset Password");

  const handleBlurInput = (e) => {
    if (e.target.value.length > 0)
      e.target.classList.add(`${styles.hasContent}`);
    else e.target.classList.remove(`${styles.hasContent}`);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("reset password submit form handle function");
  };

  return (
    <RegisterLogInLayout isFit={true}>
      <BackBtn />
      <div className={styles.left}>
        <div className={styles.head}>
          <h2>reset password</h2>
          <p>please enter your email to reset your password</p>
        </div>
        <form onSubmit={submitForm}>
          <div className={styles.field}>
            <div className={styles.input}>
              <label htmlFor="email">
                email
                <span>*</span>
              </label>
              <input id="email" type="email" onBlur={handleBlurInput} />
            </div>
            <span className={`${styles["error-message"]}`}></span>
          </div>
          <Button type="submit">reset password</Button>
        </form>
      </div>
    </RegisterLogInLayout>
  );
}
export default ResetPassword;
