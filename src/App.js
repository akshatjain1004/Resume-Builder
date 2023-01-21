import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Login from "./components/login";
import "./App.css";
import { gapi } from "gapi-script";
import SignIn from "./components/login";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

const clientId =
  "361102340568-4g5oqh4fu0vr5aglh6apigtegs0joelv.apps.googleusercontent.com";

function App() {
  const [profile, setprofile] = useState([]);
  const [signin, setsignin] = useState(false);

  function change(profile) {
    setprofile(profile);
    setsignin(true);
    console.log(profile);
    console.log(profile.imageUrl);
  }

  return (
    <div className="App">
      {!signin && <Login change={change} />}
      {signin && (
        <div style={{ padding: "1%", display: "flex" }}>
          <Typography style={{ padding: "1%" }}>{profile.name}</Typography>
          <Avatar alt={profile.name} src={profile.imageUrl} />
        </div>
      )}
      {signin && <Header />}
      {signin && <Body />}
    </div>
  );
}

export default App;
