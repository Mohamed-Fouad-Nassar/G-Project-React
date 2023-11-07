import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DoctorModal from "../../components/Modals/DoctorModal";
import Button from "../../components/Button/Button";

import {
  editMedicine,
  getSingleMedicine,
} from "../../store/slices/medicineSlice";

import styles from "./editItems.module.scss";

function EditDoctor() {
  const { medicineId } = useParams();

  const { singleMedicine } = useSelector((state) => state.medicines);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (singleMedicine) {
      setName(singleMedicine.name);
      setCategory(singleMedicine.category);
    }
  }, [singleMedicine]);

  useEffect(() => {
    dispatch(getSingleMedicine(medicineId));
  }, [dispatch, medicineId]);

  const submitForm = (e) => {
    e.preventDefault();

    const medicine = {
      name,
      image,
      category,
      updatedAt: Date.now(),
    };

    dispatch(editMedicine(medicine));
  };

  // const imagePreviewRef = useRef();

  return (
    <DoctorModal backUrl={"/dashboard/medicines"} title={"edit medicine"}>
      <form onSubmit={submitForm}>
        <div className={styles["sec-flex"]}>
          <section className={styles.info}>
            <label htmlFor="name">name</label>
            <div className={styles.success}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className={styles["error-message"]}>
                error message here
              </span>
            </div>

            <label htmlFor="category">category</label>
            <div className={styles.error}>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <span className={styles["error-message"]}>
                error message here
              </span>
            </div>

            <label htmlFor="image">image</label>
            <div>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="image link"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <span className={styles["error-message"]}></span>
            </div>
          </section>
          {/* <section className={styles.image}>
                <h2>upload doctor image</h2>
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
              </section> */}
        </div>
        {/* <Button loading={loading} type="submit"> */}
        <Button type="submit">edit</Button>
      </form>
    </DoctorModal>
  );
}

export default EditDoctor;
