import React, { useState } from "react";
import "./Writing.css";
import Header from "../header/Header";
import Warning from "assets/warning.png";
import PopUpTemplate from "components/modal/PopUpTemplate.js";

const Writing = () => {
  const [PopUp, setPopUp] = useState(false);

  const CheckPopUp = () => {
    setPopUp(!PopUp);
  };
  return (
    <div>
      <Header />
      <div className="write_board">
        <div className="petition--header">
          <span className="petition">청원하기</span>
          <img
            src={Warning}
            alt="warning"
            className="mark"
            onClick={CheckPopUp}
          />
        </div>
        <hr className="line"></hr>
        <div className="petition_input">
          <div className="content_title">청원제목</div>
          <input className="title_input"></input>
          <div className="content_title">청원내용</div>
          <textarea className="content_input"></textarea>
          <div className="content_title">해결방안</div>
          <textarea className="content_input"></textarea>
        </div>
        <div className="btn_center">
          <button className="writing_btn">작성완료</button>
        </div>
      </div>
      {PopUp ? (
        <PopUpTemplate toggle={CheckPopUp} currentState="warning" />
      ) : null}
    </div>
  );
};
export default Writing;
