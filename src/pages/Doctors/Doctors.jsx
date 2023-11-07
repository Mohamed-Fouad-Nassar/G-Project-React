import DoctorsMainCard from "../../components/DoctorsCard/DoctorsMainCard";
import HeadSection from "../../components/HeadSection/HeadSection";
import FootSection from "../../components/FootSection/FootSection";

import useSetTitle from "../../hooks/useSetTitle";

import doctor1 from "../../assets/images/doctors/doctor-image-4.jpg";

import styles from "./doctors.module.scss";

import { useSelector } from "react-redux";
import ErrorPage from "../ErrorPage/ErrorPage";

function Doctors() {
  useSetTitle("Doctors");

  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  const doctorDes = `lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          reiciendis voluptatum, amet est natus quaerat ducimus`;

  const { loading, err, doctors } = useSelector((state) => state.doctors);

  const handleClick = () => {
    console.log("doctors handle click function");
  };

  return loading ? (
    <div className="loading"></div>
  ) : err ? (
    <ErrorPage err={err} />
  ) : (
    <>
      <div className={`${styles.container} container`}>
        <HeadSection title="doctors" description={description} />
        <div className={styles["sec-body"]}>
          {doctors.map(
            ({
              id,
              name,
              // image,
              specialty,
              email,
              location,
              phoneNumber,
              facebook,
              instagram,
              twitter,
              whatsapp,
            }) => (
              <DoctorsMainCard
                key={id}
                imgSrc={doctor1}
                name={name}
                specialty={specialty}
                description={doctorDes}
                info={{
                  location,
                  links: {
                    facebook,
                    instagram,
                    twitter,
                    email,
                    whatsapp,
                    phoneNumber,
                  },
                }}
              />
            )
          )}
        </div>
        <FootSection onClick={handleClick} />
      </div>
    </>
  );
}

export default Doctors;
