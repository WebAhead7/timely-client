import React from "react";
import { useHistory } from "react-router-dom";

export default function Signup(props) {
  const [checked, setChecked] = React.useState(false);
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [dsc, setDsc] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const history = useHistory();

  function redirect() {
    props.setSucsess(true);
    history.push("/");
  }

  function handleSubmit() {
    const data = { firstname, lastname, email, pass, imgUrl, title, dsc };
    const url = `https://timelyserver.herokuapp.com/${
      checked ? "doctor" : "client"
    }/signup`;

    console.log("url", url);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((msg) => {
        setMsg(msg.msg);

        if (msg.auth) {
          redirect();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          required
          value={firstname}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          required
          value={lastname}
          onChange={(event) => setLastName(event.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="pass">Password:</label>
        <br />
        <input
          type="text"
          id="pass"
          name="pass"
          required
          value={pass}
          onChange={(event) => setPass(event.target.value)}
        />
        <br />
        <label htmlFor="imgUrl">Image:</label>
        <br />
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          required
          value={imgUrl}
          onChange={(event) => setImgUrl(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="doctor"> I'm a Doctor?</label>
        <input
          type="checkbox"
          id="doctor"
          name="doctor"
          value="doctor"
          required
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
      </form>
      <br />
      {checked && (
        <form>
          <label htmlFor="title">Specialization:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <br />
          <label htmlFor="dsc">Description:</label>
          <br />
          <input
            type="text"
            id="dsc"
            name="dsc"
            required
            value={dsc}
            onChange={(event) => setDsc(event.target.value)}
          />
          <br />
        </form>
      )}

      <button onClick={handleSubmit}>SUBMIT</button>

      <h1>{msg}</h1>
    </div>
  );
}
