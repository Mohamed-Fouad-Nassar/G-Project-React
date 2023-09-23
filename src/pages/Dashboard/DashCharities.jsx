import DashHeadSec from "../../components/DashHeadSec/DashHeadSec";
import DashInfoSection from "../../components/DashInfoSection/DashInfoSection";
import Table from "../../components/Table/Table";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./dashControl.module.scss";

function DashCharities() {
  useSetTitle("charities dashboard");

  return (
    <>
      <section className={styles.content}>
        <div>
          <DashHeadSec title="charities" />
          <div className={styles["sec-body"]}>
            <DashInfoSection
              href="#add-new-charity"
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

export default DashCharities;
