import DashHeadSec from "../../components/DashHeadSec/DashHeadSec";
import DashInfoSection from "../../components/DashInfoSection/DashInfoSection";
import Table from "../../components/Table/Table";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./dashControl.module.scss";

function DashHospitals() {
  useSetTitle("hospitals dashboard");

  return (
    <>
      <section className={styles.content}>
        <div>
          <DashHeadSec title="hospitals" />
          <div className={styles["sec-body"]}>
            <DashInfoSection
              href="#add-new-hospital"
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

export default DashHospitals;
