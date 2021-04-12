import React, { useState } from "react";
import Logo from "assets/svg/Logo.js";
import Search from "assets/svg/Search.js";
import PopUpTemplate from "components/modal/PopUpTemplate.js";
import Profile from "assets/svg/Profile.js";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [PopUp, setPopUp] = useState(false);

  const { isLogin, name, setName, email, setEmail, requestSocialLogin } = props;

  const CheckPopUp = () => {
    setPopUp(!PopUp);
  };

  return (
    <>
      {isLogin ? (
        <div className="header-container">
          <Logo className="main-logo" />
          <div className="header-input--wrapper">
            <Search style={{ marginBottom: 10 }} />
            <input className="search-input" placeholder="검색어를 입력하세요" />
          </div>
          <div className="welcome-box" style={{ color: "#FFFFFF" }}>
            <Profile style={{ flex: 1 }} />
            <div className="welcome-text">
              <span className="welcome-name">진예원 </span>님 환영합니다 !
            </div>
            <Link to="/" className="logout-box">
              <div>로그아웃</div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="main-header">
          <Link to="/">
            <Logo className="main-logo" />
          </Link>
          <button className="login-button" onClick={CheckPopUp}>
            로그인
          </button>
        </div>
      )}
      {PopUp ? (
        <PopUpTemplate
          toggle={CheckPopUp}
          currentState="logout"
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          requestSocialLogin={requestSocialLogin}
        />
      ) : null}
    </>
  );
};

export default Header;
