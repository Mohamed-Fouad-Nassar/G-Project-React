import FootSection from "../FootSection/FootSection";
import HeadSection from "../HeadSection/HeadSection";
import MedicinesCard from "../MedicinesCard/MedicinesCard";

import medicine1 from "../../assets/images/medicines/Afinitor-image.jpeg";
import medicine2 from "../../assets/images/medicines/abemaciclib-image.webp";
import medicine3 from "../../assets/images/medicines/abraxane-image.jpg";

import styles from "./medicines.module.scss";

function Medicines() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  return (
    <section className={styles.medicine} id="medicines">
      <div className={`${styles.container} container`}>
        <HeadSection title="medicines" description={description} />
        <div className={styles["sec-body"]}>
          <MedicinesCard
            imgSrc={medicine1}
            title="afinitor"
            category="breast cancer"
            pharmacies={[
              { name: "ph1", id: "11" },
              { name: "ph2", id: "12" },
              { name: "ph3", id: "13" },
            ]}
          />
          <MedicinesCard
            imgSrc={medicine2}
            title="abemaciclib"
            category="breast cancer"
            pharmacies={[
              { name: "ph2", id: "12" },
              { name: "ph3", id: "13" },
            ]}
          />
          <MedicinesCard
            imgSrc={medicine3}
            title="abraxane"
            category="breast cancer"
            pharmacies={[
              { name: "ph1", id: "11" },
              { name: "ph2", id: "12" },
            ]}
          />
        </div>
        <FootSection type="link" targetPage="/medicines" />
      </div>
    </section>
  );
}

export default Medicines;
