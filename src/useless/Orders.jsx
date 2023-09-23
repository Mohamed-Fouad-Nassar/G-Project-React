// import { Outlet } from "react-router-dom";

import Aside from "../components/Aside/Aside";
import AsideLi from "../components/Aside/AsideLi";

import avatar from "../../assets/images/default/avatar-image-female.png";

import styles from "./orders.module.scss";
import OrderMessage from "../pages/Orders/OrderMessage";

function Orders() {
  const handleClick = () => {
    console.log("handle order click");
  };

  return (
    <div className={`${styles.container} container`}>
      <h2>messages</h2>
      <section className={styles.content}>
        <Aside className={styles.aside}>
          <AsideLi
            type="buttonImg"
            title="order title"
            imgSrc={avatar}
            onClick={handleClick}
          />
          <AsideLi
            type="buttonImg"
            title="order title"
            imgSrc={avatar}
            onClick={handleClick}
          />
          <AsideLi
            type="buttonImg"
            title="order title"
            imgSrc={avatar}
            onClick={handleClick}
          />
        </Aside>
        {/* <Outlet /> */}
        <OrderMessage className={styles.message} />
      </section>
    </div>
  );
}

export default Orders;

// <Aside>
//   <AsideLi
//     type="link"
//     icon="fa-solid fa-user"
//     title="personal info"
//     href="#personal-info"
//   />
//   <AsideLi
//     type="link"
//     icon="fa-solid fa-cart-shopping"
//     title="orders"
//     href="#orders"
//   />
//   <AsideLi
//     type="link"
//     icon="fa-solid fa-pills"
//     title="medicines"
//     href="#medicines"
//   />
//   <AsideLi
//     type="link"
//     icon="fa-solid fa-thumbs-up"
//     title="liked articles"
//     href="#liked-articles"
//   />
//   <AsideLi
//     type="link"
//     icon="fa-solid fa-bookmark"
//     title="saved articles"
//     href="#saved-articles"
//   />
//   <AsideLi
//     type="button"
//     icon="fa-solid fa-arrow-right-from-bracket"
//     title="log out"
//     onClick={handleLogOut}
//     isDanger={true}
//   />
// </Aside>;
