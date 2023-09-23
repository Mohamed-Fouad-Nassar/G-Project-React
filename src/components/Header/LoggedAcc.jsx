import Notification from "./Notification";
import Themes from "./Themes";
import Account from "./Account";

import avatar from "../../assets/images/default/avatar-image-male.png";

import styles from "./loggedAcc.module.scss";

function LoggedAcc() {
  return (
    <div className={styles["logged-account"]}>
      <Notification icon="fa-solid fa-bell" link="/notifications" number="3" />
      <Notification icon="fa-solid fa-cart-shopping" link="/cart" number="3" />
      <Themes />
      <Account avatar={avatar} />
    </div>
  );
}

export default LoggedAcc;
