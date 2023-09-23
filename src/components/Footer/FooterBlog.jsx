import FooterArticle from "./FooterArticle";

import styles from "./footerBlog.module.scss";

function FooterBlog() {
  const description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere commodi
        eveniet aspernatur obcaecati, itaque temporibus at quibusdam nostrum
        nulla, esse veniam aut.`;
  return (
    <div className={styles["f-blog"]}>
      <h3>from our blog</h3>
      <FooterArticle
        title="article 1 title"
        id="1"
        description={description}
        author="john doe"
      />
      <FooterArticle
        title="article 2 title"
        id="2"
        description={description}
        author="john doe"
      />
    </div>
  );
}

export default FooterBlog;
