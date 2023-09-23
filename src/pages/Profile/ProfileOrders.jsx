import FootSection from "../../components/FootSection/FootSection";

import useSetTitle from "../../hooks/useSetTitle";

import medicineImage from "../../assets/images/default/medicine-image.jpg";
import pharmacyImage from "../../assets/images/default/pharmacy-image.jpg";

import styles from "./profileOrders.module.scss";

function ProfileOrders() {
  useSetTitle("Profile Orders");

  const handleClick = () => {
    console.log("profile orders handle click");
  };

  return (
    <section className={styles.content}>
      <div className={styles.filter}>
        <ul>
          <li data-content=".all">
            <a href="#">all</a>
          </li>
          <li data-content="#running">
            <a href="#">running</a>
          </li>
          <li data-content="#pending">
            <a href="#">pending</a>
          </li>
          <li data-content="#completed">
            <a href="#">completed</a>
          </li>
        </ul>
      </div>
      <div className={styles["sec-body"]}>
        <div className={styles.order}>
          <h2>order 1</h2>
          <div className={styles["order-info"]}>
            <h3>order info</h3>
            <div className={styles["order-info-cont"]}>
              <div className={styles.image}>
                <img src={pharmacyImage} alt="pharmacy-image" />
              </div>
              <div className={styles.grid}>
                <article className={styles.name}>
                  <span>pharmacy name</span>
                  <span>el-ezaby</span>
                </article>
                <article className={styles.cycle}>
                  <span>remaining cycles</span>
                  <span>3</span>
                </article>
                <article className={styles["time-dif"]}>
                  <span>days between cycles</span>
                  <span>15</span>
                </article>
                <article className={styles.status}>
                  <span>order status</span>
                  <span>running</span>
                </article>
              </div>
            </div>
          </div>
          <div className={styles["order-cont"]}>
            <h3>order content</h3>
            <div className={styles["order-cont-cont"]}>
              <article className={styles.box}>
                <div className={styles.image}>
                  <img src={medicineImage} alt={`${medicineImage}-image`} />
                </div>
                <div className={styles.info}>
                  <span>medicine name</span>
                  <span>category</span>
                </div>
              </article>
              <article className={styles.box}>
                <div className={styles.image}>
                  <img src={medicineImage} alt={`${medicineImage}-image`} />
                </div>
                <div className={styles.info}>
                  <span>medicine name</span>
                  <span>category</span>
                </div>
              </article>
              <article className={styles.box}>
                <div className={styles.image}>
                  <img src={medicineImage} alt={`${medicineImage}-image`} />
                </div>
                <div className={styles.info}>
                  <span>medicine name</span>
                  <span>category</span>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className={styles.order}>
          <h2>order 2</h2>
          <div className={styles["order-info"]}>
            <h3>order info</h3>
            <div className={styles["order-info-cont"]}>
              <div className={styles.image}>
                <img src={pharmacyImage} alt="pharmacy-image" />
              </div>
              <div className={styles.grid}>
                <article className={styles.name}>
                  <span>pharmacy name</span>
                  <span>el-ezaby</span>
                </article>
                <article className={styles.cycle}>
                  <span>remaining cycles</span>
                  <span>3</span>
                </article>
                <article className={styles["time-dif"]}>
                  <span>days between cycles</span>
                  <span>15</span>
                </article>
                <article className={styles.status}>
                  <span>order status</span>
                  <span>running</span>
                </article>
              </div>
            </div>
          </div>
          <div className={styles["order-cont"]}>
            <h3>order content</h3>
            <div className={styles["order-cont-cont"]}>
              <article className={styles.box}>
                <div className={styles.image}>
                  <img src={medicineImage} alt={`${medicineImage}-image`} />
                </div>
                <div className={styles.info}>
                  <span>medicine name</span>
                  <span>category</span>
                </div>
              </article>
              <article className={styles.box}>
                <div className={styles.image}>
                  <img src={medicineImage} alt={`${medicineImage}-image`} />
                </div>
                <div className={styles.info}>
                  <span>medicine name</span>
                  <span>category</span>
                </div>
              </article>
              <article className={styles.box}>
                <div className={styles.image}>
                  <img src={medicineImage} alt={`${medicineImage}-image`} />
                </div>
                <div className={styles.info}>
                  <span>medicine name</span>
                  <span>category</span>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className={styles.order}>
          <h2>order 3</h2>
          <div className={styles["order-info"]}>
            <h3>order info</h3>
            <div className={styles["order-info-cont"]}>
              <div className={styles.image}>
                <img src={pharmacyImage} alt="pharmacy-image" />
              </div>
              <div className={styles.grid}>
                <article className={styles.name}>
                  <span>pharmacy name</span>
                  <span>el-ezaby</span>
                </article>
                <article className={styles.cycle}>
                  <span>remaining cycles</span>
                  <span>3</span>
                </article>
                <article className={styles["time-dif"]}>
                  <span>days between cycles</span>
                  <span>15</span>
                </article>
                <article className={styles.status}>
                  <span>order status</span>
                  <span>running</span>
                </article>
              </div>
            </div>
          </div>
          <div className={styles["order-cont"]}>
            <h3>order content</h3>
            <div className={styles["order-cont-cont"]}>
              <article className={styles.box}>
                <div className={styles.image}>
                  <img src={medicineImage} alt={`${medicineImage}-image`} />
                </div>
                <div className={styles.info}>
                  <span>medicine name</span>
                  <span>category</span>
                </div>
              </article>
              <article className={styles.box}>
                <div className={styles.image}>
                  <img src={medicineImage} alt={`${medicineImage}-image`} />
                </div>
                <div className={styles.info}>
                  <span>medicine name</span>
                  <span>category</span>
                </div>
              </article>
              <article className={styles.box}>
                <div className={styles.image}>
                  <img src={medicineImage} alt={`${medicineImage}-image`} />
                </div>
                <div className={styles.info}>
                  <span>medicine name</span>
                  <span>category</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <FootSection className={styles["sec-foot"]} onClick={handleClick} />
    </section>
  );
}

export default ProfileOrders;
