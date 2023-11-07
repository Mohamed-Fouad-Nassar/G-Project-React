import { useRef } from "react";

import FootSection from "../../components/FootSection/FootSection";
import HeadSection from "../../components/HeadSection/HeadSection";
import MedicinesCard from "../../components/MedicinesCard/MedicinesCard";

import useSetTitle from "../../hooks/useSetTitle";

import medicine1 from "../../assets/images/medicines/abemaciclib-image.webp";
import medicine2 from "../../assets/images/medicines/Afinitor-image.jpeg";
import medicine3 from "../../assets/images/medicines/abraxane-image.jpg";

import styles from "./medicines.module.scss";
import { useSelector } from "react-redux";
import ErrorPage from "../ErrorPage/ErrorPage";

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

  let { medicines, loading, err } = useSelector((state) => state.medicines);

  return err ? (
    <ErrorPage err={err} />
  ) : loading ? (
    <div className="loading"></div>
  ) : (
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
              {medicines.map(({ id, name, category, pharmacies }) => (
                <MedicinesCard
                  key={id}
                  imgSrc={medicine1}
                  title={name}
                  category={category}
                  pharmacies={pharmacies}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <FootSection onClick={handleClick} />
    </div>
  );
}

export default Medicines;
