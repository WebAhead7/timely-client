import React from "react";
import CalendarItem from "../CalendarItem";
import "./CalendarList.css";

export default function CalendarList(props) {
  const { data, day } = props;
  return (
    <div className="calendar_list">
      <div className="days_list">{day}</div>
      {data.map((data, index) => (
        <CalendarItem key={index} data={data} />
      ))}
    </div>
  );
}
