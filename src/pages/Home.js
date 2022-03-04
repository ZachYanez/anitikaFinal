import React, { useEffect } from "react";
// import logo from "../assets/logo512.png";
import { Link, useHistory } from "react-router-dom";

export default function Landing() {
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/Bio");
    }, 6000);
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Anitika Knight</p>
        <Link className="welcome" to="/Bio">
          Welcome
        </Link>
      </header>
    </div>
  );
}
