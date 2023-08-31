import styles from "./CityItem.module.css";

export default function CityItem(props) {
  return (
    <div className={styles["city-item"]}>
      {props.data.map((city) => (
        <div className={styles["img-block"]}>
          <img alt="" src={city.image}></img>
          <h1>{city.name}</h1>
          <h2>{city.subText}</h2>
        </div>
      ))}
    </div>
  );

  // <div className={styles["city-item"]}>
  //   <div className={styles["img-block"]}>
  //     <img alt="" src={props.data[0].image}></img>
  //     <h1>Hello</h1>
  //     <h2>Hello</h2>
  //   </div>

  //   <div className={styles["img-block"]}>
  //     <img alt="" src="./images/city_1.webp"></img>
  //     <h1>Hello</h1>
  //     <h2>Hello</h2>
  //   </div>

  //   <div className={styles["img-block"]}>
  //     <img alt="" src="./images/city_1.webp"></img>
  //     <h1>Hello</h1>
  //     <h2>Hello</h2>
  //   </div>
  // </div>
}
