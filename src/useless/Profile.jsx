// import { Outlet } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import AsideLi from "../components/Aside/AsideLi";

import ViewProfile from "../pages/Profile/ViewProfile";
import Orders from "../pages/Profile/ProfileOrders";
import Articles from "../pages/Profile/Articles";
import Medicines from "../pages/Profile/ProfileMedicines";

import avatar from "../../assets/images/default/avatar-image-male.png";

import styles from "./profile.module.scss";

function Profile() {
  const handleLogOut = () => {
    console.log("log out handle click");
  };

  return (
    <div className={`${styles.container} container`}>
      <Aside>
        <AsideLi
          type="link"
          icon="fa-solid fa-user"
          title="personal info"
          href="#personal-info"
        />
        <AsideLi
          type="link"
          icon="fa-solid fa-cart-shopping"
          title="orders"
          href="#orders"
        />
        <AsideLi
          type="link"
          icon="fa-solid fa-pills"
          title="medicines"
          href="#medicines"
        />
        <AsideLi
          type="link"
          icon="fa-solid fa-thumbs-up"
          title="liked articles"
          href="#liked-articles"
        />
        <AsideLi
          type="link"
          icon="fa-solid fa-bookmark"
          title="saved articles"
          href="#saved-articles"
        />
        <AsideLi
          type="btn"
          icon="fa-solid fa-arrow-right-from-bracket"
          title="log out"
          onClick={handleLogOut}
          isDanger={true}
        />
      </Aside>
      {/* <Outlet /> */}
      {/* <ViewProfile
        avatar={avatar}
        accountName="account name"
        userName="userName"
        href="#edit-profile"
        firstName="john"
        lastName="doe"
        email="leosx.as@mn.ci"
        birthDate={new Date("January 23, 2002")}
        gender="male"
        phoneNumber="+201034648924"
        address="street name - city - country"
      /> */}
      <Orders />
      {/* <Articles /> */}
      {/* <Medicines /> */}
    </div>
  );
}

export default Profile;
