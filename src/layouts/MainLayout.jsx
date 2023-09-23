import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TopButton from "../components/TopButton/TopButton";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <TopButton />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
