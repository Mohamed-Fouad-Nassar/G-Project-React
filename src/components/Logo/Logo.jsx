import { Link } from "react-router-dom";

import logo from "../../assets/images/default/logo.png";

import styles from "./logo.module.scss";

function Logo({ href }) {
  return (
    <div className={styles.logo}>
      <Link to={href}>
        <img src={logo} alt="logo-image" />
      </Link>
    </div>
  );
}

export default Logo;
