import { useRef } from "react";

import BackBtn from "../../components/BackBtn/BackBtn";
import Button from "../../components/Button/Button";

import reviewUploadedImg from "../../utilities/reviewUploadedImg";

import doctorAvatar from "../../assets/images/default/doctor-avatar.png";

import styles from "./addItems.module.scss";

function AddNewDoctor() {
  const submitForm = (e) => {
    e.preventDefault();
  };

  const imagePreviewRef = useRef();

  return (
    <div className={`${styles.container} container`}>
      <div className={styles["sec-head"]}>
        <h1>modify doctor</h1>
        <BackBtn />
      </div>
      <div className={styles["sec-body"]}>
        <form onSubmit={submitForm}>
          <div className={styles["sec-flex"]}>
            <section className={styles.info}>
              <h2>doctor information</h2>

              <div className={styles.success}>
                <input type="text" name="name" placeholder="name" />
                <span className={styles["error-message"]}>
                  error message here
                </span>
              </div>

              <div className={styles.error}>
                <input type="text" name="specialty" placeholder="specialty" />
                <span className={styles["error-message"]}>
                  error message here
                </span>
              </div>

              <div>
                <input type="text" name="location" placeholder="location" />
                <span className={styles["error-message"]}></span>
              </div>

              <div>
                <input
                  type="text"
                  name="e-mail address"
                  placeholder="e-mail address"
                />
                <span className={styles["error-message"]}></span>
              </div>

              <div>
                <input
                  type="text"
                  name="phone-number"
                  placeholder="phone number"
                />
                <span className={styles["error-message"]}></span>
              </div>
            </section>
            <section className={styles.image}>
              <h2>upload doctor image</h2>
              {/* Start user image upload and preview */}
              <section className={styles["avatar-upload"]}>
                <div className={styles["avatar-edit"]}>
                  <input
                    type="file"
                    id="imageUpload"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      reviewUploadedImg(e.target, imagePreviewRef.current);
                    }}
                  />
                  <label htmlFor="imageUpload" />
                </div>
                <div className={styles["avatar-preview"]}>
                  <div>
                    <img
                      ref={imagePreviewRef}
                      src={doctorAvatar}
                      alt="profile-image"
                    />
                  </div>
                </div>
              </section>
              {/* End user image upload and preview */}
            </section>
          </div>
          <div>
            <h2>addition information</h2>
            <textarea
              id="body"
              name="more-info"
              placeholder="more information about doctor"
              defaultValue={""}
            />
          </div>
          <div className={styles.social}>
            <h2>social media links</h2>
            <div className={styles.inputs}>
              <div>
                <input
                  type="text"
                  name="facebook-link"
                  placeholder="facebook link"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="instagram-link"
                  placeholder="instagram link"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="twitter-link"
                  placeholder="twitter link"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="mail-address"
                  placeholder="mail address"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="whatsapp-number"
                  placeholder="whatsapp number"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="phone-number"
                  placeholder="phone number"
                />
              </div>
            </div>
          </div>
          <Button type="submit">modify</Button>
        </form>
      </div>
    </div>
  );
}

export default AddNewDoctor;
