import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import medicineImg from "../../assets/images/medicines/abraxane-image.jpg";

import DoctorModal from "../../components/Modals/DoctorModal";
import ModalImg from "../../components/Modals/ModalImg";
import ModalField from "../../components/Modals/ModalField";

import { getSingleMedicine } from "../../store/slices/medicineSlice";

import styles from "./viewDoctorDash.module.scss";

function ViewMedicineDash() {
  const { medicineId } = useParams();
  const { singleMedicine } = useSelector((state) => state.medicines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleMedicine(medicineId));
  }, [dispatch, medicineId]);

  return (
    <DoctorModal backUrl={"/dashboard/medicines"} title={"medicine info"}>
      {singleMedicine && (
        <div className={styles.felids}>
          <article className={styles.box}>
            <div className={styles["flex-sec"]}>
              <div className={styles["left-sec"]}>
                <ModalField title={"name"} value={singleMedicine.name} />
                <ModalField
                  title={"category"}
                  value={singleMedicine.category}
                />
                <ModalField
                  title={"creation date"}
                  value={new Date(singleMedicine.creationAt).toDateString()}
                />
                <ModalField
                  title={"last update date"}
                  value={new Date(singleMedicine.updatedAt).toDateString()}
                />
              </div>
              <div className={styles["right-sec"]}>
                <ModalImg src={medicineImg} alt={"medicine image"} />
              </div>
            </div>
          </article>
        </div>
      )}
    </DoctorModal>
  );
}

export default ViewMedicineDash;
