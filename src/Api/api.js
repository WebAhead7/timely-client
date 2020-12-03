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
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
