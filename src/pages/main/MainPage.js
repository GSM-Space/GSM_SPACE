import React from "react";
import MainTemplate from 'components/main/MainTemplate';
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <MainTemplate/>
      <div className="main-title--wrapper">
          <div className="main-title">“ 학교생활을 하면서 불편한 점은 <br />
            <span className="gsm-space">GSM SPACE</span>로 청원해주세요 ! ” </div>
        </div>
    </>
  )
}

export default MainPage;