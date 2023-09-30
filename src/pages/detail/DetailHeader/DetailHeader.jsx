import styles from "./DetailHeader.module.css";

export default function DetailHeader(props) {
  return (
    <div className={styles["detail-header"]}>
      <div className={styles["header-content"]}>
        <h2>{props.data.name}</h2>
        <p>{props.data.address}</p>
        <h4>{props.data.distance}</h4>
        <h4>{props.data.price}</h4>
      </div>

      <div className={styles["header-button"]}>
        <button>Reserve or book now!</button>
      </div>
    </div>
  );
}
