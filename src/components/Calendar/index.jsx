import React from "react";
import CalendarList from "../CalendarList";

export default function Calendar(props) {
  const { sunday, monday, tuesday, wednesday } = props.data;
  const days = Object.keys(props.data);
  return (
    <div className="main_calendar_main">
      <div style={{ padding: 30 }}>
        <span>Hours</span>
      </div>

      <div className="main_calendar">
        <CalendarList data={sunday} day={days[0]} />
        <CalendarList data={monday} day={days[1]} />
        <CalendarList data={tuesday} day={days[2]} />
        <CalendarList data={wednesday} day={days[3]} />
      </div>
    </div>
  );
}
