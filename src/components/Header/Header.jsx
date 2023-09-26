import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import Logo from "../Logo/Logo";
import GuestAcc from "./GuestAcc";
import LoggedAcc from "./LoggedAcc";
import Nav from "./Nav";
import MobileNavTopSec from "./MobileNavTopSec";

import styles from "./header.module.scss";

function Header() {
  const headerRef = useRef();
  const mobileNavRef = useRef();

  // handle scroll
  // let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener("scroll", () => {
    // const scrollTopPosition =
    //   window.pageYOffset || document.documentElement.scrollTop;
    if (window.pageYOffset === 0) {
      headerRef.current?.classList.remove(`${styles.scroll}`);
    } else {
      headerRef.current?.classList.add(`${styles.scroll}`);
      // if (scrollTopPosition > lastScrollTop) {
      //   headerRef.current?.classList.add(`${styles.scroll_down}`);
      //   headerRef.current?.classList.remove(`${styles.scroll_up}`);
      // } else if (scrollTopPosition < lastScrollTop) {
      //   headerRef.current?.classList.remove(`${styles.scroll_down}`);
      //   headerRef.current?.classList.add(`${styles.scroll_up}`);
      // }
      // lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    }
  });

  const openMobileNav = () => {
    mobileNavRef.current.classList.add(`${styles.active}`);
  };

  const closeMobileNav = () => {
    if (mobileNavRef.current.classList.contains(`${styles.active}`))
      mobileNavRef.current.classList.remove(`${styles.active}`);
  };

  useOnClickOutside(mobileNavRef, () => {
    if (mobileNavRef.current.classList.contains(`${styles.active}`))
      mobileNavRef.current.classList.remove(`${styles.active}`);
  });

  return (
    <header ref={headerRef}>
      <div className={`${styles.container} container`}>
        <Logo href="/" />
        <div className={styles["mobile-btn"]}>
          <div className={styles.bars} onClick={openMobileNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.overlay}></div>
        </div>
        <div ref={mobileNavRef} className={`${styles.controls}`}>
          <Nav />
          {/* <GuestAcc /> */}
          <LoggedAcc />
          <MobileNavTopSec onClick={closeMobileNav} />
        </div>
      </div>
    </header>
  );
}

export default Header;
