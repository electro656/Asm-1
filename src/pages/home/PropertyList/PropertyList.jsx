import styles from "./PropertyList.module.css";
import PropertyItem from "./PropertyItem";

export default function PropertyList() {
  const typeData = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];

  return (
    <div className={styles["property-list"]}>
      <h2>Browse by property type</h2>
      <PropertyItem data={typeData} />
    </div>
  );
}
