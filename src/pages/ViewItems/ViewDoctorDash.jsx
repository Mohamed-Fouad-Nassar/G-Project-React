import { useParams } from "react-router-dom";
import DoctorModal from "../../components/Modals/DoctorModal";
import { useDispatch, useSelector } from "react-redux";
import { getSingleDoctor } from "../../store/slices/DoctorSlice";
import { useEffect } from "react";

import docImage from "../../assets/images/doctors/doctor-image-4.jpg";

import styles from "./viewDoctorDash.module.scss";
import ModalField from "../../components/Modals/ModalField";
import ModalImg from "../../components/Modals/ModalImg";

function ViewDoctorDash() {
  const doctorDesc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit enim nostrum consequuntur soluta. Laudantium sed doloremque aperiam animi nesciunt dolores facilis rem minima temporibus, voluptate expedita tempore earum! Blanditiis!";

  const { doctorId } = useParams();
  const { singleDoctor } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleDoctor(doctorId));
  }, [dispatch, doctorId]);

  return (
    <DoctorModal backUrl={"/dashboard/doctors"} title={"doctors info"}>
      {singleDoctor && (
        <div className={styles.felids}>
          <article className={styles.box}>
            <div className={styles["flex-sec"]}>
              <div className={styles["left-sec"]}>
                <ModalField title={"name"} value={singleDoctor.name} />
                <ModalField
                  title={"specialty"}
                  value={singleDoctor.specialty}
                />
                <ModalField title={"location"} value={singleDoctor.location} />
                <ModalField title={"e-mail"} value={singleDoctor.email} />
                <ModalField
                  title={"phone number"}
                  value={singleDoctor.phoneNumber}
                />
              </div>
              <div className={styles["right-sec"]}>
                <ModalImg src={docImage} alt={"doctor image"} />
              </div>
            </div>
          </article>
          <ModalField title={"doctor info"} value={doctorDesc} />
          <article className={styles.box}>
            <label htmlFor="field">doctor social media:</label>
            <div className={styles["grid-sec"]} id="field">
              <ModalField title={"facebook"} value={singleDoctor.facebook} />
              <ModalField title={"instagram"} value={singleDoctor.instagram} />
              <ModalField title={"twitter"} value={singleDoctor.twitter} />
              <ModalField title={"mail address"} value={singleDoctor.email} />
              <ModalField title={"whatsapp"} value={singleDoctor.whatsapp} />
            </div>
          </article>
        </div>
      )}
    </DoctorModal>
  );
}

export default ViewDoctorDash;
