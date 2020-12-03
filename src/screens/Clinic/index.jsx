import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar";
import ClinicHeader from "../../components/ClinicHeader";
import { getDocClinic, setAppointmentApi } from "../../Api/api";

export default function Clinic(props) {
  const [clinic, setClinic] = useState(null);
  const [appointment, setAppointments] = useState(null);

  const {
    match: {
      params: { id, docname, title },
    },
    clientId,
  } = props;

  const setAppointment = (data) => {
    const day = data.split("_")[0];
    const hour = data.split("_")[1];
    setAppointments(data);
    const config = { day, hour, docid: id, clientid: clientId };
    // console.log(config);
    setAppointmentApi(config);
  };

  useEffect(() => {
    getDocClinic(id, setClinic);
  }, [appointment]);
  if (!clinic) return <div>Loading</div>;

  return (
    <div>
      <ClinicHeader data={clinic} />
      <Calendar
        data={{ ...clinic.cal_data, id }}
        setAppointment={setAppointment}
        appointment={appointment}
      />
    </div>
  );
}
