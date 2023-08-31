import styles from "./PropertyItem.module.css";

export default function PropertyItem(props) {
  return (
    <div className={styles["property-item"]}>
      {props.data.map((type) => (
        <div className={styles["img-block"]}>
          <img alt="" src={type.image}></img>
          <h3>{type.name}</h3>
          <span>{type.count} hotels</span>
        </div>
      ))}
    </div>
  );
}
