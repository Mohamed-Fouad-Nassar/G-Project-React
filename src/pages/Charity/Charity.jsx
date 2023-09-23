import { SwiperSlide } from "swiper/react";

import BackBtn from "../../components/BackBtn/BackBtn";
import SocialMediaDiv from "../../components/SocialMediaDiv/SocialMediaDiv";
import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";
import DataFieldSec from "../../components/DataFieldSec/DataFieldSec";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider";
import CharitiesCard from "../../components/CharitiesCard/CharitiesCard";

import useSetTitle from "../../hooks/useSetTitle";

import charityImg from "../../assets/images/default/charity-image.jpg";

import charity1 from "../../assets/images/charities/charities-image-1.jpg";
import charity2 from "../../assets/images/charities/charities-image-2.jpg";
import charity3 from "../../assets/images/charities/charities-image-3.jpg";
import charity4 from "../../assets/images/charities/charities-image-4.jpg";
import charity5 from "../../assets/images/charities/charities-image-5.jpg";

import styles from "./charity.module.scss";

function Charity() {
  useSetTitle("charity name");

  const charityDescription = `charity description Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Suscipit, eaque quaerat temporibus, atque
                    odio quia non laborum earum facilis. charity description
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit, eaque quaerat temporibus, atque odio quia non
                    laborum earum facilis.`;

  return (
    <div className="container">
      <section className={styles.content}>
        <BackBtn />
        <h1>charity name</h1>
        <div className={styles["upper-sec"]}>
          <article className={styles.description}>
            <pre className={styles["article-body"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              incidunt quos provident, id error aspernatur nam cupiditate ipsam
              amet, doloribus commodi dicta corporis eligendi, saepe iusto in!
              Rerum, molestias enim. Lorem ipsum dolor sit, amet consectetur
              {"  "}adipisicing elit. Tempore incidunt quos provident, id error
              aspernatur nam cupiditate ipsam amet, doloribus commodi dicta
              corporis eligendi, saepe iusto in! Rerum, molestias enim. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              incidunt quos provident, id error aspernatur nam cupiditate ipsam
              amet, doloribus commodi dicta corporis eligendi, saepe iusto in!
              Rerum, molestias enim. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Tempore incidunt quos provident, id error
              aspernatur nam cupiditate ipsam amet, doloribus commodi dicta
              corporis eligendi, saepe iusto in! Rerum, molestias enim. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              incidunt quos provident, id error aspernatur nam cupiditate ipsam
              amet, doloribus commodi dicta corporis eligendi, saepe iusto in!
              Rerum, molestias enim. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Tempore incidunt quos provident, id error
              aspernatur nam cupiditate ipsam amet, doloribus commodi dicta
              corporis eligendi, saepe iusto in! Rerum, molestias enim. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              incidunt quos provident, id error aspernatur nam cupiditate ipsam
              amet, doloribus commodi dicta corporis eligendi, saepe iusto in!
              Rerum, molestias enim. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Tempore incidunt quos provident, id error
              aspernatur nam cupiditate ipsam amet, doloribus commodi dicta
              corporis eligendi, saepe iusto in! Rerum, molestias enim.
            </pre>
          </article>
          <article className={styles.data}>
            <div className={styles.image}>
              <img src={charityImg} alt={`${charityImg}-image`} />
            </div>
            <div className={styles["social-icon"]}>
              <h2>contact links</h2>
              <SocialMediaDiv>
                <SocialMediaLink
                  href="https://www.facebook.com/"
                  icon="fa-brands fa-facebook-f"
                  title="facebook"
                />
                <SocialMediaLink
                  href="https://www.instagram.com/"
                  icon="fa-brands fa-instagram"
                  title="instagram"
                />
                <SocialMediaLink
                  href="https://www.twitter.com/"
                  icon="fa-brands fa-twitter"
                  title="twitter"
                />
                <SocialMediaLink
                  href="mailto:@mohagmail@gmail.com"
                  icon="fa-solid fa-envelope"
                  title="mail"
                />
                <SocialMediaLink
                  href="https://wa.me/552196312XXXX"
                  icon="fa-brands fa-whatsapp"
                  title="whatsapp"
                />
                <SocialMediaLink
                  href="tel:+18475555555"
                  icon="fa-solid fa-phone"
                  title="phone number"
                />
              </SocialMediaDiv>
            </div>
            <div className={styles["contact-info"]}>
              <h2>contact info</h2>
              <div>
                <DataFieldSec
                  icon="fa-solid fa-location-dot"
                  data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  molestiae vitae nam."
                />
                <DataFieldSec
                  icon="fa-solid fa-envelope"
                  data="monsfd@gmail.com"
                />
                <DataFieldSec icon="fa-solid fa-phone" data="+12353245" />
              </div>
            </div>
          </article>
        </div>
        <div className={styles.other}>
          <h2>more charities</h2>
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
        {/* <div className="events">
          <div className="head">
            <h2>other images from this charity</h2>
          </div>
          <div className="body">
            <div className="image">
              <img
                src="../Data/Images/IMG_20221204_221415_253.jpg"
                alt="charity-image"
              />
            </div>
            <div className="image">
              <img
                src="../Data/Images/radiation-places-image-4.jpg"
                alt="charity-image"
              />
            </div>
            <div className="image">
              <img
                src="../Data/Images/IMG_20221204_221443_145.jpg"
                alt="charity-image"
              />
            </div>
            <div className="image">
              <img
                src="../Data/Images/radiation-places-image-4.jpg"
                alt="charity-image"
              />
            </div>
            <div className="image">
              <img
                src="../Data/Images/IMG_20221204_221443_145.jpg"
                alt="charity-image"
              />
            </div>
            <div className="image">
              <img
                src="../Data/Images/radiation-places-image-4.jpg"
                alt="charity-image"
              />
            </div>
          </div>
        </div> */}
        {/* <div className="other">
          <div className="head">
            <h2>more charities</h2>
          </div>
          <div className="other-slider swiper">
            <div className="slider-container cont">
              <div className="slides swiper-wrapper">
                <div className="slide swiper-slide">
                  <div className="slide-image">
                    <img
                      src="../Data/Images/IMG_20221204_221417_873.jpg"
                      alt="charity-image"
                    />
                  </div>
                  <div className="slide-body">
                    <h3>charity name</h3>
                    <p>
                      charity description Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Suscipit, eaque quaerat
                      temporibus, atque odio quia non laborum earum facilis.
                      charity description Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Suscipit, eaque quaerat
                      temporibus, atque odio quia non laborum earum facilis.
                    </p>
                  </div>
                  <div className="slide-foot">
                    <a href="#">
                      <span>read more</span>
                      <i className="f-icon fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="slide swiper-slide">
                  <div className="slide-image">
                    <img
                      src="../Data/Images/IMG_20221204_221415_253.jpg"
                      alt="charity-image"
                    />
                  </div>
                  <div className="slide-body">
                    <h3>charity name</h3>
                    <p>
                      charity description Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Suscipit, eaque quaerat
                      temporibus, atque odio quia non laborum earum facilis.
                      charity description Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Suscipit, eaque quaerat
                      temporibus, atque odio quia non laborum earum facilis.
                    </p>
                  </div>
                  <div className="slide-foot">
                    <a href="#">
                      <span>read more</span>
                      <i className="f-icon fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="slide swiper-slide">
                  <div className="slide-image">
                    <img
                      src="../Data/Images/radiation-places-image-4.jpg"
                      alt="charity-image"
                    />
                  </div>
                  <div className="slide-body">
                    <h3>charity name</h3>
                    <p>
                      charity description Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Suscipit, eaque quaerat
                      temporibus, atque odio quia non laborum earum facilis.
                      charity description Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Suscipit, eaque quaerat
                      temporibus, atque odio quia non laborum earum facilis.
                    </p>
                  </div>
                  <div className="slide-foot">
                    <a href="#">
                      <span>read more</span>
                      <i className="f-icon fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="slide swiper-slide">
                  <div className="slide-image">
                    <img
                      src="../Data/Images/IMG_20221204_221443_145.jpg"
                      alt="charity-image"
                    />
                  </div>
                  <div className="slide-body">
                    <h3>charity name</h3>
                    <p>
                      charity description Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Suscipit, eaque quaerat
                      temporibus, atque odio quia non laborum earum facilis.
                      charity description Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Suscipit, eaque quaerat
                      temporibus, atque odio quia non laborum earum facilis.
                    </p>
                  </div>
                  <div className="slide-foot">
                    <a href="#">
                      <span>read more</span>
                      <i className="f-icon fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next swiper-navBtn" />
            <div className="swiper-button-prev swiper-navBtn" />
            <div className="swiper-pagination" />
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default Charity;
