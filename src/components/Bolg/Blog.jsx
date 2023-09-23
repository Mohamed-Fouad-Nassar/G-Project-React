import BlogCards from "../BlogCards/BlogCards";
import FootSection from "../FootSection/FootSection";
import HeadSection from "../HeadSection/HeadSection";

import article1 from "../../assets/images/blog/article-image-1.jpg";
import article2 from "../../assets/images/blog/article-image-2.jpg";
import article3 from "../../assets/images/blog/article-image-3.jpg";

import styles from "./blog.module.scss";

function Blog() {
  const description = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. At impedit
          laboriosam enim facilis.`;

  return (
    <section className={styles.blog} id="blog">
      <div className={`${styles.container} container`}>
        <HeadSection title="our blog" description={description} />
        <div className={styles["sec-body"]}>
          <BlogCards
            imgSrc={article1}
            title="article 1 title"
            id="100"
            description={description}
            author="jhon doe"
          />
          <BlogCards
            imgSrc={article2}
            title="article 2 title"
            id="200"
            description={description}
            author="jhon doe"
          />
          <BlogCards
            imgSrc={article3}
            title="article 3 title"
            id="300"
            description={description}
            author="jhon doe"
          />
        </div>
        <FootSection type="link" targetPage="/blog" />
      </div>
    </section>
  );
}

export default Blog;
