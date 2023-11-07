import FootSection from "../FootSection/FootSection";
import HeadSection from "../HeadSection/HeadSection";
import MedicinesCard from "../MedicinesCard/MedicinesCard";

import medicine2 from "../../assets/images/medicines/abemaciclib-image.webp";

import styles from "./medicines.module.scss";
import { useSelector } from "react-redux";

function Medicines() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  const { medicines } = useSelector((state) => state.medicines);

  return (
    <section className={styles.medicine} id="medicines">
      <div className={`${styles.container} container`}>
        <HeadSection title="medicines" description={description} />
        <div className={styles["sec-body"]}>
          {medicines.slice(0, 3).map(({ id, name, category, pharmacies }) => {
            return (
              <MedicinesCard
                key={id}
                imgSrc={medicine2}
                title={name}
                category={category}
                pharmacies={pharmacies}
              />
            );
          })}
          {/* <MedicinesCard
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
          /> */}
        </div>
        <FootSection type="link" targetPage="/medicines" />
      </div>
    </section>
  );
}

export default Medicines;
