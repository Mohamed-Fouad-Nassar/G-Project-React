import { useRef, useState } from "react";

import BackBtn from "../../components/BackBtn/BackBtn";
import Button from "../../components/Button/Button";

import reviewUploadedImg from "../../utilities/reviewUploadedImg";

import doctorAvatar from "../../assets/images/default/doctor-avatar.png";

import styles from "./addItems.module.scss";
import { useDispatch } from "react-redux";
import { addDoctor } from "../../store/slices/DoctorSlice";

function AddNewDoctor() {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    const doctor = {
      name,
      image,
      specialty,
      email,
      location,
      phoneNumber,
      facebook: facebookLink,
      instagram: instagramLink,
      twitter: twitterLink,
      whatsapp: whatsappNumber,
      locationLink: `https://maps.google.com/${location}`,
      creationAt: Date.now(),
      // moreInfo,
    };

    dispatch(addDoctor(doctor));

    console.log(doctor);
  };

  // const imagePreviewRef = useRef();

  return (
    <div className={`${styles.container} container`}>
      <div className={styles["sec-head"]}>
        <h1>modify doctor</h1>
        <BackBtn />
      </div>
      <div className={styles["sec-body"]}>
        <form onSubmit={submitForm}>
          <div className={styles["sec-flex"]}>
            <section className={styles.info}>
              <h2>doctor information</h2>

              <div className={styles.success}>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <span className={styles["error-message"]}>
                  error message here
                </span>
              </div>

              <div className={styles.error}>
                <input
                  type="text"
                  name="specialty"
                  placeholder="specialty"
                  onChange={(e) => setSpecialty(e.target.value)}
                />
                <span className={styles["error-message"]}>
                  error message here
                </span>
              </div>

              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="location"
                  onChange={(e) => setLocation(e.target.value)}
                />
                <span className={styles["error-message"]}></span>
              </div>

              <div>
                <input
                  type="text"
                  name="e-mail address"
                  placeholder="e-mail address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className={styles["error-message"]}></span>
              </div>

              <div>
                <input
                  type="text"
                  name="phone-number"
                  placeholder="phone number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <span className={styles["error-message"]}></span>
              </div>

              <div>
                <input
                  type="text"
                  name="image"
                  placeholder="image link"
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
            <h2>addition information</h2>
            <textarea
              id="body"
              name="more-info"
              placeholder="more information about doctor"
              defaultValue={""}
              onChange={(e) => setMoreInfo(e.target.value)}
            />
          </div>
          <div className={styles.social}>
            <h2>social media links</h2>
            <div className={styles.inputs}>
              <div>
                <input
                  type="text"
                  name="facebook-link"
                  placeholder="facebook link"
                  onChange={(e) => setFacebookLink(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="instagram-link"
                  placeholder="instagram link"
                  onChange={(e) => setInstagramLink(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="twitter-link"
                  placeholder="twitter link"
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
                <input
                  type="text"
                  name="whatsapp-number"
                  placeholder="whatsapp number"
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
          <Button type="submit">modify</Button>
        </form>
      </div>
    </div>
  );
}

export default AddNewDoctor;
