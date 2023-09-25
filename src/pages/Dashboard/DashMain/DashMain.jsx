import DashInfoSectionDiv from "../../../components/DashInfoSectionDiv/DashInfoSectionDiv";
import DashInfoSection from "../../../components/DashInfoSection/DashInfoSection";

import useSetTitle from "../../../hooks/useSetTitle";

import styles from "./dashMain.module.scss";

function DashMain() {
  useSetTitle("dashboard");

  return (
    <section className={styles.content}>
      <DashInfoSectionDiv title="doctors">
        <DashInfoSection href="/add-new-doctor" number="10" />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="medicines">
        <DashInfoSection href="/add-new-medicine" number="100" />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="Hospitals">
        <DashInfoSection href="/add-new-hospital" number="15" />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="Pharmacies">
        <DashInfoSection href="/add-new-pharmacy" number="30" />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="Blog">
        <DashInfoSection href="/add-new-article" number="20" />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="Charities">
        <DashInfoSection href="/add-new-Charity" number="4" />
      </DashInfoSectionDiv>
    </section>
  );
}

export default DashMain;
