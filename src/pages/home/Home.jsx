import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import CityList from "./CityList/CityList";
import PropertyList from "./PropertyList/PropertyList";
import HotelList from "./HotelList/HotelList";
import Registration from "./Registration/Registration";
import Footer from "./Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <div className={styles.header}>
          <NavBar></NavBar>
          <Header></Header>
        </div>

        <div className={styles.body}>
          <div>
            <CityList />
          </div>

          <div>
            <PropertyList />
          </div>

          <div>
            <HotelList />
          </div>
        </div>
      </div>

      <div className={styles.register}>
        <Registration />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
