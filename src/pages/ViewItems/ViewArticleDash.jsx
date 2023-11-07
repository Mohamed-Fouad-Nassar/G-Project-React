import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import articleImg from "../../assets/images/blog/article-image-2.jpg";

import ModalImg from "../../components/Modals/ModalImg";
import ModalField from "../../components/Modals/ModalField";
import DoctorModal from "../../components/Modals/DoctorModal";

import { getSingleArticle } from "../../store/slices/articleSlice";

import styles from "./viewDoctorDash.module.scss";

function ViewArticleDash() {
  const { articleId } = useParams();
  const { singleArticle } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleArticle(articleId));
  }, [dispatch, articleId]);

  return (
    <DoctorModal backUrl={"/dashboard/blog"} title={"article info"}>
      {singleArticle && (
        <div className={styles.felids}>
          <article className={styles.box}>
            <div className={styles["flex-sec"]}>
              <div className={styles["left-sec"]}>
                <ModalField title={"title"} value={singleArticle.title} />
                <ModalField title={"author"} value={singleArticle.author} />
                <ModalField
                  title={"creation date"}
                  value={new Date(singleArticle.creationAt).toDateString()}
                />
                <ModalField
                  title={"last update"}
                  value={new Date(singleArticle.updatedAt).toDateString()}
                />
              </div>
              <div className={styles["right-sec"]}>
                <ModalImg src={articleImg} alt={"article image"} />
              </div>
            </div>
          </article>
          <div className={`${styles["grid-sec"]} ${styles.full}`}>
            <ModalField title={"likes"} value={singleArticle.likes} />
            <ModalField title={"saves"} value={singleArticle.saves} />
          </div>
          <ModalField
            title={"youtube video"}
            value={singleArticle.youtubeLink}
          />
          <ModalField
            title={"content"}
            value={
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: singleArticle.content }}
              />
            }
          />
        </div>
      )}
    </DoctorModal>
  );
}

export default ViewArticleDash;
