import { useState } from "react";
import styles from "./HotelsColumn.module.css";

export default function HotelsColumn(props) {
  const freeCancel = (
    <div className={styles["free-cancel"]}>
      <h4>Free cancellation</h4>
      <br />
      <p>You can cancel later, so lock in this great price today!</p>
    </div>
  );

  // create a function that takes user to Detail page, but only for the first hotel row
  function toDetail(e) {
    const eventTitle =
      e.target.parentElement.parentElement.previousSibling.childNodes[0]
        .textContent;
    // console.log(eventTitle);

    if (eventTitle === props.data[0].name) {
      e.preventDefault();
      window.location.assign("/detail");
    }
  }

  return (
    <div className={styles["hotels-column"]}>
      {props.data.map((hotel) => (
        <div className={styles["hotel-item"]}>
          <img src={hotel.image_url} alt="?" />
          <div className={styles["hotel-info"]}>
            <h2>{hotel.name}</h2>
            <br />

            <p>{hotel.distance} from here</p>
            <br />

            <p className={styles["free-tag"]}>{hotel.tag}</p>
            <br />

            <p className={styles.desc}>{hotel.description}</p>
            <br />

            <p>{hotel.type}</p>
            <br />

            {hotel.free_cancel && freeCancel}
          </div>
          <div className={styles["rate-and-price"]}>
            <div className={styles.rating}>
              <h4>{hotel.rate_text}</h4>
              <span>{hotel.rate}</span>
            </div>

            <div className={styles.pricing}>
              <h1>${hotel.price}</h1>
              <p>Includes taxes and fees</p>
              <button onClick={toDetail}>See availability</button>
            </div>
          </div>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
