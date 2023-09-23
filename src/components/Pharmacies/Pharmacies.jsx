import FootSection from "../FootSection/FootSection";
import HeadSection from "../HeadSection/HeadSection";
import Card from "../Card/Card";

import pharmacy1 from "../../assets/images/pharmacies/pharmacy-image-1.jpg";
import pharmacy2 from "../../assets/images/pharmacies/pharmacy-image-2.jpg";
import pharmacy3 from "../../assets/images/pharmacies/pharmacy-image-3.jpg";

import styles from "./pharmacies.module.scss";

function Pharmacies() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  return (
    <section className={styles.pharmacies} id="pharmacies">
      <div className={`${styles.container} container`}>
        <HeadSection title="pharmacies" description={description} />
        <div className={styles["sec-body"]}>
          <Card
            imgSrc={pharmacy1}
            id="10"
            title="pharmacy 1 name"
            brief="test span..."
            description={description}
            info={{
              location: "Sit Molestiae Vitae Nam.",
              links: {
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                locationLink: "https://maps.google.com/",
                email: "hospital@gamail.com",
                whatsapp: "552196312XXXX",
                phoneNumber: "+18475555555",
              },
            }}
          />
          <Card
            imgSrc={pharmacy2}
            id="20"
            title="pharmacy 2 name"
            brief="test span..."
            description={description}
            info={{
              location: "Sit Molestiae Vitae Nam.",
              links: {
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                locationLink: "https://maps.google.com/",
                email: "hospital@gamail.com",
                whatsapp: "552196312XXXX",
                phoneNumber: "+18475555555",
              },
            }}
          />
          <Card
            imgSrc={pharmacy3}
            id="30"
            title="pharmacy 3 name"
            brief="test span..."
            description={description}
            info={{
              location: "Sit Molestiae Vitae Nam.",
              links: {
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                locationLink: "https://maps.google.com/",
                email: "hospital@gamail.com",
                whatsapp: "552196312XXXX",
                phoneNumber: "+18475555555",
              },
            }}
          />
        </div>
        <FootSection type="link" targetPage="/pharmacies" />
      </div>
    </section>
  );
}

export default Pharmacies;
