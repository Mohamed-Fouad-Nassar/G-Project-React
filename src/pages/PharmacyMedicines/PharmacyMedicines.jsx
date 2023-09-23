import BackBtn from "../../components/BackBtn/BackBtn";
import CardForm from "../../components/CardForm/CardForm";
import FootSection from "../../components/FootSection/FootSection";

import medicine1 from "../../assets/images/default/medicine-image.jpg";
import medicine2 from "../../assets/images/default/medicine-image-2.jpg";
import medicine3 from "../../assets/images/default/medicine-image-3.jpg";

import styles from "./pharmacyMedicines.module.scss";

function PharmacyMedicines() {
  const handleLoadMore = () => {
    console.log("handle load more medicines function");
  };

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.medicines}>
        <BackBtn />
        <h1>pharmacy - medicines</h1>
        <div className={styles.filter}>
          <ul>
            <li>
              <button className={styles.active}>all</button>
            </li>
            <li>
              <button>cat-1</button>
            </li>
            <li>
              <button>cat-2</button>
            </li>
            <li>
              <button>cat-3</button>
            </li>
            <li>
              <button>cat-4</button>
            </li>
          </ul>
        </div>
        <div className={styles.cards}>
          <CardForm
            imgSrc={medicine1}
            id="1100"
            title="medicine 1 name"
            category="cat-1"
          />
          <CardForm
            imgSrc={medicine2}
            id="1200"
            title="medicine 2 name"
            category="cat-3"
          />
          <CardForm
            imgSrc={medicine3}
            id="1300"
            title="medicine 3 name"
            category="cat-2"
          />
          <CardForm
            imgSrc={medicine1}
            id="1400"
            title="medicine 4 name"
            category="cat-1"
          />
          <CardForm
            imgSrc={medicine2}
            id="1500"
            title="medicine 5 name"
            category="cat-4"
          />
          <CardForm
            imgSrc={medicine3}
            id="1600"
            title="medicine 6 name"
            category="cat-3"
          />
          <CardForm
            imgSrc={medicine1}
            id="1700"
            title="medicine 7 name"
            category="cat-3"
          />
          <CardForm
            imgSrc={medicine2}
            id="1800"
            title="medicine 8 name"
            category="cat-4"
          />
        </div>
        <FootSection onClick={handleLoadMore} />
      </div>
    </div>
  );
}

export default PharmacyMedicines;
