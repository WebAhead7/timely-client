import React from "react";
import ClinicItem from "../ClinicItem";
import "./ClinicList.css";

export default function ClinicList(props) {
  return (
    <div className="clinic_list">
      {props.data.map((data, index) => (
        <ClinicItem key={index} data={data} />
      ))}
    </div>
  );
}
