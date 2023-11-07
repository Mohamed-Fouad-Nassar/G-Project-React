import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DoctorModal from "../../components/Modals/DoctorModal";
import Button from "../../components/Button/Button";

import { editCharity, getSingleCharity } from "../../store/slices/charitySlice";

import styles from "./editItems.module.scss";

function EditCharity() {
  const { charityId } = useParams();

  const { singleCharity } = useSelector((state) => state.charities);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (singleCharity) {
      setName(singleCharity.name);
      setLocation(singleCharity.location);
      setDescription(singleCharity.description);
      setEmail(singleCharity.email);
      setPhoneNumber(singleCharity.phoneNumber);
      setImage(singleCharity.image);
      setFacebookLink(singleCharity.facebook);
      setInstagramLink(singleCharity.instagram);
      setTwitterLink(singleCharity.twitter);
      setWhatsappNumber(singleCharity.whatsapp);
    }
  }, [singleCharity]);

  useEffect(() => {
    dispatch(getSingleCharity(charityId));
  }, [dispatch, charityId]);

  const submitForm = (e) => {
    e.preventDefault();

    const charity = {
      name,
      image,
      description,
      email,
      location,
      phoneNumber,
      facebook: facebookLink,
      instagram: instagramLink,
      twitter: twitterLink,
      whatsapp: whatsappNumber,
      locationLink: `https://maps.google.com/${location}`,
      updatedAt: Date.now(),
    };

    dispatch(editCharity(charity));
  };

  // const imagePreviewRef = useRef();

  return (
    <DoctorModal backUrl={"/dashboard/charities"} title={"edit charity"}>
      <form onSubmit={submitForm}>
        <div className={styles["sec-flex"]}>
          <section className={styles.info}>
            <label htmlFor="name">name</label>
            <div className={styles.success}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className={styles["error-message"]}>
                error message here
              </span>
            </div>

            <label htmlFor="location">location</label>
            <div>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <span className={styles["error-message"]}></span>
            </div>

            <label htmlFor="e-mail">e-mail</label>
            <div>
              <input
                type="text"
                id="e-mail"
                name="e-mail address"
                placeholder="e-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={styles["error-message"]}></span>
            </div>

            <label htmlFor="phone-number">phone number</label>
            <div>
              <input
                type="text"
                id="phone-number"
                name="phone-number"
                placeholder="phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <span className={styles["error-message"]}></span>
            </div>

            <label htmlFor="image">image</label>
            <div>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="image link"
                value={image}
                onChange={(e) => setImage(e.target.value)}
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
          <h2>description</h2>
          <textarea
            id="body"
            name="description"
            placeholder="more information about charity"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.social}>
          <h2>social media links</h2>
          <div className={styles.inputs}>
            <div>
              <label htmlFor="facebook-link">facebook link</label>
              <input
                type="text"
                id="facebook-link"
                name="facebook-link"
                placeholder="facebook link"
                value={facebookLink}
                onChange={(e) => setFacebookLink(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="instagram-link">instagram link</label>
              <input
                type="text"
                id="instagram-link"
                name="instagram-link"
                placeholder="instagram link"
                value={instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="twitter-link">twitter link</label>
              <input
                type="text"
                id="twitter-link"
                name="twitter-link"
                placeholder="twitter link"
                value={twitterLink}
                onChange={(e) => setTwitterLink(e.target.value)}
              />
            </div>

            {/* <div>
                  <input
                    type="text"
                    name="mail-address"
                    placeholder="mail address"
                  />
               </div> */}

            <div>
              <label htmlFor="whatsapp-number">whatsapp number</label>
              <input
                type="text"
                id="whatsapp-number"
                name="whatsapp-number"
                placeholder="whatsapp number"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
              />
            </div>

            {/* <div>
                  <input
                    type="text"
                    name="phone-number"
                    placeholder="phone number"
                  />
               </div> */}
          </div>
        </div>
        {/* <Button loading={loading} type="submit"> */}
        <Button type="submit">edit</Button>
      </form>
    </DoctorModal>
  );
}

export default EditCharity;
