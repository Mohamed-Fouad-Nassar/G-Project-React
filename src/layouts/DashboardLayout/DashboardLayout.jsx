import { Outlet } from "react-router-dom";

import TopButton from "../../components/TopButton/TopButton";
import Footer from "../../components/Footer/Footer";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import AsideLi from "../../components/Aside/AsideLi";

import styles from "./dashboardLayout.module.scss";

function DashboardLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Aside>
          <AsideLi
            type="link"
            icon="fa-regular fa-chart-bar"
            title="Dashboard"
            href="/dashboard"
          />
          <AsideLi
            type="link"
            icon="fa-solid fa-user-doctor"
            title="doctors"
            href="/dashboard/doctors"
          />
          <AsideLi
            type="link"
            icon="fa-solid fa-pills"
            title="medicines"
            href="/dashboard/medicines"
          />
          <AsideLi
            type="link"
            icon="fa-solid fa-hospital"
            title="hospitals"
            href="/dashboard/hospitals"
          />
          <AsideLi
            type="link"
            icon="fa-solid fa-house-medical"
            title="pharmacies"
            href="/dashboard/pharmacies"
          />
          <AsideLi
            type="link"
            icon="fa-solid fa-book-open-reader"
            title="blog"
            href="/dashboard/blog"
          />
          <AsideLi
            type="link"
            icon="fa-solid fa-hand-holding-heart"
            title="charities"
            href="/dashboard/charities"
          />
        </Aside>
        <Outlet />
        <TopButton />
      </main>
      <Footer />
    </>
  );
}

export default DashboardLayout;
