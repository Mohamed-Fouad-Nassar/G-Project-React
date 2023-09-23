import { Outlet } from "react-router-dom";

import Aside from "../../components/Aside/Aside";
import AsideLi from "../../components/Aside/AsideLi";
import Header from "../../components/Header/Header";

import avatar from "../../assets/images/default/avatar-image-female.png";

import styles from "./notificationsLayout.module.scss";
import TopButton from "../../components/TopButton/TopButton";
import Footer from "../../components/Footer/Footer";

function NotificationsLayout() {
  const handleClick = () => {
    console.log("handle order click");
  };

  return (
    <>
      <Header />
      <main>
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
            <Outlet />
          </section>
        </div>
        <TopButton />
      </main>
      <Footer />
    </>
  );
}

export default NotificationsLayout;
