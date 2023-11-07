import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";

import styles from "./doctorsCard.module.scss";

function DoctorsCard({
  imgSrc,
  name,
  specialty,
  facebook,
  instagram,
  twitter,
  location,
  whatsapp,
  phone,
}) {
  return (
    <article className={styles.box}>
      <img src={imgSrc} alt={`${name}-image`} />
      <div className={styles.info}>
        <h5>{name}</h5>
        <p>{specialty}</p>
        <div className={styles.contact}>
          {facebook && (
            <SocialMediaLink href={facebook} icon={`fa-brands fa-facebook-f`} />
          )}
          {/* {instagram && (
            <SocialMediaLink href={instagram} icon={`fa-brands fa-instagram`} />
          )} */}
          {twitter && (
            <SocialMediaLink href={twitter} icon={`fa-brands fa-twitter`} />
          )}
          {location && (
            <SocialMediaLink
              href={location}
              icon={`fa-solid fa-location-dot`}
            />
          )}
          {whatsapp && (
            <SocialMediaLink
              href={`https://wa.me/${whatsapp}`}
              icon={`fa-brands fa-whatsapp`}
            />
          )}
          {phone && (
            <SocialMediaLink href={`tel:${phone}`} icon={`fa-solid fa-phone`} />
          )}
        </div>
      </div>
    </article>
  );
}

export default DoctorsCard;
