import styles from "./Registration.module.css";

export default function Footer() {
  return (
    <div className={styles["reg-content"]}>
      <h1>Save time, save money!</h1>
      <br />
      <span>Sign up and we'll send the best deals to you</span>
      <br />
      <br />
      <div className={styles["subscribe-form"]}>
        <form>
          <input placeholder="  Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
