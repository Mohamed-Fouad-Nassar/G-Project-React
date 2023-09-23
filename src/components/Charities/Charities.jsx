import { SwiperSlide } from "swiper/react";

import HeadSection from "../HeadSection/HeadSection";
import CharitiesCard from "../CharitiesCard/CharitiesCard";
import SwiperSlider from "../SwiperSlider/SwiperSlider";

import charity1 from "../../assets/images/charities/charities-image-1.jpg";
import charity2 from "../../assets/images/charities/charities-image-2.jpg";
import charity3 from "../../assets/images/charities/charities-image-3.jpg";
import charity4 from "../../assets/images/charities/charities-image-4.jpg";
import charity5 from "../../assets/images/charities/charities-image-5.jpg";

import styles from "./charities.module.scss";

function Charities() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  const charityDescription = `charity description Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Suscipit, eaque quaerat temporibus, atque
                    odio quia non laborum earum facilis. charity description
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit, eaque quaerat temporibus, atque odio quia non
                    laborum earum facilis.`;

  return (
    <section className={styles.charities} id="charities">
      <div className={`${styles.container} container`}>
        <HeadSection title="charities" description={description} />
        <div className={styles["sec-body"]}>
          <SwiperSlider>
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
          </SwiperSlider>
        </div>
      </div>
    </section>
  );
}

export default Charities;
