import FootSection from "../../components/FootSection/FootSection";
import HeadSection from "../../components/HeadSection/HeadSection";
import Card from "../../components/Card/Card";

import useSetTitle from "../../hooks/useSetTitle";

import hospital1 from "../../assets/images/pharmacies/pharmacy-image-1.jpg";
import hospital2 from "../../assets/images/pharmacies/pharmacy-image-2.jpg";
import hospital3 from "../../assets/images/pharmacies/pharmacy-image-3.jpg";

import styles from "./hospitals.module.scss";

function Hospitals() {
  useSetTitle("Hospitals");

  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  const handleClick = () => {
    console.log("hospitals handle click function");
  };

  return (
    <>
      <div className={`${styles.container} container`}>
        <HeadSection title="hospitals" description={description} />
        <div className={styles["sec-body"]}>
          <Card
            imgSrc={hospital1}
            id="10"
            title="hospital 1 name"
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
            imgSrc={hospital2}
            id="20"
            title="hospital 2 name"
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
            imgSrc={hospital3}
            id="30"
            title="hospital 3 name"
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
        <FootSection onClick={handleClick} />
      </div>
    </>
  );
}

export default Hospitals;
