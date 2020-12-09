import React from "react";

import "./logout.css";

const heroku = `https://timelyserver.herokuapp.com/`;
const local = `http://localhost:4000/`;

export default function logOut(props){

    fetch(`${local}/main/logout`).then(res=>res.json()).catch(err=> console.log(err));

    localStorage.clear();

    return 



 }

 module.exports