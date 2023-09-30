import styles from "./DetailDesc.module.css";

export default function DetailDesc(props) {
  function toDetail(e) {
    e.preventDefault();
    window.location.assign("/detail");
  }

  return (
    <div className={styles["detail-desc"]}>
      <div className={styles.desc}>
        <h2>{props.data.title}</h2>
        <p>{props.data.description}</p>
      </div>

      <div className={styles["offer"]}>
        <h3>Perfect for a 9-night stay!</h3>
        <p>{props.data.nine_night_desc}</p>
        <h2>
          {`$${props.data.nine_night_price} `}
          <span>(9 nights)</span>
        </h2>
        <form onSubmit={toDetail}>
          <button onClick={toDetail}>Reserve or Book Now!</button>
        </form>
      </div>
    </div>
  );
}
