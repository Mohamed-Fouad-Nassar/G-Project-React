import { useNavigate } from "react-router-dom";

import styles from "./cancelBtn.module.scss";

function CancelBtn({ url }) {
  const navigate = useNavigate();

  return (
    <button
      className={styles.cancel}
      onClick={() => {
        navigate(url);

        //   const Toast = Swal.mixin({
        //     toast: true,
        //     position: "top-end",
        //     showConfirmButton: false,
        //     timer: 3000,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //       toast.addEventListener("mouseenter", Swal.stopTimer);
        //       toast.addEventListener("mouseleave", Swal.resumeTimer);
        //     },
        //   });

        //   Toast.fire({
        //     icon: "success",
        //     title: "Signed in successfully",
        //   });
      }}
    >
      <i className={`${styles["f-icon"]} fa-solid fa-xmark`} />
    </button>
  );
}

export default CancelBtn;
