import BackBtn from "../../components/BackBtn/BackBtn";

import medicineImg from "../../assets/images/default/medicine-image.jpg";

import styles from "./orderMessage.module.scss";

function OrderMessage({ className }) {
  let name, phoneNumber, address, email;

  return (
    <div className={`${styles.message} ${className}`}>
      <BackBtn />
      <div className={styles.order}>
        <h2>order 1</h2>
        <div className={styles["order-info"]}>
          <h3>order info</h3>
          <div className={styles["order-info-cont"]}>
            <div className={styles.image}>
              {/* <img src={pharmacyImage} alt="pharmacy-image" /> */}
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
                <img src={medicineImg} alt={`${medicineImg}-image`} />
              </div>
              <div className={styles.info}>
                <span>medicine name</span>
                <span>category</span>
              </div>
            </article>
            <article className={styles.box}>
              <div className={styles.image}>
                <img src={medicineImg} alt={`${medicineImg}-image`} />
              </div>
              <div className={styles.info}>
                <span>medicine name</span>
                <span>category</span>
              </div>
            </article>
            <article className={styles.box}>
              <div className={styles.image}>
                <img src={medicineImg} alt={`${medicineImg}-image`} />
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
  );
}
// <div className={styles["order-info"]}>
//   <article className={styles.cycle}>
//     <span>remaining cycles</span>
//     <span>3</span>
//   </article>
//   <article className={styles["time-dif"]}>
//     <span>days between cycles</span>
//     <span>15</span>
//   </article>
//   <article className={styles.status}>
//     <span>order status</span>
//     <span>pending</span>
//   </article>
// </div>
// <div className={styles["order-content"]}>
//   {/* start box */}
//   <article className="box">
//     <div className="image">
//       <img src="../Data/Images/medicine.jpg" alt="medicine-image" />
//     </div>
//     <div className="info">
//       <span>medicine name</span>
//       <span>category</span>
//     </div>
//   </article>
//   {/* end box */}
//   {/* start box */}
//   <article className="box">
//     <div className="image">
//       <img src="../Data/Images/medicine.jpg" alt="medicine-image" />
//     </div>
//     <div className="info">
//       <span>medicine name</span>
//       <span>category</span>
//     </div>
//   </article>
//   {/* end box */}
//   {/* start box */}
//   <article className="box">
//     <div className="image">
//       <img src="../Data/Images/medicine.jpg" alt="medicine-image" />
//     </div>
//     <div className="info">
//       <span>medicine name</span>
//       <span>category</span>
//     </div>
//   </article>
//   {/* end box */}
//   {/* start box */}
//   <article className="box">
//     <div className="image">
//       <img src="../Data/Images/medicine.jpg" alt="medicine-image" />
//     </div>
//     <div className="info">
//       <span>medicine name</span>
//       <span>category</span>
//     </div>
//   </article>
//   {/* end box */}
//   {/* start box */}
//   <article className="box">
//     <div className="image">
//       <img src="../Data/Images/medicine.jpg" alt="medicine-image" />
//     </div>
//     <div className="info">
//       <span>medicine name</span>
//       <span>category</span>
//     </div>
//   </article>
//   {/* end box */}
//   {/* start box */}
//   <article className="box">
//     <div className="image">
//       <img src="../Data/Images/medicine.jpg" alt="medicine-image" />
//     </div>
//     <div className="info">
//       <span>medicine name</span>
//       <span>category</span>
//     </div>
//   </article>
//   {/* end box */}
//   {/* start box */}
//   <article className="box">
//     <div className="image">
//       <img src="../Data/Images/medicine.jpg" alt="medicine-image" />
//     </div>
//     <div className="info">
//       <span>medicine name</span>
//       <span>category</span>
//     </div>
//   </article>
//   {/* end box */}
//   {/* start box */}
//   <article className="box">
//     <div className="image">
//       <img src="../Data/Images/medicine.jpg" alt="medicine-image" />
//     </div>
//     <div className="info">
//       <span>medicine name</span>
//       <span>category</span>
//     </div>
//   </article>
//   {/* end box */}
// </div>
// <div className={styles["user-info"]}>
//   <div className={styles.box}>
//     <span>name: </span>
//     <span>{name}</span>
//   </div>
//   <div className={styles.box}>
//     <span>phone: </span>
//     <span>{phoneNumber}</span>
//   </div>
//   <div className={styles.box}>
//     <span>address: </span>
//     <span>{address}</span>
//   </div>
//   <div className={styles.box}>
//     <span>email: </span>
//     <span>{email}</span>
//   </div>
// </div>

export default OrderMessage;
