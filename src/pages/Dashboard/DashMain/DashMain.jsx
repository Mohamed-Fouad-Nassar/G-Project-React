import { useSelector } from "react-redux";

import DashInfoSection from "../../../components/DashInfoSection/DashInfoSection";
import DashInfoSectionDiv from "../../../components/DashInfoSectionDiv/DashInfoSectionDiv";

import useSetTitle from "../../../hooks/useSetTitle";

import styles from "./dashMain.module.scss";

function DashMain() {
  useSetTitle("dashboard");

  const { doctors } = useSelector((state) => state.doctors);
  const { medicines } = useSelector((state) => state.medicines);
  const { hospitals } = useSelector((state) => state.hospitals);
  const { pharmacies } = useSelector((state) => state.pharmacies);
  const { articles } = useSelector((state) => state.articles);
  const { charities } = useSelector((state) => state.charities);
  const { users } = useSelector((state) => state.users);

  return (
    <section className={styles.content}>
      <DashInfoSectionDiv title="doctors">
        <DashInfoSection href="/add-new-doctor" number={doctors.length} />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="medicines">
        <DashInfoSection href="/add-new-medicine" number={medicines.length} />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="Hospitals">
        <DashInfoSection href="/add-new-hospital" number={hospitals.length} />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="Pharmacies">
        <DashInfoSection href="/add-new-pharmacy" number={pharmacies.length} />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="Blog">
        <DashInfoSection href="/add-new-article" number={articles.length} />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="Charities">
        <DashInfoSection href="/add-new-Charity" number={charities.length} />
      </DashInfoSectionDiv>
      <DashInfoSectionDiv title="Users">
        <DashInfoSection href="#add-new-user" number={users.length} />
      </DashInfoSectionDiv>
    </section>
  );
}

export default DashMain;
