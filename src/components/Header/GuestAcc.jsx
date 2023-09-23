import Button from "../Button/Button";

import styles from "./guestAcc.module.scss";

function GuestAcc() {
  return (
    <div className={styles["guest-account"]}>
      <Button type="link" href="/login">
        log in
      </Button>
      <Button secondary={true} type="link" href="/register">
        register
      </Button>
    </div>
  );
}

export default GuestAcc;
