import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar";
import ClinicHeader from "../../components/ClinicHeader";
import { getDocClinic } from "../../Api/api";
export default function Clinic(props) {
  const [clinic, setClinic] = useState(null);

  const data = { sunday, monday, tuesday, wednesday };
  const {
    match: {
      params: { id, docname, title },
    },
  } = props;

  useEffect(() => {
    getDocClinic(id, setClinic);
  }, []);
  if (!clinic) return <div>Loading</div>;
  //   const { sunday } = clinic.cal_data;
  //   console.log(clinic.cal_data.sunday);
  return (
    <div>
      <ClinicHeader data={clinic} />
      <Calendar data={clinic.cal_data} />
    </div>
  );
}

const sunday = [
  {
    hour: 9,
    istaken: false,
    takenby: null,
  },
  {
    hour: 10,
    istaken: true,
    takenby: null,
  },
  {
    hour: 11,
    istaken: false,
    takenby: null,
  },
  {
    hour: 12,
    istaken: false,
    takenby: null,
  },
  {
    hour: 13,
    istaken: false,
    takenby: null,
  },
  {
    hour: 14,
    istaken: false,
    takenby: null,
  },
  {
    hour: 15,
    istaken: false,
    takenby: null,
  },
  {
    hour: 16,
    istaken: false,
    takenby: null,
  },
  {
    hour: 17,
    istaken: true,
    takenby: null,
  },
  {
    hour: 18,
    istaken: false,
    takenby: null,
  },
];

const monday = [
  {
    hour: 9,
    istaken: true,
    takenby: null,
  },
  {
    hour: 10,
    istaken: true,
    takenby: null,
  },
  {
    hour: 11,
    istaken: false,
    takenby: null,
  },
  {
    hour: 12,
    istaken: false,
    takenby: null,
  },
  {
    hour: 13,
    istaken: false,
    takenby: null,
  },
  {
    hour: 14,
    istaken: true,
    takenby: null,
  },
  {
    hour: 15,
    istaken: false,
    takenby: null,
  },
  {
    hour: 16,
    istaken: true,
    takenby: null,
  },
  {
    hour: 17,
    istaken: true,
    takenby: null,
  },
  {
    hour: 18,
    istaken: false,
    takenby: null,
  },
];

const tuesday = [
  {
    hour: 9,
    istaken: true,
    takenby: null,
  },
  {
    hour: 10,
    istaken: true,
    takenby: null,
  },
  {
    hour: 11,
    istaken: true,
    takenby: null,
  },
  {
    hour: 12,
    istaken: true,
    takenby: null,
  },
  {
    hour: 13,
    istaken: true,
    takenby: null,
  },
  {
    hour: 14,
    istaken: true,
    takenby: null,
  },
  {
    hour: 15,
    istaken: false,
    takenby: null,
  },
  {
    hour: 16,
    istaken: true,
    takenby: null,
  },
  {
    hour: 17,
    istaken: true,
    takenby: null,
  },
  {
    hour: 18,
    istaken: true,
    takenby: null,
  },
];

const wednesday = [
  {
    hour: 9,
    istaken: true,
    takenby: null,
  },
  {
    hour: 10,
    istaken: true,
    takenby: null,
  },
  {
    hour: 11,
    istaken: false,
    takenby: null,
  },
  {
    hour: 12,
    istaken: false,
    takenby: null,
  },
  {
    hour: 13,
    istaken: false,
    takenby: null,
  },
  {
    hour: 14,
    istaken: true,
    takenby: null,
  },
  {
    hour: 15,
    istaken: false,
    takenby: null,
  },
  {
    hour: 16,
    istaken: true,
    takenby: null,
  },
  {
    hour: 17,
    istaken: true,
    takenby: null,
  },
  {
    hour: 18,
    istaken: false,
    takenby: null,
  },
];
