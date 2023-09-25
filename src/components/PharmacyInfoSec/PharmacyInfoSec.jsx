import DataFieldSec from "../DataFieldSec/DataFieldSec";
import SocialMediaDiv from "../SocialMediaDiv/SocialMediaDiv";
import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";

import styles from "./pharmacyInfoSec.module.scss";

function PharmacyInfoSec({ imgSrc, info }) {
  const { phone, location, email, links } = info;
  const { facebook, instagram, twitter, whatsapp } = links;

  return (
    <div className={styles["upper-sec"]}>
      <section className={styles.image}>
        <img src={imgSrc} alt={`${imgSrc}-image`} />
      </section>
      {info && (
        <section className={styles.data}>
          <div className={styles["social-icon"]}>
            <h2>contact links</h2>
            <SocialMediaDiv>
              {facebook && (
                <SocialMediaLink
                  href={facebook}
                  icon="fa-brands fa-facebook-f"
                  title="facebook"
                />
              )}
              {instagram && (
                <SocialMediaLink
                  href={instagram}
                  icon="fa-brands fa-instagram"
                  title="instagram"
                />
              )}
              {twitter && (
                <SocialMediaLink
                  href={twitter}
                  icon="fa-brands fa-twitter"
                  title="twitter"
                />
              )}
              {email && (
                <SocialMediaLink
                  href={`mailto:@${email}`}
                  icon="fa-solid fa-envelope"
                  title="Mail"
                />
              )}
              {whatsapp && (
                <SocialMediaLink
                  href={`https://wa.me/${whatsapp}`}
                  icon="fa-brands fa-whatsapp"
                  title="Whatsapp"
                />
              )}
              {phone && (
                <SocialMediaLink
                  href={`tel:${phone}`}
                  icon="fa-solid fa-phone"
                  title="Phone Number"
                />
              )}
            </SocialMediaDiv>
          </div>
          <div className={styles["contact-info"]}>
            <h2>contact info</h2>
            {location && (
              <DataFieldSec icon="fa-solid fa-location-dot" data={location} />
            )}
            {email && <DataFieldSec icon="fa-solid fa-envelope" data={email} />}
            {phone && <DataFieldSec icon="fa-solid fa-phone" data={phone} />}
          </div>
        </section>
      )}
    </div>
  );
}

export default PharmacyInfoSec;
