import { ActiveLink } from "./ActiveLink";
// MIS COMPONENTES
import styles from "./navBar.module.css";
// CONSTANTES
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];
// INICIO
export const NavBar = () => {
  // RENDER
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((menuItem) => (
        <ActiveLink
          key={menuItem.href}
          text={menuItem.text}
          href={menuItem.href}
        />
      ))}
    </nav>
  );
};
