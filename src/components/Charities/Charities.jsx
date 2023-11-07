import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";

import HeadSection from "../HeadSection/HeadSection";
import FootSection from "../FootSection/FootSection";
import CharitiesCard from "../CharitiesCard/CharitiesCard";
import SwiperSlider from "../SwiperSlider/SwiperSlider";

import charity1 from "../../assets/images/charities/charities-image-1.jpg";

import styles from "./charities.module.scss";

function Charities() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  const { charities } = useSelector((state) => state.charities);

  return (
    <section className={styles.charities} id="charities">
      <div className={`${styles.container} container`}>
        <HeadSection title="charities" description={description} />
        <div className={styles["sec-body"]}>
          <SwiperSlider>
            {charities.slice(0, 10).map(({ id, name, description }) => (
              <SwiperSlide key={id}>
                <CharitiesCard
                  imgSrc={charity1}
                  id={id}
                  title={name}
                  description={description}
                />
              </SwiperSlide>
            ))}
            {/*
            <SwiperSlide>
              <CharitiesCard
                imgSrc={charity1}
                id="1000"
                title="charity 1 name"
                description={charityDescription}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CharitiesCard
                imgSrc={charity2}
                id="2000"
                title="charity 2 name"
                description={charityDescription}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CharitiesCard
                imgSrc={charity3}
                id="3000"
                title="charity 3 name"
                description={charityDescription}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CharitiesCard
                imgSrc={charity4}
                id="4000"
                title="charity 4 name"
                description={charityDescription}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CharitiesCard
                imgSrc={charity5}
                id="5000"
                title="charity 5 name"
                description={charityDescription}
              />
            </SwiperSlide>
            */}
          </SwiperSlider>
        </div>
        <FootSection type="link" targetPage="/charities" />
      </div>
    </section>
  );
}

export default Charities;
