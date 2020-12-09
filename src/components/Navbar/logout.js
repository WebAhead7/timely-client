const heroku = `https://timelyserver.herokuapp.com/`;
const local = `http://localhost:4000/`;

export const logOut = () => {
  console.log("im in log outt");
  localStorage.clear();

  return fetch(`${local}main/logout`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
