import React from "react";
import "./ClinicItem.css";
export default function ClinicItem(props) {
  return (
    <div className="clinic_item">
      <span>{props.data}</span>
    </div>
  );
}
