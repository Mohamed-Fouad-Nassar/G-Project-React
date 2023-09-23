import HeadSection from "../HeadSection/HeadSection";
import Button from "../Button/Button";

import image from "../../assets/images/default/hospitals.webp";

import styles from "./hospitals.module.scss";

function Hospitals() {
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequatur ullam excepturi dolores repellat, minus assumenda
          exercitationem.`;

  return (
    <section className={styles.hospitals} id="hospitals">
      <div className={`${styles.container} container`}>
        <HeadSection title="hospitals" description={description} />
        <div className={styles["sec-body"]}>
          <div className={styles.text}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
              earum tenetur harum sed eos maxime architecto culpa distinctio,
              odit laudantium similique molestias fugit rem, ipsa quasi veniam
              ea iure? Earum, non aut deserunt possimus maxime quibusdam
              reprehenderit esse dolor amet officiis nam velit dolorem nesciunt
              soluta ratione fugit autem ipsam consequatur explicabo atque
              magnam molestias, ad est. Velit pariatur similique atque aliquid
              quisquam at molestiae non laudantium quidem beatae. Sunt.
            </p>
            <Button type="link" href="/hospitals">
              see more
            </Button>
          </div>
          <div className={styles.image}>
            <img src={image} alt={`${image}-image`} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hospitals;
