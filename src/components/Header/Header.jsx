import { useRef } from "react";

import Logo from "../Logo/Logo";
import GuestAcc from "./GuestAcc";
import LoggedAcc from "./LoggedAcc";
import Nav from "./Nav";

import styles from "./header.module.scss";

function Header() {
  const headerRef = useRef();

  // handle scroll
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener("scroll", () => {
    const scrollTopPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (window.pageYOffset === 0) {
      headerRef.current?.classList.remove(`${styles.scroll}`);
    } else {
      headerRef.current?.classList.add(`${styles.scroll}`);
      if (scrollTopPosition > lastScrollTop) {
        headerRef.current?.classList.add(`${styles.scroll_down}`);
        headerRef.current?.classList.remove(`${styles.scroll_up}`);
      } else if (scrollTopPosition < lastScrollTop) {
        headerRef.current?.classList.remove(`${styles.scroll_down}`);
        headerRef.current?.classList.add(`${styles.scroll_up}`);
      }
      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    }
  });

  return (
    <header ref={headerRef}>
      <div className={`${styles.container} container`}>
        <Logo href="/" />
        <Nav />
        {/* <GuestAcc /> */}
        <LoggedAcc />
      </div>
    </header>
  );
}

export default Header;
