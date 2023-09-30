import styles from "./Header.module.css";
import FormHeader from "./FormHeader";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.introduce}>
        <h1>A lifetime of discounts? It's Genius</h1>
        <br />
        <span>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </span>
        <br />
        <br />
        <button className={styles["reg-button"]}>Sign in / Register</button>
      </div>

      <FormHeader />

      {/* <div className={styles["input-bar"]}>
        <form></form>
      </div> */}
    </header>
  );
}
