import React from "react";
import ClinicList from "../../components/ClinicList";
const fakedata = ["asda", "asdas", "hjhdf", "oglkghk"];
export default function Home() {
  return (
    <div className="home_page">
      <ClinicList data={fakedata} />
    </div>
  );
}
