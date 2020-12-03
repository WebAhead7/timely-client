import React, { useState } from "react";
import { createCalendarApi } from "../../Api/api";
import "./CreateCalendar.css";
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const workingDays = ["sunday", "monday", "friday"];
export default function CreateCalendar(props) {
  const [checked, setChecked] = useState();
  const { setCalendarCreated } = props;

  const submitCalendar = () => {
    const id = JSON.parse(localStorage.getItem("clientId"));
    createCalendarApi(id, workingDays);
    setCalendarCreated(true);
  };

  return (
    <div className="create_calendar_page">
      <div>Hello, Doctor</div>
      <div>
        Looks like you don't have a calendar yet, Please create your calendar
      </div>
      <form
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 40,
        }}
      >
        {days.map((day, index) => (
          <div key={index} className="create_calendar_item">
            <label htmlFor={day}>{day}</label>
            <input
              type="checkbox"
              id={day}
              name={day}
              value={day}
              onChange={(event) => setChecked(event.target.value)}
            />
          </div>
        ))}
      </form>
      <button
        style={{ padding: 5, fontSize: 18, fontWeight: "bold", margin: 30 }}
        onClick={submitCalendar}
      >
        Create Calendar
      </button>
    </div>
  );
}
