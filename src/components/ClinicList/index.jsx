import React from "react";
import ClinicItem from "../ClinicItem";
import "./ClinicList.css";

export default function ClinicList(props) {
  const { list } = props;
  return (
    <div className="clinic_list">
      {list.map((data, index) => (
        <ClinicItem key={index} data={data} />
      ))}
    </div>
  );
}
