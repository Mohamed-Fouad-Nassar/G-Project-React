import BlogCards from "../../components/BlogCards/BlogCards";
import FootSection from "../../components/FootSection/FootSection";

import useSetTitle from "../../hooks/useSetTitle";

import article1 from "../../assets/images/blog/article-image-1.jpg";
import article2 from "../../assets/images/blog/article-image-2.jpg";
import article3 from "../../assets/images/blog/article-image-3.jpg";

import styles from "./articles.module.scss";

function Articles() {
  useSetTitle("articles");

  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa consequatur ullam excepturi dolores repellat.`;

  const handleClick = () => {
    console.log("profile blogs handle click");
  };

  return (
    <div className={styles.content}>
      <section className={styles["sec-body"]}>
        <BlogCards
          imgSrc={article1}
          title="article 1 title"
          id="100"
          description={description}
          author="john doe"
        />
        <BlogCards
          imgSrc={article2}
          title="article 2 title"
          id="200"
          description={description}
          author="john doe"
        />
        <BlogCards
          imgSrc={article3}
          title="article 3 title"
          id="300"
          description={description}
          author="john doe"
        />
        <BlogCards
          imgSrc={article1}
          title="article 4 title"
          id="400"
          description={description}
          author="john doe"
        />
        <BlogCards
          imgSrc={article2}
          title="article 5 title"
          id="500"
          description={description}
          author="john doe"
        />
        <BlogCards
          imgSrc={article3}
          title="article 6 title"
          id="600"
          description={description}
          author="john doe"
        />
      </section>
      <FootSection className={styles["sec-foot"]} onClick={handleClick} />
    </div>
  );
}

export default Articles;
