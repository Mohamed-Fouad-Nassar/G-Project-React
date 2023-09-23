import SocialMediaDiv from "../SocialMediaDiv/SocialMediaDiv";
import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";
import styles from "./aboutUsCard.module.scss";

function AboutUsCard({ imgSrc, name, specialty, description, links }) {
  const { facebook, whatsapp, phoneNumber, email, githubAcc } = links;

  return (
    <article className={styles.box}>
      <div className={styles.avatar}>
        <img src={imgSrc} alt={`${imgSrc}-image`} />
      </div>
      <div className={styles.data}>
        <section className={styles.head}>
          <h3>{name}</h3>
          <span>{specialty}</span>
          <p>{description}</p>
        </section>
        <section className={styles.links}>
          <h3>contact info</h3>
          <SocialMediaDiv>
            {facebook && (
              <SocialMediaLink
                href={facebook}
                icon="fa-brands fa-facebook-f"
                title="facebook"
              />
            )}
            {whatsapp && (
              <SocialMediaLink
                href={whatsapp}
                icon="fa-brands fa-whatsapp"
                title="whatsapp"
              />
            )}
            {phoneNumber && (
              <SocialMediaLink
                href={phoneNumber}
                icon="fa-solid fa-phone"
                title="phone number"
              />
            )}
            {email && (
              <SocialMediaLink
                href={email}
                icon="fa-solid fa-envelope"
                title="email"
              />
            )}
            {githubAcc && (
              <SocialMediaLink
                href={githubAcc}
                icon="fa-brands fa-github"
                title="github"
              />
            )}
          </SocialMediaDiv>
        </section>
      </div>
    </article>
  );
}

{
  /* <div className="contact">
  <div>
    <a href="https://www.facebook.com/profile.php?id=100009428234982&mibextid=ZbWKwL">
      <i className="f-icon fa-brands fa-facebook-f" />
    </a>
  </div>
  <div>
    <a href="https://wa.me/+201144962371">
      <i className="f-icon fa-brands fa-whatsapp" />
    </a>
  </div>
  <div>
    <a href="tel:+201144962371">
      <i className="f-icon fa-solid fa-phone" />
    </a>
  </div>
  <div>
    <a href="mailto:@mahmuudsalama@gmail.com">
      <i className="f-icon fa-solid fa-envelope" />
    </a>
  </div>
</div> */
}

export default AboutUsCard;
