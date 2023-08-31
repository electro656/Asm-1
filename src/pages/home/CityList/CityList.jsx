import CityItem from "./CityItem";
import styles from "./CityList.module.css";

export default function CityList() {
  const cityData = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];

  return (
    <div className={styles["city-list"]}>
      <CityItem data={cityData} />
    </div>
  );
}
