import AboutUsCard from "../../components/AboutUsCard/AboutUsCard";
import HeadSection from "../../components/HeadSection/HeadSection";

import useSetTitle from "../../hooks/useSetTitle";

import avatar1 from "../../assets/images/about_us/mahmoud-salama.jpg";
import avatar2 from "../../assets/images/about_us/mohamed-nassar.jpg";
import avatar3 from "../../assets/images/about_us/mohamed-ali.jpg";
import avatar4 from "../../assets/images/about_us/abdallah-kalifa.jpg";
import avatar5 from "../../assets/images/about_us/mohamed-aymen.jpg";
import avatar6 from "../../assets/images/about_us/ziad-mahmoud.jpg";

import styles from "./aboutUs.module.scss";

function AboutUs() {
  useSetTitle("about us");

  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa consequatur ullam excepturi dolores repellat, minus assumenda exercitationem.`;
  const CardDes = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat vel molestias minus vitae numquam eveniet? Minus libero itaque quibusdam tempore eligendi quos, voluptas voluptatum rem ducimus harum facere a vitae!`;

  return (
    <div className={`${styles.container} container`}>
      <HeadSection title="about us" description={description} />
      <div className={styles["sec-body"]}>
        <AboutUsCard
          imgSrc={avatar1}
          name="mahmoud salama"
          specialty="data analysis"
          description={CardDes}
          links={{
            facebook:
              "https://www.facebook.com/profile.php?id=100009428234982&mibextid=ZbWKwL",
            whatsapp: "https://wa.me/+201144962371",
            phoneNumber: "tel:+201144962371",
            email: "mailto:@mahmuudsalama@gmail.com",
            githubAcc: "",
          }}
        />
        <AboutUsCard
          imgSrc={avatar2}
          name="mohamed nassar"
          specialty="front-end developer"
          description={CardDes}
          links={{
            facebook: "https://www.facebook.com/mohammed.nassar.31508/",
            whatsapp: "https://wa.me/+201010959709",
            phoneNumber: "tel:+201010959709",
            email: "mailto:@mohammednassar740@gmail.com",
            githubAcc: "https://github.com/Mohamed-Fouad-Nassar/",
          }}
        />
        <AboutUsCard
          imgSrc={avatar3}
          name="mohamed ali"
          specialty="front-end developer"
          description={CardDes}
          links={{
            facebook: "https://www.facebook.com/mohamed.esho.16",
            whatsapp: "https://wa.me/+201014525677",
            phoneNumber: "tel:+201014525677",
            email: "mailto:@mohamedeltohamyaly1410@gmail.com",
            githubAcc: "https://github.com/MohamedEltohamyAly",
          }}
        />
        <AboutUsCard
          imgSrc={avatar4}
          name="abdallah kalifa"
          specialty="back-end developer"
          description={CardDes}
          links={{
            facebook: "https://www.facebook.com/profile.php?id=100013063080309",
            whatsapp: "https://wa.me/+201050584461",
            phoneNumber: "tel:+201050584461",
            email: "mailto:@bebokhalefa31@gmail.com",
            githubAcc: "https://github.com/AbdullahKhalifa35",
          }}
        />
        <AboutUsCard
          imgSrc={avatar5}
          name="mohamed aymen"
          specialty="back-end developer"
          description={CardDes}
          links={{
            facebook:
              "https://www.facebook.com/profile.php?id=100006656057458&mibextid=ZbWKwL",
            whatsapp: "https://wa.me/+201033975215",
            phoneNumber: "tel:+201033975215",
            email: "mailto:@mohamedmohamed33289@gmail.com",
            githubAcc: "https://github.com/Mohamedaymana",
          }}
        />
        <AboutUsCard
          imgSrc={avatar6}
          name="ziad mahmoud"
          specialty="back-end developer"
          description={CardDes}
          links={{
            facebook:
              "https://www.facebook.com/profile.php?id=100071489490640&mibextid=ZbWKwL",
            whatsapp: "https://wa.me/+201129609244",
            phoneNumber: "tel:+201129609244",
            email: "mailto:@ziad.mahmoud21.07@hotmail.com",
            githubAcc: "https://github.com/ZiadMahmoud2106/",
          }}
        />
      </div>
    </div>
  );
}

export default AboutUs;
