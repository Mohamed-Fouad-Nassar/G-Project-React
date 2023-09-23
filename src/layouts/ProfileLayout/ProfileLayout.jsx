import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TopButton from "../../components/TopButton/TopButton";
import AsideLi from "../../components/Aside/AsideLi";
import Aside from "../../components/Aside/Aside";

import styles from "./profileLayout.module.scss";

function ProfileLayout() {
  const handleLogOut = () => {
    console.log("log out handle click");
  };

  return (
    <>
      <Header />
      <main>
        <div className={`${styles.container} container`}>
          <Aside>
            <AsideLi
              type="link"
              icon="fa-solid fa-user"
              title="personal info"
              href="/profile"
            />
            <AsideLi
              type="link"
              icon="fa-solid fa-cart-shopping"
              title="orders"
              href="/profile/orders"
            />
            <AsideLi
              type="link"
              icon="fa-solid fa-pills"
              title="medicines"
              href="/profile/medicines"
            />
            <AsideLi
              type="link"
              icon="fa-solid fa-thumbs-up"
              title="liked articles"
              href="/profile/liked-articles"
            />
            <AsideLi
              type="link"
              icon="fa-solid fa-bookmark"
              title="saved articles"
              href="/profile/saved-articles"
            />
            <AsideLi
              type="btn"
              icon="fa-solid fa-arrow-right-from-bracket"
              title="log out"
              onClick={handleLogOut}
              isDanger={true}
            />
          </Aside>
          <Outlet />
        </div>
        <TopButton />
      </main>
      <Footer />
    </>
  );
}

export default ProfileLayout;
