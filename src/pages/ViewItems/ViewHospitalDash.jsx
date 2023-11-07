import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import hospitalImg from "../../assets/images/pharmacies/pharmacy-image-3.jpg";

import DoctorModal from "../../components/Modals/DoctorModal";
import ModalImg from "../../components/Modals/ModalImg";
import ModalField from "../../components/Modals/ModalField";

import { getSingleHospital } from "../../store/slices/hospitalSlice";

import styles from "./viewDoctorDash.module.scss";

function ViewMedicineDash() {
  const { hospitalId } = useParams();
  const { singleHospital } = useSelector((state) => state.hospitals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleHospital(hospitalId));
  }, [dispatch, hospitalId]);

  return (
    <DoctorModal backUrl={"/dashboard/hospitals"} title={"hospital info"}>
      {singleHospital && (
        <div className={styles.felids}>
          <article className={styles.box}>
            <div className={styles["flex-sec"]}>
              <div className={styles["left-sec"]}>
                <ModalField title={"name"} value={singleHospital.name} />
                <ModalField
                  title={"location"}
                  value={singleHospital.location}
                />
                <ModalField
                  title={"phone number"}
                  value={singleHospital.phoneNumber}
                />
                <ModalField title={"email"} value={singleHospital.email} />
              </div>
              <div className={styles["right-sec"]}>
                <ModalImg src={hospitalImg} alt={"hospital image"} />
              </div>
            </div>
          </article>
          <ModalField
            title={"description"}
            value={singleHospital.description}
          />
          <article className={styles.box}>
            <label htmlFor="field">hospital social media:</label>
            <div className={styles["grid-sec"]} id="field">
              <ModalField title={"facebook"} value={singleHospital.facebook} />
              <ModalField
                title={"instagram"}
                value={singleHospital.instagram}
              />
              <ModalField title={"twitter"} value={singleHospital.twitter} />
              <ModalField title={"mail address"} value={singleHospital.email} />
              <ModalField title={"whatsapp"} value={singleHospital.whatsapp} />
            </div>
          </article>
        </div>
      )}
    </DoctorModal>
  );
}

export default ViewMedicineDash;
