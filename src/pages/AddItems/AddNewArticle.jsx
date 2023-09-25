import { useRef } from "react";

import BackBtn from "../../components/BackBtn/BackBtn";
import Button from "../../components/Button/Button";
import TinyMCE from "../../components/TinyMCE/TinyMCE";

import reviewUploadedImg from "../../utilities/reviewUploadedImg";

import articleAvatar from "../../assets/images/default/article-avatar.png";

import styles from "./addItems.module.scss";

function AddNewArticle() {
  const submitForm = (e) => {
    e.preventDefault();
  };

  const imagePreviewRef = useRef();

  return (
    <div className={`${styles.container} container`}>
      <div className={styles["sec-head"]}>
        <h1>modify article</h1>
        <BackBtn />
      </div>
      <div className={styles["sec-body"]}>
        <form action="">
          <div className={styles["sec-flex"]}>
            <section className={styles.info}>
              <h2>article information</h2>

              <div className={styles.success}>
                <input type="text" name="title" placeholder="title" />
                <span className={styles["error-message"]}>
                  error message here
                </span>
              </div>

              <div className={styles.error}>
                <input type="text" name="category" placeholder="category" />
                <span className={styles["error-message"]}>
                  error message here
                </span>
              </div>

              <div>
                <input type="text" name="author" placeholder="author" />
                <span className={styles["error-message"]}></span>
              </div>

              <div>
                <input
                  type="text"
                  name="youtube video link (if it's found)"
                  placeholder="youtube video link (if it's found)"
                />
                <span className={styles["error-message"]}></span>
              </div>
            </section>

            <section className={`${styles.image} ${styles.half}`}>
              <h2>upload article image</h2>
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
                      src={articleAvatar}
                      alt="profile-image"
                    />
                  </div>
                </div>
              </section>
              {/* End user image upload and preview */}
            </section>
          </div>
          <div className={styles["article-body"]}>
            <TinyMCE />
          </div>
          <Button type="submit">modify</Button>
        </form>
      </div>
    </div>
  );
}

export default AddNewArticle;
