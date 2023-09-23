import { Link } from "react-router-dom";

import styles from "./footerLinks.module.scss";

function FooterLinks() {
  return (
    <ul className={styles.links}>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/doctors">doctors</Link>
      </li>
      <li>
        <Link to="/medicines">medicines</Link>
      </li>
      <li>
        <Link to="/hospitals">hospitals</Link>
      </li>
      <li>
        <Link to="/pharmacies">pharmacies</Link>
      </li>
      <li>
        <Link to="/blog">our blog</Link>
      </li>
      <li>
        <Link to="/charities">charities</Link>
      </li>
    </ul>
  );
}

export default FooterLinks;
