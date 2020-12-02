import React from "react";
import ClinicList from "../../components/ClinicList";
import "./Home.css";
const fakedata = ["asda", "asdas", "hjhdf", "oglkghk"];
export default function Home(props) {
  const { list } = props;
  return (
    <div className="home_page">
      {/* {list && <div>{list[0].firstname}</div>} */}
      {list && <ClinicList list={list} />}
    </div>
  );
}
