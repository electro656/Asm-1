import styles from "./FormHeader.module.css";

export default function FormHeader() {
  function toSearch(e) {
    e.preventDefault();
    window.location.assign("/search");
  }

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={toSearch} className={styles.form}>
        <div>
          <span className="fa fa-bed"></span>
          <input placeholder="Where are you going?" />
        </div>

        <div>
          <span className="fa fa-calendar"></span>
          <span>06/24/2022 to 06/24/2022</span>
        </div>

        <div>
          <span className="fa fa-male"></span>
          <span>1 adult • 0 children • 1 room</span>
        </div>
        <button type="submit" data-rel="back">
          Search
        </button>
      </form>
    </div>
  );
}
