import { useEffect, useRef, useState } from "react";
import styles from "./FormHeader.module.css";
import { DateRange } from "react-date-range";
import { addDays, format, getDate } from "date-fns";

export default function FormHeader() {
  function toSearch(e) {
    e.preventDefault();
    window.location.assign("/search");
  }

  const calendarRange = {
    startDate: new Date(),
    endDate: new Date(),
  };

  const [isShownCalendar, setIsShownCalendar] = useState(false);

  const [rangeDate, setRangeDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const calendar = (
    <DateRange
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      className={styles.date}
      minDate={new Date()}
      ranges={rangeDate}
      onChange={(date) => setRangeDate([date.selection])}
    />
  );

  function showCalendar() {
    if (isShownCalendar === false) {
      setIsShownCalendar(true);
    } else setIsShownCalendar(false);
  }

  const refOne = useRef(null);

  function hideOnClick(e) {}

  function hideOnClickOutside(e) {
    // console.log(e.target);
    // console.log(refOne.current);
    if (refOne.current && !refOne.current.contains(e.target))
      setIsShownCalendar(false);
  }

  const calenderInput = document.getElementById("calendar-input");

  document.addEventListener("click", hideOnClickOutside, true);

  // useEffect(() => {
  //   document.addEventListener("click", hideOnClickOutside, true);
  //   // calenderInput.addEventListener("click", showCalendar);
  // });

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={toSearch} className={styles.form}>
        <div>
          <span className="fa fa-bed"></span>
          <input placeholder="Where are you going?" />
        </div>

        <div>
          <span className="fa fa-calendar"></span>
          <input
            id="calendar-input"
            value={`${format(rangeDate[0].startDate, "MM/dd/yyyy")} to ${format(
              rangeDate[0].endDate,
              "MM/dd/yyyy"
            )}`}
            onClick={showCalendar}
          />
          <br />
          <div ref={refOne}>{isShownCalendar === true && calendar}</div>
        </div>

        <div>
          <span className="fa fa-male"></span>
          <span>1 adult • 0 children • 1 room</span>
        </div>
        <button
          className={styles["search-button"]}
          type="submit"
          data-rel="back"
        >
          Search
        </button>
      </form>
    </div>
  );
}
