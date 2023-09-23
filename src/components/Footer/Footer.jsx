import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import SocialMediaDiv from "../SocialMediaDiv/SocialMediaDiv";
import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";
import FooterBlog from "./FooterBlog";
import FooterLinks from "./FooterLinks";

import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={`${styles.container} container`}>
        <div className={styles["f-info"]}>
          <Logo href="/" />
          <div className={styles["f-text"]}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              commodi eveniet aspernatur obcaecati, itaque temporibus at
              quibusdam nostrum nulla, esse veniam aut, amet sunt eius molestiae
              repellat voluptas quaerat quidem?
            </p>
          </div>
          <SocialMediaDiv>
            <SocialMediaLink
              href="https://www.facebook.com/"
              icon="fa-brands fa-facebook-f"
            />
            <SocialMediaLink
              href="https://www.instagram.com/"
              icon="fa-brands fa-instagram"
            />
            <SocialMediaLink
              href="https://www.twitter.com/"
              icon="fa-brands fa-twitter"
            />
            <SocialMediaLink
              href="mailto:@mohagmail@gmail.com"
              icon="fa-solid fa-envelope"
            />
            <SocialMediaLink
              href="https://wa.me/552196312XXXX"
              icon="fa-brands fa-whatsapp"
            />
            <SocialMediaLink href="tel:+18475555555" icon="fa-solid fa-phone" />
          </SocialMediaDiv>
        </div>
        <div>
          <h3>important links</h3>
          <FooterLinks />
        </div>
        <FooterBlog />
      </div>
      <div className={styles.rights}>
        <p>
          Copyright © <span>{new Date().getFullYear()}</span> -
          <span> hope</span>, made by -<Link to="/about-us">🚑66-اسعاف🚨</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
