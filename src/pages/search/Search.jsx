import SearchColumn from "./SearchColumn/SearchColumn";
import HotelsColumn from "./HotelsColumn/HotelsColumn";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <SearchColumn />
      <HotelsColumn />
    </div>
  );
};

export default Search;
