import BlogCards from "../BlogCards/BlogCards";
import FootSection from "../FootSection/FootSection";
import HeadSection from "../HeadSection/HeadSection";

import article1 from "../../assets/images/blog/article-image-1.jpg";

import styles from "./blog.module.scss";
import { useSelector } from "react-redux";

function Blog() {
  const description = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. At impedit
          laboriosam enim facilis.`;

  const { articles } = useSelector((state) => state.articles);

  return (
    <section className={styles.blog} id="blog">
      <div className={`${styles.container} container`}>
        <HeadSection title="our blog" description={description} />
        <div className={styles["sec-body"]}>
          {articles.slice(0, 3).map(({ id, title, author }) => (
            <BlogCards
              key={id}
              imgSrc={article1}
              title={title}
              id={id}
              description={description}
              author={author}
            />
          ))}

          {/* <BlogCards
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
          /> */}
        </div>
        <FootSection type="link" targetPage="/blog" />
      </div>
    </section>
  );
}

export default Blog;
