import Button from "../Button/Button";
import DataFieldSec from "../DataFieldSec/DataFieldSec";
import HeadSection from "../HeadSection/HeadSection";
import SocialMediaDiv from "../SocialMediaDiv/SocialMediaDiv";
import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";

import styles from "./contact.module.scss";

function Contact() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  return (
    <section className={styles.contacts} id="contacts">
      <div className={`${styles.container} container`}>
        <HeadSection
          isWhite={true}
          title="contact us"
          description={description}
        />
        <div className={styles["sec-body"]}>
          <div className={styles["sec-left"]}>
            <section>
              <h2>contact info</h2>
              <DataFieldSec
                icon="fa-solid fa-location-dot"
                data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  molestiae vitae nam."
                isWhite={true}
              />
              <DataFieldSec
                icon="fa-solid fa-envelope"
                data="monsfd@gmail.com"
                isWhite={true}
              />
              <DataFieldSec
                icon="fa-solid fa-phone"
                isWhite={true}
                data="+12353245"
              />
            </section>
            <section>
              <h2>contact links</h2>
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
                <SocialMediaLink
                  href="tel:+18475555555"
                  icon="fa-solid fa-phone"
                />
              </SocialMediaDiv>
            </section>
          </div>
          <div className={styles["sec-right"]}>
            <h2>leave a message</h2>
            <form>
              <input type="email" placeholder="your email" />
              <textarea
                name="message"
                placeholder="message"
                defaultValue={""}
              />
              <Button type="submit">send</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
