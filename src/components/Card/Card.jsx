import { Link } from "react-router-dom";

import DataFieldSec from "../DataFieldSec/DataFieldSec";
import SocialMediaDiv from "../SocialMediaDiv/SocialMediaDiv";
import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";

import styles from "./card.module.scss";

function Card({ imgSrc, id, title, brief, description, info }) {
  const { location, links } = info;
  const { facebook, twitter, locationLink, email, whatsapp, phoneNumber } =
    links;

  return (
    <article className={styles.box}>
      <div className={styles.avatar}>
        <img src={imgSrc} alt={`${imgSrc}-image`} />
      </div>
      <div className={styles.data}>
        <section className={styles.head}>
          <h3>
            <Link to={`/pharmacies/${id}`}>{title}</Link>
          </h3>
          {brief && <span>{brief}</span>}
          {description && <p>{description}</p>}
        </section>
        {Object.keys(info) && (
          <>
            <section className={styles.info}>
              {location && (
                <DataFieldSec icon="fa-solid fa-location-dot" data={location} />
              )}
              {phoneNumber && (
                <DataFieldSec icon="fa-solid fa-phone" data={phoneNumber} />
              )}
              {email && (
                <DataFieldSec icon="fa-solid fa-envelope" data={email} />
              )}
            </section>
            {Object.keys(links) && (
              <SocialMediaDiv>
                {facebook && (
                  <SocialMediaLink
                    href={facebook}
                    icon="fa-brands fa-facebook-f"
                  />
                )}
                {twitter && (
                  <SocialMediaLink href={twitter} icon="fa-brands fa-twitter" />
                )}
                {locationLink && (
                  <SocialMediaLink
                    href={locationLink}
                    icon="fa-solid fa-location-dot"
                  />
                )}
                {email && (
                  <SocialMediaLink
                    href={`mailto:@${email}`}
                    icon="fa-solid fa-envelope"
                  />
                )}
                {whatsapp && (
                  <SocialMediaLink
                    href={`https://wa.me/${whatsapp}`}
                    icon="fa-brands fa-whatsapp"
                  />
                )}
                {phoneNumber && (
                  <SocialMediaLink
                    href={`tel:${phoneNumber}`}
                    icon="fa-solid fa-phone"
                  />
                )}
              </SocialMediaDiv>
            )}
          </>
        )}
      </div>
    </article>
  );
}

export default Card;
