import React from "react";
import Calendar from "../../components/Calendar";
import ClinicHeader from "../../components/ClinicHeader";

export default function Clinic() {
  const data = { sunday, monday, tuesday, wednesday };
  return (
    <div>
      <ClinicHeader />
      <Calendar data={data} />
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
