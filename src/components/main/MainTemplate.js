import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/"><img src={logo} alt="로고" className="main-logo"/></Link>
                <button className="login-button" onClick={CheckPopUp}>로그인</button>
            </div>
                <img className="index_img" src={indexImg} alt="바탕이미지"></img>
                {PopUp ? <PopUpTemplate toggle={CheckPopUp} currentState="logout"/> : null}
        </div>
    );
}

export default MainTemplate;