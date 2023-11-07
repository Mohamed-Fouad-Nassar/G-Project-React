import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DoctorModal from "../../components/Modals/DoctorModal";
import Button from "../../components/Button/Button";

import { editDoctor, getSingleDoctor } from "../../store/slices/DoctorSlice";

import styles from "./editItems.module.scss";

function EditDoctor() {
  const { doctorId } = useParams();

  const { singleDoctor } = useSelector((state) => state.doctors);

  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  // const [moreInfo, setMoreInfo] = useState(singleDoctor.);
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (singleDoctor) {
      setName(singleDoctor.name);
      setSpecialty(singleDoctor.specialty);
      setLocation(singleDoctor.location);
      setEmail(singleDoctor.email);
      setPhoneNumber(singleDoctor.phoneNumber);
      setImage(singleDoctor.image);
      setFacebookLink(singleDoctor.facebook);
      setInstagramLink(singleDoctor.instagram);
      setTwitterLink(singleDoctor.twitter);
      setWhatsappNumber(singleDoctor.whatsapp);
    }
  }, [singleDoctor]);

  useEffect(() => {
    dispatch(getSingleDoctor(doctorId));
  }, [dispatch, doctorId]);

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
      updatedAt: Date.now(),
      // moreInfo,
    };

    dispatch(editDoctor(doctor));
  };

  // const imagePreviewRef = useRef();

  return (
    <DoctorModal backUrl={"/dashboard/doctors"} title={"edit doctor"}>
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

            <label htmlFor="specialty">specialty</label>
            <div className={styles.error}>
              <input
                type="text"
                id="specialty"
                name="specialty"
                placeholder="specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
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
        {/* <div>
             <h2>addition information</h2>
             <textarea
               id="body"
               name="more-info"
               placeholder="more information about doctor"
               defaultValue={""}
               onChange={(e) => setMoreInfo(e.target.value)}
             />
           </div> */}
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

export default EditDoctor;
