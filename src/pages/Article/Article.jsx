import { SwiperSlide } from "swiper/react";
import BackBtn from "../../components/BackBtn/BackBtn";
import YouTubeVideo from "../../components/YouTubeVideo/YouTubeVideo";
import ArticleStatistics from "../../components/ArticleStatistics/ArticleStatistics";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider";
import BlogCards from "../../components/BlogCards/BlogCards";

import articleImage from "../../assets/images/blog/article-image-2.jpg";
import article1 from "../../assets/images/blog/article-image-1.jpg";
import article2 from "../../assets/images/blog/article-image-2.jpg";
import article3 from "../../assets/images/blog/article-image-3.jpg";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./article.module.scss";

function Article() {
  const description = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. At impedit
          laboriosam enim facilis.`;

  useSetTitle("article title");

  return (
    <div className={`${styles.container} container`}>
      <section className={styles.article}>
        <BackBtn />
        <h1>article title</h1>
        <div className={styles.image}>
          <img src={articleImage} alt={`${articleImage}-image`} />
        </div>
        <span className={styles.info}>
          written by <span>admin name</span>, on <span>article date</span>
        </span>
        <pre className={styles["article-body"]}>
          {"      "}Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempore incidunt quos provident, id error aspernatur nam cupiditate
          ipsam amet, doloribus commodi dicta corporis eligendi, saepe iusto in!
          Rerum, molestias enim. Lorem ipsum dolor sit, amet consectetur
          {"  "}adipisicing elit. Tempore incidunt quos provident, id error
          aspernatur nam cupiditate ipsam amet, doloribus commodi dicta corporis
          eligendi, saepe iusto in! Rerum, molestias enim. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Tempore incidunt quos
          provident, id error aspernatur nam cupiditate ipsam amet, doloribus
          commodi dicta corporis eligendi, saepe iusto in! Rerum, molestias
          enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempore incidunt quos provident, id error aspernatur nam cupiditate
          ipsam amet, doloribus commodi dicta corporis eligendi, saepe iusto in!
          Rerum, molestias enim. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Tempore incidunt quos provident, id error aspernatur
          nam cupiditate ipsam amet, doloribus commodi dicta corporis eligendi,
          saepe iusto in! Rerum, molestias enim. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Tempore incidunt quos provident, id
          error aspernatur nam cupiditate ipsam amet, doloribus commodi dicta
          corporis eligendi, saepe iusto in! Rerum, molestias enim. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Tempore incidunt quos
          provident, id error aspernatur nam cupiditate ipsam amet, doloribus
          commodi dicta corporis eligendi, saepe iusto in! Rerum, molestias
          enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempore incidunt quos provident, id error aspernatur nam cupiditate
          ipsam amet, doloribus commodi dicta corporis eligendi, saepe iusto in!
          Rerum, molestias enim.{"\n"}
          {"\n"}
          {"      "}Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempore incidunt quos provident, id error aspernatur nam cupiditate
          ipsam amet, doloribus commodi dicta corporis eligendi, saepe iusto in!
          Rerum, molestias enim. Lorem ipsum dolor sit, amet consectetur
          {"  "}adipisicing elit. Tempore incidunt quos provident, id error
          aspernatur nam cupiditate ipsam amet, doloribus commodi dicta corporis
          eligendi, saepe iusto in! Rerum, molestias enim. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Tempore incidunt quos
          provident, id error aspernatur nam cupiditate ipsam amet, doloribus
          commodi dicta corporis eligendi, saepe iusto in! Rerum, molestias
          enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempore incidunt quos provident, id error aspernatur nam cupiditate
          ipsam amet, doloribus commodi dicta corporis eligendi, saepe iusto in!
          Rerum, molestias enim. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Tempore incidunt quos provident, id error aspernatur
          nam cupiditate ipsam amet, doloribus commodi dicta corporis eligendi,
          saepe iusto in! Rerum, molestias enim. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Tempore incidunt quos provident, id
          error aspernatur nam cupiditate ipsam amet, doloribus commodi dicta
          corporis eligendi, saepe iusto in! Rerum, molestias enim. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Tempore incidunt quos
          provident, id error aspernatur nam cupiditate ipsam amet, doloribus
          commodi dicta corporis eligendi, saepe iusto in! Rerum, molestias
          enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempore incidunt quos provident, id error aspernatur nam cupiditate
          ipsam amet, doloribus commodi dicta corporis eligendi, saepe iusto in!
          Rerum, molestias enim.
        </pre>
        <YouTubeVideo videoLink="https://www.youtube.com/watch?v=b9pkXpKUUKc" />
        <ArticleStatistics likes="10" liked={true} saves="20" saved={false} />
        <div className={styles.other}>
          <div className={styles.head}>
            <h2>more articles</h2>
            <SwiperSlider>
              <SwiperSlide>
                <BlogCards
                  imgSrc={article1}
                  title="article 1 title"
                  id="100"
                  description={description}
                  author="john doe"
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCards
                  imgSrc={article2}
                  title="article 2 title"
                  id="200"
                  description={description}
                  author="john doe"
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCards
                  imgSrc={article3}
                  title="article 3 title"
                  id="300"
                  description={description}
                  author="john doe"
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCards
                  imgSrc={article1}
                  title="article 4 title"
                  id="400"
                  description={description}
                  author="john doe"
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCards
                  imgSrc={article2}
                  title="article 5 title"
                  id="500"
                  description={description}
                  author="john doe"
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCards
                  imgSrc={article3}
                  title="article 6 title"
                  id="600"
                  description={description}
                  author="john doe"
                />
              </SwiperSlide>
            </SwiperSlider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Article;
