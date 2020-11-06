import React from 'react';
import logo from 'assets/logo.png';
import indexImg from "assets/index-img.png";
import './MainTemplate.css';

const MainTemplate = () => {
    return (
        <div className="Background">
            <div className="main-header">
                <img src={logo} alt="로고"/>
                <button className="login-button">로그인</button>
            </div>
                <img className="index_img" src={indexImg} alt="바탕이미지"></img>
        </div>
    );
}

export default MainTemplate;