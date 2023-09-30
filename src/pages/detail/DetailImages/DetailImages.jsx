import styles from "./DetailImages.module.css";

export default function DetailImages(props) {
  return (
    <div className={styles["detail-images"]}>
      {props.data.photos.map((image) => (
        <img className={styles.images} src={image} alt="" />
      ))}
    </div>
  );
}
