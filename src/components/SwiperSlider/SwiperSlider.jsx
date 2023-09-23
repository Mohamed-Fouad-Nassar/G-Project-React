import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from "swiper/modules";
import { Swiper, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./swiperSlider.module.scss";

function SwiperSlider({ children }) {
  const swiper = useSwiper(".mySwiper");

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={15}
      freeMode={true}
      fade={"true"}
      grabCursor={"true"}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      }}
      modules={[FreeMode, Navigation, Pagination, Scrollbar, A11y]}
      className={`${styles.slider} mySwiper`}
    >
      <div className={styles.slides}>{children}</div>
      <div className={`${styles["swiper-navBtn"]} swiper-button-next`}></div>
      <div className={`${styles["swiper-navBtn"]} swiper-button-prev`}></div>
      <div
        className={`${styles["swiper-pagination-bullet"]} swiper-pagination`}
      ></div>
    </Swiper>
  );
}

export default SwiperSlider;
