import { useRef } from "react";

import BackBtn from "../../components/BackBtn/BackBtn";
import Button from "../../components/Button/Button";

import reviewUploadedImg from "../../utilities/reviewUploadedImg";

import medicineAvatar from "../../assets/images/default/medicine-avatar.png";

import styles from "./addItems.module.scss";

function AddNewMedicine() {
  const submitForm = (e) => {
    e.preventDefault();
  };

  const imagePreviewRef = useRef();

  return (
    <div className={`${styles.container} container`}>
      <div className={styles["sec-head"]}>
        <h1>modify medicine</h1>
        <BackBtn />
      </div>
      <div className={styles["sec-body"]}>
        <form onSubmit={submitForm}>
          <div className={styles["sec-flex"]}>
            <section className={styles.info}>
              <h2>medicine information</h2>

              <div className={styles.success}>
                <input type="text" name="name" placeholder="name" />
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
                <input type="number" name="price" placeholder="price" />
                <span className={styles["error-message"]}>
                  error message here
                </span>
              </div>
            </section>
            <section className={styles.image}>
              <h2>upload medicine image</h2>
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
                      src={medicineAvatar}
                      alt="profile-image"
                    />
                  </div>
                </div>
              </section>
              {/* End user image upload and preview */}
            </section>
          </div>
          <Button type="submit">modify</Button>
        </form>
      </div>
    </div>
  );
}

export default AddNewMedicine;
