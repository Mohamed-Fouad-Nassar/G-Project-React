import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import charityImg from "../../assets/images/charities/charities-image-5.jpg";

import DoctorModal from "../../components/Modals/DoctorModal";
import ModalImg from "../../components/Modals/ModalImg";
import ModalField from "../../components/Modals/ModalField";

import { getSingleCharity } from "../../store/slices/charitySlice";

import styles from "./viewDoctorDash.module.scss";

function ViewCharityDash() {
  const { charityId } = useParams();
  const { singleCharity } = useSelector((state) => state.charities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCharity(charityId));
  }, [dispatch, charityId]);

  return (
    <DoctorModal backUrl={"/dashboard/charities"} title={"charity info"}>
      {singleCharity && (
        <div className={styles.felids}>
          <article className={styles.box}>
            <div className={styles["flex-sec"]}>
              <div className={styles["left-sec"]}>
                <ModalField title={"name"} value={singleCharity.name} />
                <ModalField title={"location"} value={singleCharity.location} />
                <ModalField title={"e-mail"} value={singleCharity.email} />
                <ModalField
                  title={"phone number"}
                  value={singleCharity.phoneNumber}
                />
              </div>
              <div className={styles["right-sec"]}>
                <ModalImg src={charityImg} alt={"charity image"} />
              </div>
            </div>
          </article>
          <ModalField
            title={"charity info"}
            value={singleCharity.description}
          />
          <article className={styles.box}>
            <label htmlFor="field">charity social media:</label>
            <div className={styles["grid-sec"]} id="field">
              <ModalField title={"facebook"} value={singleCharity.facebook} />
              <ModalField title={"instagram"} value={singleCharity.instagram} />
              <ModalField title={"twitter"} value={singleCharity.twitter} />
              <ModalField title={"mail address"} value={singleCharity.email} />
              <ModalField title={"whatsapp"} value={singleCharity.whatsapp} />
            </div>
          </article>
        </div>
      )}
    </DoctorModal>
  );
}

export default ViewCharityDash;
