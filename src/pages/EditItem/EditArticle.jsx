import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button/Button";
import DoctorModal from "../../components/Modals/DoctorModal";

import { getSingleArticle } from "../../store/slices/articleSlice";

import styles from "./editItems.module.scss";
import TinyMCE from "../../components/TinyMCE/TinyMCE";

function EditArticle() {
  const { articleId } = useParams();

  const { singleArticle } = useSelector((state) => state.articles);

  const [title, setTitle] = useState("");
  const [author, seAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (singleArticle) {
      setTitle(singleArticle.title);
      seAuthor(singleArticle.author);
      setThumbnail(singleArticle.thumbnail);
      setYoutubeLink(singleArticle.youtubeLink);
      setContent(singleArticle.content);
    }
  }, [singleArticle]);

  useEffect(() => {
    dispatch(getSingleArticle(articleId));
  }, [dispatch, articleId]);

  const submitForm = (e) => {
    e.preventDefault();

    // const article = {
    //   name,
    //   image,
    //   specialty,
    //   email,
    //   location,
    //   phoneNumber,
    //   facebook: facebookLink,
    //   instagram: instagramLink,
    //   twitter: twitterLink,
    //   whatsapp: whatsappNumber,
    //   locationLink: `https://maps.google.com/${location}`,
    //   updatedAt: Date.now(),
    //   // moreInfo,
    // };

    // dispatch(EditArticle(article));
  };

  // const imagePreviewRef = useRef();

  return (
    <DoctorModal backUrl={"/dashboard/blog"} title={"edit article"}>
      <form onSubmit={submitForm}>
        <div className={styles["sec-flex"]}>
          <section className={styles.info}>
            <label htmlFor="title">title</label>
            <div className={styles.success}>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <span className={styles["error-message"]}>
                error message here
              </span>
            </div>

            <label htmlFor="author">author</label>
            <div>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="author"
                value={author}
                onChange={(e) => seAuthor(e.target.value)}
              />
              <span className={styles["error-message"]}></span>
            </div>

            <label htmlFor="thumbnail">thumbnail</label>
            <div>
              <input
                type="text"
                id="thumbnail"
                name="thumbnail"
                placeholder="thumbnail link"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
              <span className={styles["error-message"]}></span>
            </div>

            <label htmlFor="youtubeLink">youtubeLink</label>
            <div>
              <input
                type="text"
                id="youtubeLink"
                name="youtubeLink"
                placeholder="youtube link"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
              />
              <span className={styles["error-message"]}></span>
            </div>
          </section>
          {/* <section className={styles.image}>
                <h2>upload doctor image</h2>
                <section className={styles["avatar-upload"]}>
                  <div className={styles["avatar-edit"]}>
                    <input
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => {
                        reviewUploadedImg(e.target, imagePreviewRef.current);
                      }}
                    />
                    <label htmlFor="imageUpload" />
                  </div>
                  <div className={styles["avatar-preview"]}>
                    <div>
                      <img
                        ref={imagePreviewRef}
                        src={doctorAvatar}
                        alt="profile-image"
                      />
                    </div>
                  </div>
                </section>
              </section> */}
        </div>
        <div>
          <h2>article content</h2>
          {/* <textarea
            id="body"
            name="content"
            placeholder="article content"
            defaultValue={content}
            onChange={(e) => setContent(e.target.value)}
          /> */}
          <TinyMCE />
        </div>
        {/* <Button loading={loading} type="submit"> */}
        <Button type="submit">edit</Button>
      </form>
    </DoctorModal>
  );
}

export default EditArticle;
