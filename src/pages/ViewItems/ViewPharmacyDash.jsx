import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import pharmacyImg from "../../assets/images/pharmacies/pharmacy-image-3.jpg";

import ModalImg from "../../components/Modals/ModalImg";
import ModalField from "../../components/Modals/ModalField";
import DoctorModal from "../../components/Modals/DoctorModal";

import { getSinglePharmacy } from "../../store/slices/pharmacySlice";

import styles from "./viewDoctorDash.module.scss";

function ViewPharmacyDash() {
  const { pharmacyId } = useParams();
  const { singlePharmacy } = useSelector((state) => state.pharmacies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePharmacy(pharmacyId));
  }, [dispatch, pharmacyId]);

  return (
    <DoctorModal backUrl={"/dashboard/Pharmacies"} title={"Pharmacy info"}>
      {singlePharmacy && (
        <div className={styles.felids}>
          <article className={styles.box}>
            <div className={styles["flex-sec"]}>
              <div className={styles["left-sec"]}>
                <ModalField title={"name"} value={singlePharmacy.name} />
                <ModalField
                  title={"location"}
                  value={singlePharmacy.location}
                />
                <ModalField
                  title={"phone number"}
                  value={singlePharmacy.phoneNumber}
                />
                <ModalField title={"email"} value={singlePharmacy.email} />
              </div>
              <div className={styles["right-sec"]}>
                <ModalImg src={pharmacyImg} alt={"pharmacy image"} />
              </div>
            </div>
          </article>
          <ModalField
            title={"description"}
            value={singlePharmacy.description}
          />
          <article className={styles.box}>
            <label htmlFor="field">hospital social media:</label>
            <div className={styles["grid-sec"]} id="field">
              <ModalField title={"facebook"} value={singlePharmacy.facebook} />
              <ModalField
                title={"instagram"}
                value={singlePharmacy.instagram}
              />
              <ModalField title={"twitter"} value={singlePharmacy.twitter} />
              <ModalField title={"mail address"} value={singlePharmacy.email} />
              <ModalField title={"whatsapp"} value={singlePharmacy.whatsapp} />
            </div>
          </article>
        </div>
      )}
    </DoctorModal>
  );
}

export default ViewPharmacyDash;
