import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./errorPage.module.scss";

function ErrorPage({ err }) {
  useSetTitle("Page Not Found");

  const navigate = useNavigate();

  return (
    <div className={`${styles.container} container`}>
      <i className={`${styles["f-icon"]} fa-regular fa-face-sad-tear`}></i>
      <h1>something went wrong</h1>
      <p>
        <span>oops!</span>
        {"it seems like you're lost, let me help you find your way back home!"}
        <span>{":)"}</span>
      </p>
      <p>the problem is:</p>
      <span>{err}</span>
      <div className={styles.btns}>
        <Button type="link" href="/">
          go to home
        </Button>
        <Button
          secondary={true}
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          go back
        </Button>
      </div>
    </div>
  );
}

export default ErrorPage;
