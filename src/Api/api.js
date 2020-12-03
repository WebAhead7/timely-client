import Profile from "../screens/Profile";

const listUrl = "http://localhost:4000/main/get-list";

export const getDocList = async (setList) => {
  try {
    const data = await fetch(listUrl);
    const list = await data.json();
    setList(list);
    // console.log(list);
  } catch (e) {
    console.log(e);
  }
};

export const getDocClinic = async (id, setClinic) => {
  const clinicUrl = `http://localhost:4000/doctor/${id}/doctor-clinic`;
  try {
    const data = await fetch(clinicUrl);
    const clinic = await data.json();
    setClinic(clinic);
    // console.log(list);
  } catch (e) {
    console.log(e);
  }
};

export const getProfile = async (id, setProfile) => {
  const profileUrl = `http://localhost:4000/client/${id}/client-profile`;
  try {
    const data = await fetch(profileUrl);
    const profile = await data.json();
    setProfile(profile);
    console.log(profile);
    localStorage.setItem("userprofile", JSON.stringify(profile));
  } catch (e) {
    console.log(e);
  }
};

export const setAppointmentApi = async (conf) => {
  const { docid, clientid, day, hour } = conf;

  const appointmentUrl = `http://localhost:4000/client/create-appointment/${docid}/${clientid}/${day}/${hour}`;
  try {
    const response = await fetch(appointmentUrl);
    const json = await response.json();

    if (json.status === 403) {
      alert(json.message);
    } else {
      alert("You have an appointment");
    }
  } catch (error) {
    console.log(error);
  }
};

export const createCalendarApi = async (id, days) => {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(days),
  };

  const calendarUrl = `http://localhost:4000/doctor/${id}/create-calendar`;
  try {
    const response = await fetch(calendarUrl, config);
    const json = await response.json();

    if (json.status === 200) {
      alert("Calendar Created");
    } else {
      alert("Please try again");
    }
  } catch (error) {
    console.log(error);
  }
};

// http://localhost:4000/doctor/3/create-calendar
