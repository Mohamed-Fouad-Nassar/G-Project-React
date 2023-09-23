import { useRef } from "react";

import FootSection from "../../components/FootSection/FootSection";
import HeadSection from "../../components/HeadSection/HeadSection";
import MedicinesCard from "../../components/MedicinesCard/MedicinesCard";

import useSetTitle from "../../hooks/useSetTitle";

import medicine1 from "../../assets/images/medicines/abemaciclib-image.webp";
import medicine2 from "../../assets/images/medicines/Afinitor-image.jpeg";
import medicine3 from "../../assets/images/medicines/abraxane-image.jpg";

import styles from "./medicines.module.scss";

function Medicines() {
  useSetTitle("Medicines");

  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  const handleClick = () => {
    console.log("medicines handle click function");
  };

  const menuRef = useRef();
  const openFilterMenu = () => {
    menuRef.current.classList.toggle(`${styles.open}`);
  };

  return (
    <div className={`${styles.container} container`}>
      <HeadSection title="medicines" description={description} />
      <div className={styles["sec-body"]}>
        <section className={styles.med}>
          <button className={styles.filter} onClick={openFilterMenu}>
            <i className={`${styles["f-icon"]} fa-solid fa-bars`}></i>
          </button>
          <div className={styles.cards}>
            <div ref={menuRef} className={styles["left-side"]}>
              <h2>categories</h2>
              <ul className={styles.categories}>
                <li>
                  <a>all</a>
                </li>
                <li>
                  <a>cat1</a>
                </li>
                <li>
                  <a>cat2</a>
                </li>
                <li>
                  <a>cat3</a>
                </li>
                <li>
                  <a>cat4</a>
                </li>
                <li>
                  <a>cat5</a>
                </li>
                <li>
                  <a>cat6</a>
                </li>
              </ul>
            </div>
            <div className={styles["right-side"]}>
              <MedicinesCard
                imgSrc={medicine1}
                title="medicine 1 title"
                category="medicine 1 category"
                pharmacies={[
                  { name: "ph1", id: "11" },
                  { name: "ph2", id: "12" },
                ]}
              />
              <MedicinesCard
                imgSrc={medicine2}
                title="medicine 2 title"
                category="medicine 2 category"
                pharmacies={[
                  { name: "ph1", id: "11" },
                  { name: "ph2", id: "12" },
                ]}
              />
              <MedicinesCard
                imgSrc={medicine3}
                title="medicine 3 title"
                category="medicine 3 category"
                pharmacies={[
                  { name: "ph1", id: "11" },
                  { name: "ph2", id: "12" },
                  { name: "ph3", id: "13" },
                  { name: "ph4", id: "14" },
                ]}
              />
              <MedicinesCard
                imgSrc={medicine1}
                title="medicine 4 title"
                category="medicine 1 category"
                pharmacies={[
                  { name: "ph1", id: "11" },
                  { name: "ph2", id: "12" },
                ]}
              />
              <MedicinesCard
                imgSrc={medicine2}
                title="medicine 5 title"
                category="medicine 2 category"
                pharmacies={[
                  { name: "ph1", id: "11" },
                  { name: "ph2", id: "12" },
                ]}
              />
              <MedicinesCard
                imgSrc={medicine3}
                title="medicine 6 title"
                category="medicine 3 category"
                pharmacies={[
                  { name: "ph1", id: "11" },
                  { name: "ph2", id: "12" },
                  { name: "ph3", id: "13" },
                  { name: "ph4", id: "14" },
                ]}
              />
            </div>
          </div>
        </section>
      </div>
      <FootSection onClick={handleClick} />
    </div>
  );
}

export default Medicines;
