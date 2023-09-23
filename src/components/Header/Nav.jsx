import NavLi from "./NavLi";

import styles from "./nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavLi title="home" href="/" icon={`fa-solid fa-house`} />
        <NavLi
          title="doctors"
          href="/doctors"
          icon={`fa-solid fa-user-doctor`}
        />
        <NavLi title="medicines" href="/medicines" icon={`fa-solid fa-pills`} />
        <NavLi
          title="hospitals"
          href="/hospitals"
          icon={`fa-solid fa-hospital`}
        />
        <NavLi
          title="pharmacies"
          href="/pharmacies"
          icon={`fa-solid fa-house-medical`}
        />
        <NavLi
          title="blog"
          href="/blog"
          icon={`fa-solid fa-book-open-reader`}
        />
        <NavLi
          title="charities"
          href="/charities"
          icon={`fa-solid fa-hand-holding-heart`}
        />
        {/* <NavLi
          title="contacts"
          href="#contacts"
          icon={`fa-solid fa-comments`}
        /> */}
      </ul>
    </nav>
  );
}

export default Nav;
