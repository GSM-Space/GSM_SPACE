import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import logo from "./Asset/logo.png";
import indexImg from "./Asset/index-img.png";
import "./space.css"

function space() {
  return (
    <Fragment>
      <div className="header">
        <img src={logo} alt="로고"></img>
        <button>로그인</button>
      </div>
      <div className="main">
        <h1>“ 학교생활을 하면서 불편한 점은 <br />
          <span>GSM SPACE</span>로 청원해주세요 ! ” </h1>
      </div>
      <div className="index_img">
      </div>
    </Fragment>
  )
}

export default space;