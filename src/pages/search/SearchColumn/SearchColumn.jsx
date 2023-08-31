import styles from "./SearchColumn.module.css";

export default function SearchColumn() {
  function nothing(e) {
    e.preventDefault();
  }

  return (
    <div className={styles["search-column"]}>
      <h2>Search</h2>
      <form onSubmit={nothing} className={styles["search-form"]}>
        <label>Destination</label>
        <input />

        <label>Check-in date</label>
        <input value="06/24/2022 to 06/24/2022" />

        <label>Options</label>
        <div className={styles["search-options"]}>
          <div>
            <label>
              Min prices <span>per night</span>
            </label>
            <input />
          </div>

          <div>
            <label>
              Max prices <span>per night</span>
            </label>
            <input />
          </div>

          <div>
            <label>Adult</label>
            <input placeholder="1" />
          </div>

          <div>
            <label>Children</label>
            <input placeholder="0" />
          </div>

          <div>
            <label>Room</label>
            <input placeholder="1" />
          </div>
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
