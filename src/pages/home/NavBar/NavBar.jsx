import styles from "./NavBar.module.css";
import NavBarItems from "./NavBarItems";

export default function NavBar(props) {
  const NavbarOptions = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];

  return (
    <div className={styles["nav-container"]}>
      <nav className={styles["nav-bar"]}>
        <div className={styles["nav-header"]}>
          <a href="">
            <h4>Booking Website</h4>
          </a>

          <div>
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
        <NavBarItems navData={NavbarOptions}></NavBarItems>
      </nav>
    </div>
  );
}
