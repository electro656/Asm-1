import styles from "./HotelItem.module.css";

export default function HotelItem(props) {
  return (
    <div className={styles["hotel-item"]}>
      {props.data.map((hotel) => (
        <div>
          <img src={hotel.image_url} alt="" />
          <div className={styles["hotel-info"]}>
            <a href="#">
              <b>{hotel.name}</b>
            </a>
            <span>{hotel.city}</span>
            <span
              style={{ fontWeight: 600 }}
            >{`Starting from $${hotel.price}`}</span>
            <div className={styles["hotel-rating"]}>
              <span>{`${hotel.rate}`}</span>
              <span>{`${hotel.type}`}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
