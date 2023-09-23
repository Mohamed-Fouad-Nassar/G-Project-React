import DashInfoSection from "../../components/DashInfoSection/DashInfoSection";
import Table from "../../components/Table/Table";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./profileMedicines.module.scss";

function ProfileMedicines() {
  useSetTitle("Profile Medicines");

  return (
    <section className={styles.content}>
      <h2>manage medicines</h2>
      <div className={styles["sec-body"]}>
        <DashInfoSection
          href="#add-new-medicine"
          number="100"
          isReverse={true}
        />
        <div className={styles.control}>
          <Table />
        </div>
      </div>
    </section>
  );
}

export default ProfileMedicines;
