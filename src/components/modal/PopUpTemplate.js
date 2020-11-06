import React from 'react';
import './PopUpTemplate.css';
import logo from 'assets/logo.png';

const PopUpTemplate = ({ toggle }) => {
    
    const ClosePopUp = () => {
        toggle();
    }

    return (
        <div className="modal" onClick={ClosePopUp}>
            <div className="modal_content" onClick={Event => Event.stopPropagation()}>
                <img src={logo} alt="로고"/>
                <div className="modal_title">“ 학교생활을 하면서 불편한 점을 청원해주세요 ! ”</div>
                <input className="Email-input" placeholder="이메일"/>
                <input className="Email-input" placeholder="비밀번호"/>
                <div className="Google-login">구글 계정으로 로그인</div>
            </div>
        </div>
    );
}

export default PopUpTemplate;