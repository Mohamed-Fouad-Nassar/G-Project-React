import DataFieldSec from "../DataFieldSec/DataFieldSec";
import SocialMediaDiv from "../SocialMediaDiv/SocialMediaDiv";
import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";

import styles from "./doctorsMainCard.module.scss";

function DoctorsMainCard({ imgSrc, name, specialty, description, info }) {
  const { location, links } = info;

  const { facebook, instagram, twitter, email, whatsapp, phoneNumber } = links;

  return (
    <article className={styles.box}>
      <div className={styles["card-top"]}>
        <div className={styles.images}>
          <img src={imgSrc} alt={`${imgSrc}-image`} />
        </div>
        <div className={styles.text}>
          <h2>{name}</h2>
          <span>{specialty}</span>
        </div>
      </div>
      <div className={styles["card-body"]}>
        {/* <p className="mt-3"> */}
        <p>{description}</p>
      </div>
      {Object.keys(info).length > 0 && (
        <div className={styles.data}>
          <div className={styles["contact-info"]}>
            <h2>contact info</h2>
            {location && (
              <DataFieldSec icon="fa-solid fa-location-dot" data={location} />
            )}
            {email && <DataFieldSec icon="fa-solid fa-envelope" data={email} />}
            {phoneNumber && (
              <DataFieldSec icon="fa-solid fa-phone" data={phoneNumber} />
            )}
          </div>
          {Object.keys(links).length > 0 && (
            <div>
              <h2>contact links</h2>
              <SocialMediaDiv>
                {facebook && (
                  <SocialMediaLink
                    title="Facebook Page"
                    href={facebook}
                    icon="fa-brands fa-facebook-f"
                  />
                )}
                {instagram && (
                  <SocialMediaLink
                    title="Instagram Page"
                    href={instagram}
                    icon="fa-brands fa-instagram"
                  />
                )}
                {twitter && (
                  <SocialMediaLink
                    title="Twitter Page"
                    href={twitter}
                    icon="fa-brands fa-twitter"
                  />
                )}
                {email && (
                  <SocialMediaLink
                    title="Email"
                    href={`mailto:@${email}`}
                    icon="fa-solid fa-envelope"
                  />
                )}
                {whatsapp && (
                  <SocialMediaLink
                    title="Whatsapp"
                    href={`https://wa.me/${whatsapp}`}
                    icon="fa-brands fa-whatsapp"
                  />
                )}
                {phoneNumber && (
                  <SocialMediaLink
                    title="Phone Number"
                    href={`tel:${phoneNumber}`}
                    icon="fa-solid fa-phone"
                  />
                )}
              </SocialMediaDiv>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default DoctorsMainCard;
