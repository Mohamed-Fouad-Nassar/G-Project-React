import { useSelector } from "react-redux";

import HeadSection from "../HeadSection/HeadSection";
import FootSection from "../FootSection/FootSection";
import DoctorsCard from "../DoctorsCard/DoctorsCard";

import doctor1 from "../../assets/images/doctors/doctor-image-1.jpg";

import styles from "./doctors.module.scss";

function Doctors() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  const { doctors } = useSelector((state) => state.doctors);

  return (
    <section className={styles.doctors} id="doctors">
      <div className={`${styles.container} container`}>
        <HeadSection title="doctors" description={description} />
        <div className={styles["sec-body"]}>
          {doctors
            .slice(0, 4)
            .map(
              ({
                id,
                name,
                specialty,
                facebook,
                instagram,
                twitter,
                whatsapp,
                phoneNumber,
                locationLink,
              }) => (
                <DoctorsCard
                  key={id}
                  imgSrc={doctor1}
                  name={name}
                  specialty={specialty}
                  facebook={facebook}
                  instagram={instagram}
                  twitter={twitter}
                  location={locationLink}
                  whatsapp={whatsapp}
                  phone={phoneNumber}
                />
              )
            )}

          {/* <DoctorsCard
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
          /> */}
        </div>
        {/* edit this link */}
        <FootSection type="link" targetPage="/doctors" />
      </div>
    </section>
  );
}

export default Doctors;
