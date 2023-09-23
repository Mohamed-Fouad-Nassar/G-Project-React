import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./pageNotFound.module.scss";

function PageNotFound() {
  useSetTitle("Page Not Found");

  const navigate = useNavigate();

  return (
    <div className={`${styles.container} container`}>
      <i className={`${styles["f-icon"]} fa-solid fa-triangle-exclamation`}></i>
      <h1>404 - page not found!</h1>
      <p>
        <span>oops!</span>
        it seems like you're lost, let me help you find your way back home!
        <span>:)</span>
      </p>
      <p>the following problems could be the case:</p>
      <span>• the link is broken</span>
      <span>• this page never existed</span>
      <span>• this page has been removed</span>
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

export default PageNotFound;
