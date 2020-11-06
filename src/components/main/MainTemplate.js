import React, { useState } from 'react';
import logo from 'assets/logo.png';
import indexImg from "assets/index-img.png";
import PopUpTemplate from 'components/modal/PopUpTemplate.js';
import './MainTemplate.css';

const MainTemplate = () => {
    const [PopUp, setPopUp] = useState(false);

    const CheckPopUp = () => {
        setPopUp(!PopUp);
    }

    return (
        <div className="Background">
            <div className="main-header">
                <img src={logo} alt="로고"/>
                <button className="login-button" onClick={CheckPopUp}>로그인</button>
            </div>
                <img className="index_img" src={indexImg} alt="바탕이미지"></img>
                {PopUp ? <PopUpTemplate toggle={CheckPopUp} /> : null}
        </div>
    );
}

export default MainTemplate;