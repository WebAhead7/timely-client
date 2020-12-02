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
