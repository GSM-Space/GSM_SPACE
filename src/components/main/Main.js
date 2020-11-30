import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/svg/Logo.js";
import IndexImg from "assets/index-img.png";
import PopUpTemplate from "components/modal/PopUpTemplate.js";
import StudentMain from "./student/StudentMain";
import "./Main.css";

const Main = () => {
  const [PopUp, setPopUp] = useState(false);

  const CheckPopUp = () => {
    setPopUp(!PopUp);
  };

  return (
    <>
      <div className="main-header">
        <Link to="/">
          <Logo className="main-logo" />
        </Link>
        <button className="login-button" onClick={CheckPopUp}>
          로그인
        </button>
      </div>
      <StudentMain />
      {PopUp ? (
        <PopUpTemplate toggle={CheckPopUp} currentState="logout" />
      ) : null}
    </>
  );
};

export default Main;
