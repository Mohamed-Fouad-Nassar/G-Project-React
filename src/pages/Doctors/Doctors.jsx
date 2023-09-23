import DoctorsMainCard from "../../components/DoctorsCard/DoctorsMainCard";
import HeadSection from "../../components/HeadSection/HeadSection";
import FootSection from "../../components/FootSection/FootSection";

import useSetTitle from "../../hooks/useSetTitle";

import doctor1 from "../../assets/images/doctors/doctor-image-4.jpg";
import doctor2 from "../../assets/images/doctors/doctor-image-2.jpg";
import doctor3 from "../../assets/images/doctors/doctor-image-3.jpg";

import styles from "./doctors.module.scss";

function Doctors() {
  useSetTitle("Doctors");

  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  const doctorDes = `lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          reiciendis voluptatum, amet est natus quaerat ducimus`;

  const handleClick = () => {
    console.log("doctors handle click function");
  };

  return (
    <>
      <div className={`${styles.container} container`}>
        <HeadSection title="doctors" description={description} />
        <div className={styles["sec-body"]}>
          <DoctorsMainCard
            imgSrc={doctor1}
            name="doctor 1 name"
            specialty="doctor 1 specialty"
            description={doctorDes}
            info={{
              location: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae vitae nam. `,
              links: {
                facebook: "https://www.facebook.com/",
                instagram: "https://www.instagram.com/",
                twitter: "https://www.twitter.com/",
                email: "leo@gmail.com",
                whatsapp: "552196312XXXX",
                phoneNumber: "+18475555555",
              },
            }}
          />
          <DoctorsMainCard
            imgSrc={doctor2}
            name="doctor 2 name"
            specialty="doctor 2 specialty"
            description={doctorDes}
            info={{
              location: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae vitae nam. `,
              links: {
                facebook: "https://www.facebook.com/",
                instagram: "https://www.instagram.com/",
                twitter: "https://www.twitter.com/",
                email: "leo@gmail.com",
                whatsapp: "552196312XXXX",
                phoneNumber: "+18475555555",
              },
            }}
          />
          <DoctorsMainCard
            imgSrc={doctor3}
            name="doctor 3 name"
            specialty="doctor 3 specialty"
            description={doctorDes}
            info={{
              location: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae vitae nam. `,
              links: {
                facebook: "https://www.facebook.com/",
                instagram: "https://www.instagram.com/",
                twitter: "https://www.twitter.com/",
                email: "leo@gmail.com",
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

export default Doctors;
