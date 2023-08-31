import styles from "./FooterColumn.module.css";

export default function FooterColumn(props) {
  const allColumns = props.data.map((columns) => columns.col_values);
  console.log(allColumns);

  return props.data.map((column) => (
    <div>
      <div>
        {column.col_values.map((links) => (
          <div className={styles.link}>
            <a href="#">{links}</a>
          </div>
        ))}
      </div>
    </div>
  ));
}
