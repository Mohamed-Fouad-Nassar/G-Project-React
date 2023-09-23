import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";

import styles from "./doctorsCard.module.scss";

function DoctorsCard({
  imgSrc,
  title,
  department,
  facebook,
  twitter,
  location,
  whatsapp,
  phone,
}) {
  return (
    <article className={styles.box}>
      <img src={imgSrc} alt={`${imgSrc}-image`} />
      <div className={styles.info}>
        <h5>{title}</h5>
        <p>{department}</p>
        <div className={styles.contact}>
          {facebook && (
            <SocialMediaLink href={facebook} icon={`fa-brands fa-facebook-f`} />
          )}
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
