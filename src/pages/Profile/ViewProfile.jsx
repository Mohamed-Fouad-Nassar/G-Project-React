import useSetTitle from "../../hooks/useSetTitle";

import avatar from "../../assets/images/default/avatar-image-male.png";

import styles from "./viewProfile.module.scss";
import Button from "../../components/Button/Button";

function ViewProfile() {
  useSetTitle("View Profile");

  const accountName = "account name",
    userName = "userName",
    href = "#edit-profile",
    firstName = "john",
    lastName = "doe",
    email = "leosx.as@mn.ci",
    birthDate = new Date("January 23, 2002"),
    gender = "male",
    phoneNumber = "+201034648924",
    address = "street name - city - country";

  return (
    <section className={styles.content}>
      <div className={styles["top-sec"]}>
        <div className={styles.image}>
          <img src={avatar} alt={`${avatar}-image`} />
        </div>
        <div className={styles.text}>
          <h2>{accountName}</h2>
          <span>{userName}</span>
        </div>
        <div className={styles["edit-btn"]}>
          <Button type="link" href={href}>
            <i className={`${styles["f-icon"]} fa-solid fa-pen`} />
            <span>edit profile</span>
          </Button>
        </div>
      </div>
      <div className={styles["bottom-sec"]}>
        <article className={styles.box}>
          <label htmlFor="field">full name:</label>
          <div className={styles.field} id="field">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </div>
        </article>
        <article className={styles.box}>
          <label htmlFor="field">date of birth:</label>
          <div className={styles.field} id="field">
            <span>{birthDate.getDate()}</span> /
            <span>{birthDate.getMonth() + 1}</span> /
            <span>{birthDate.getFullYear()}</span>
          </div>
        </article>
        <article className={styles.box}>
          <label htmlFor="field">e-mail:</label>
          <div className={styles.field} id="field">
            <span>{email}</span>
          </div>
        </article>
        <article className={styles.box}>
          <div className={styles.field}>
            <div className={styles["left-sec"]}>
              <label htmlFor="field">gender:</label>
              <div className={styles.field} id="field">
                <span>{gender}</span>
              </div>
            </div>
            <div className={styles["right-sec"]}>
              <label htmlFor="field">age:</label>
              <div className={styles.field} id="field">
                <span>
                  {Math.floor(
                    (Date.now() - birthDate) / 1000 / 60 / 60 / 24 / 7 / 52
                  )}
                </span>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.box}>
          <label htmlFor="field">phone number:</label>
          <div className={styles.field} id="field">
            <span>{phoneNumber}</span>
          </div>
        </article>
        <article className={styles.box}>
          <label htmlFor="field">address:</label>
          <div className={styles.field} id="field">
            <span>{address}</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ViewProfile;
