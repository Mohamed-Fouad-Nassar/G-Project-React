import HeadSection from "../HeadSection/HeadSection";
import FootSection from "../FootSection/FootSection";
import DoctorsCard from "../DoctorsCard/DoctorsCard";

import doctor1 from "../../assets/images/doctors/doctor-image-1.jpg";
import doctor2 from "../../assets/images/doctors/doctor-image-2.jpg";
import doctor3 from "../../assets/images/doctors/doctor-image-3.jpg";
import doctor4 from "../../assets/images/doctors/doctor-image-4.jpg";

import styles from "./doctors.module.scss";

function Doctors() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  return (
    <section className={styles.doctors} id="doctors">
      <div className={`${styles.container} container`}>
        <HeadSection title="doctors" description={description} />
        <div className={styles["sec-body"]}>
          <DoctorsCard
            imgSrc={doctor1}
            title="john doe"
            department="department"
            facebook="https://www.facebook.com/"
            twitter="https://www.twitter.com/"
            location="https://maps.google.com/"
            whatsapp="552196312XXXX"
            phone="+18475555555"
          />
          <DoctorsCard
            imgSrc={doctor2}
            title="john doe"
            department="department"
            facebook="https://www.facebook.com/"
            twitter="https://www.twitter.com/"
            location="https://maps.google.com/"
            whatsapp="552196312XXXX"
            phone="+18475555555"
          />
          <DoctorsCard
            imgSrc={doctor3}
            title="john doe"
            department="department"
            facebook="https://www.facebook.com/"
            twitter="https://www.twitter.com/"
            location="https://maps.google.com/"
            whatsapp="552196312XXXX"
            phone="+18475555555"
          />
          <DoctorsCard
            imgSrc={doctor4}
            title="john doe"
            department="department"
            facebook="https://www.facebook.com/"
            twitter="https://www.twitter.com/"
            location="https://maps.google.com/"
            whatsapp="552196312XXXX"
            phone="+18475555555"
          />
        </div>
        {/* edit this link */}
        <FootSection type="link" targetPage="/doctors" />
      </div>
    </section>
  );
}

export default Doctors;
