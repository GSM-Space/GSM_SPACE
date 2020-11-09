import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/svg/Logo.js';
import Index from 'assets/index-img.png';
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
                <Link to="/"><Logo className="main-logo"/></Link>
                <button className="login-button" onClick={CheckPopUp}>로그인</button>
            </div>
                <img src={Index} alt="이미지" className="index_img"/>
                {PopUp ? <PopUpTemplate toggle={CheckPopUp} currentState="logout"/> : null}
        </div>
    );
}

export default MainTemplate;