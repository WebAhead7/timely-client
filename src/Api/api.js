const heroku = `https://timelyserver.herokuapp.com/`;
const local = `http://localhost:4000/`;
const localUser = JSON.parse(localStorage.getItem("userprofile"));

export const getDocList = async (setList) => {
  const listUrl = `${local}main/get-list`;
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
  const clinicUrl = `${local}doctor/${id}/doctor-clinic`;
  try {
    const data = await fetch(clinicUrl);
    const clinic = await data.json();
    if (clinic) {
      setClinic(clinic);
      console.log(clinic);
    } else {
      console.log("NOT FOUNDD");
    }
    // console.log(list);
  } catch (e) {
    console.log(e);
  }
};

export const getProfile = async (id, setProfile) => {
  const profileUrl = `${local}client/${id}/client-profile`;
  try {
    const data = await fetch(profileUrl, {
      headers: { access_token: localUser.token },
    });
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

  const appointmentUrl = `${local}client/create-appointment/${docid}/${clientid}/${day}/${hour}`;
  try {
    const response = await fetch(appointmentUrl, {
      headers: { access_token: localUser.token },
    });
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

  const calendarUrl = `${local}doctor/${id}/create-calendar`;
  try {
    const response = await fetch(calendarUrl);
    const json = await response.json();

    if (json.status === 201) {
      alert("Calendar Created");
    } else if (json.status === 301) {
      alert("You already created a calendar");
    }
  } catch (error) {
    console.log(error);
  }
};
