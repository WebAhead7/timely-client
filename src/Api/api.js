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
