import React from "react";
import { Link } from "react-router-dom";
import "./CalendarItem.css";

export default function CalendarItem(props) {
  const { hour, istaken, takenby } = props.data;
  return (
    <div className="calendar_item">
      {istaken ? <span>Taken</span> : <span>{hour}:00</span>}
    </div>
  );
}
