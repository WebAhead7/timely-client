import React from "react";
import { Link } from "react-router-dom";
import "./ClinicHeader.css";

export default function ClinicHeader(props) {
  return (
    <div className="clinic_header">
      <div className="img_header">
        <img src="https://assets.entrepreneur.com/content/3x2/2000/1599168686-GettyImages-1270402636.jpg?width=500" />
      </div>
      <div className="dsc_header">
        <div className="title_header">
          <h1>Emil Shihade</h1>
          <h2>Eyes doctor</h2>
        </div>
        <div className="doc_description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
          dolore id nam obcaecati consectetur ratione officia dolorem commodi
          laboriosam fuga, culpa repellendus saepe pariatur ex laborum
          voluptatem autem accusantium cumque.
        </div>
      </div>
    </div>
  );
}
