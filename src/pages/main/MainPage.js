import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/svg/Logo.js";
import Index from "assets/index-img.png";
import PopUpTemplate from "components/modal/PopUpTemplate.js";
import "./MainPage.css";
import StudentMain from "components/main/student/StudentMain.js";

const MainPage = () => {
  const [PopUp, setPopUp] = useState(false);

  const CheckPopUp = () => {
    setPopUp(!PopUp);
  };

  return (
    <div className="Background">
      <div className="main-header">
        <Link to="/">
          <Logo className="main-logo" />
        </Link>
        <button className="login-button" onClick={CheckPopUp}>
          로그인
        </button>
      </div>
      <StudentMain />
      <img src={Index} alt="이미지" className="index_img" />
      {PopUp ? (
        <PopUpTemplate toggle={CheckPopUp} currentState="logout" />
      ) : null}
    </div>
  );
};

export default MainPage;
