import React, { useEffect, useState, useCallback } from "react";
import CalendarList from "../CalendarList";

export default function Calendar(props) {
  const [selected, setSelected] = useState(null);

  const { setAppointment, appointment } = props;
  const { sunday, monday, tuesday, wednesday, thursday, id } = props.data;
  const days = Object.keys(props.data);

  const selectAppointment = () => {
    setAppointment(selected);
  };

  return (
    <div className="main_calendar_main">
      <div style={{ padding: 30 }}>
        <span>Hours</span>
      </div>

      <div className="main_calendar">
        <CalendarList
          setSelected={setSelected}
          selected={selected}
          data={sunday}
          day={days[0]}
        />
        <CalendarList
          setSelected={setSelected}
          selected={selected}
          data={monday}
          day={days[1]}
        />
        <CalendarList
          setSelected={setSelected}
          selected={selected}
          data={tuesday}
          day={days[2]}
        />
        <CalendarList
          setSelected={setSelected}
          selected={selected}
          data={wednesday}
          day={days[3]}
        />
        <CalendarList
          setSelected={setSelected}
          selected={selected}
          data={thursday}
          day={days[4]}
        />
      </div>
      <div>
        <button onClick={selectAppointment} style={{ margin: "10px" }}>
          Create Appointment
        </button>
      </div>
    </div>
  );
}
