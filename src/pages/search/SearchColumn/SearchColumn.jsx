import styles from "./SearchColumn.module.css";

export default function SearchColumn() {
  return (
    <div className={styles["search-column"]}>
      <h3>Search</h3>
      <form className={styles["search-form"]}>
        <label>Destination</label>
        <input />

        <label>Check-in date</label>
        <input />
      </form>
    </div>
  );
}
