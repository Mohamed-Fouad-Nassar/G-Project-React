import HeadSection from "../HeadSection/HeadSection";
import ServicesCard from "../ServicesCard/ServicesCard";

import styles from "./services.module.scss";

function Services() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              consequatur ullam excepturi dolores repellat, minus assumenda
              exercitationem.`;

  return (
    <section className={styles.services} id="services">
      <div className={`${styles.container} container`}>
        <HeadSection title="our services" description={description} />
        <div className={styles["sec-body"]}>
          <ServicesCard
            link="doctors"
            icon="fa-solid fa-user-doctor"
            title="doctors"
            description={description}
          />
          <ServicesCard
            link="medicines"
            icon="fa-solid fa-pills"
            title="medicines"
            description={description}
          />
          <ServicesCard
            link="hospitals"
            icon="fa-solid fa-hospital"
            title="hospitals"
            description={description}
          />
          <ServicesCard
            link="pharmacies"
            icon="fa-solid fa-house-medical"
            title="pharmacies"
            description={description}
          />
          <ServicesCard
            link="blog"
            icon="fa-solid fa-book-open-reader"
            title="blog"
            description={description}
          />
          <ServicesCard
            link="charities"
            icon="fa-solid fa-hand-holding-heart"
            title="charities"
            description={description}
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
