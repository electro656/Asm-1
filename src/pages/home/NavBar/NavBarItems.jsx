import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBarItems.module.css";

export default function NavBarItems(props) {
  return (
    <div>
      {props.navData.map((item) => (
        <div
          className={`${styles["nav-items"]} ${
            item.active ? styles["item-border"] : ""
          }`}
        >
          <span className={`fa ${item.icon}`}></span>
          <a href="#">{item.type}</a>
        </div>
      ))}
    </div>
  );
}
