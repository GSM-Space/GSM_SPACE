import React from "react";
// import { Link } from "react-router-dom";
import logo from "Asset/logo.png";
import indexImg from "Asset/index-img.png";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="Background">
      <div className="header">
        <img src={logo} alt="로고"/>
        <button>로그인</button>
      </div>
      <div className="main">
        <div className="h1">“ 학교생활을 하면서 불편한 점은 <br />
          <span>GSM SPACE</span>로 청원해주세요 ! ” </div>
      </div>
      <img className="index_img" src={indexImg} alt="바탕이미지"></img>
    </div>
  )
}

export default MainPage;