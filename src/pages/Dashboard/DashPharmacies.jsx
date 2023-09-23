import DashHeadSec from "../../components/DashHeadSec/DashHeadSec";
import DashInfoSection from "../../components/DashInfoSection/DashInfoSection";
import Table from "../../components/Table/Table";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./dashControl.module.scss";

function DashPharmacies() {
  useSetTitle("pharmacies dashboard");

  return (
    <>
      <section className={styles.content}>
        <div>
          <DashHeadSec title="pharmacies" />
          <div className={styles["sec-body"]}>
            <DashInfoSection
              href="#add-new-pharmacy"
              number="10"
              isReverse={true}
            />
            <div className={styles.control}>
              <Table />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashPharmacies;
