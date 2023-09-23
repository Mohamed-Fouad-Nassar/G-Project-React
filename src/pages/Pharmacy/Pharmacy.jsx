import { SwiperSlide } from "swiper/react";

import BackBtn from "../../components/BackBtn/BackBtn";
import SocialMediaDiv from "../../components/SocialMediaDiv/SocialMediaDiv";
import SocialMediaLink from "../../components/SocialMediaLink/SocialMediaLink";
import DataFieldSec from "../../components/DataFieldSec/DataFieldSec";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider";
import CardMin from "../../components/CardMin/CardMin";
import CardForm from "../../components/CardForm/CardForm";

import pharmacyImg from "../../assets/images/default/pharmacy-image.jpg";
import pharmacy1 from "../../assets/images/pharmacies/pharmacy-image-1.jpg";
import pharmacy2 from "../../assets/images/pharmacies/pharmacy-image-2.jpg";
import pharmacy3 from "../../assets/images/pharmacies/pharmacy-image-3.jpg";

import medicine1 from "../../assets/images/default/medicine-image.jpg";
import medicine2 from "../../assets/images/default/medicine-image-2.jpg";
import medicine3 from "../../assets/images/default/medicine-image-3.jpg";

import styles from "./pharmacy.module.scss";
import { Link } from "react-router-dom";

function Pharmacy() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  return (
    <div className={`${styles.container} container`}>
      <section className={styles.content}>
        <BackBtn />
        <h1>pharmacy name</h1>
        <div className={styles["upper-sec"]}>
          <section className={styles.image}>
            <img src={pharmacyImg} alt={`${pharmacyImg}-image`} />
          </section>
          <section className={styles.data}>
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
                  title="Mail"
                />
                <SocialMediaLink
                  href="https://wa.me/552196312XXXX"
                  icon="fa-brands fa-whatsapp"
                  title="Whatsapp"
                />
                <SocialMediaLink
                  href="tel:+18475555555"
                  icon="fa-solid fa-phone"
                  title="Phone Number"
                />
              </SocialMediaDiv>
            </div>
            <div className={styles["contact-info"]}>
              <h2>contact info</h2>
              <DataFieldSec
                icon="fa-solid fa-location-dot"
                data=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  molestiae vitae nam."
              />
              <DataFieldSec
                icon="fa-solid fa-envelope"
                data="monsfd@gmail.com"
              />
              <DataFieldSec icon="fa-solid fa-phone" data="+12353245" />
            </div>
          </section>
        </div>
        <pre className={styles["article-body"]}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
          voluptates. Rerum possimus officia error excepturi blanditiis sequi
          saepe facere, rem eos repudiandae veniam cupiditate nobis ratione,
          quia officiis pariatur voluptas! Unde deleniti distinctio deserunt
          quos magnam. Sed tenetur, alias iusto, consequuntur earum excepturi
          natus ab, totam nobis iste quasi distinctio dolorum ex quaerat ut
          doloribus rem repudiandae voluptatum veniam eaque? Deleniti ipsa vitae
          nulla veniam velit cupiditate mollitia ab voluptatum tempore labore,
          assumenda maxime, repellendus inventore asperiores neque? Expedita
          impedit deleniti quidem accusamus corporis commodi inventore.{"\n"}
          {"\n"}
          temporibus, earum enim eligendi excepturi reiciendis itaque sequi,
          dolorum qui ducimus quam ipsa illum! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Repellendus, voluptates. Rerum possimus
          officia error excepturi blanditiis sequi saepe facere, rem eos
          repudiandae veniam cupiditate nobis ratione, quia officiis pariatur
          voluptas! Unde deleniti distinctio deserunt quos magnam. Sed tenetur,
          alias iusto, consequuntur earum excepturi natus ab, totam nobis iste
          quasi distinctio dolorum ex quaerat ut doloribus rem repudiandae
          voluptatum veniam eaque? Deleniti ipsa vitae nulla veniam velit
          cupiditate mollitia ab voluptatum tempore labore.
        </pre>
        <div className={styles.medicines}>
          <div className={styles.head}>
            <h2>medicines</h2>
            <Link to="medicines">see all</Link>
          </div>
          <div className={styles.medicinesSlider}>
            <SwiperSlider>
              <SwiperSlide>
                <CardForm
                  imgSrc={medicine1}
                  id="1100"
                  title="medicine 1 name"
                  category="cat-1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardForm
                  imgSrc={medicine2}
                  id="1200"
                  title="medicine 2 name"
                  category="cat-3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardForm
                  imgSrc={medicine3}
                  id="1300"
                  title="medicine 3 name"
                  category="cat-2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardForm
                  imgSrc={medicine1}
                  id="1400"
                  title="medicine 4 name"
                  category="cat-1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardForm
                  imgSrc={medicine2}
                  id="1500"
                  title="medicine 5 name"
                  category="cat-4"
                />
              </SwiperSlide>
            </SwiperSlider>
          </div>
        </div>
        <div className={styles.other}>
          <div className={styles.head}>
            <h2>more pharmacies</h2>
          </div>
          <SwiperSlider>
            <SwiperSlide>
              <CardMin
                imgSrc={pharmacy1}
                link={`/pharmacies/${20}`}
                title="pharmacy 2 name"
                description={description}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardMin
                imgSrc={pharmacy2}
                link={`/pharmacies/${30}`}
                title="pharmacy 3 name"
                description={description}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardMin
                imgSrc={pharmacy3}
                link={`/pharmacies/${40}`}
                title="pharmacy 4 name"
                description={description}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardMin
                imgSrc={pharmacy1}
                link={`/pharmacies/${50}`}
                title="pharmacy 5 name"
                description={description}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardMin
                imgSrc={pharmacy2}
                link={`/pharmacies/${60}`}
                title="pharmacy 6 name"
                description={description}
              />
            </SwiperSlide>
          </SwiperSlider>
        </div>
      </section>
    </div>
  );
}

export default Pharmacy;
