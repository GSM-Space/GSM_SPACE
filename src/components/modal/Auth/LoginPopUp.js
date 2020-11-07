import React from 'react';
import logo from 'assets/logo.png';
import key from 'assets/key-img.png';
import Email from 'assets/email-img.png';
import './LoginPopUp.css';

const LoginPopUp = () => {
    return (
            <>
                <img src={logo} alt="로고" style={{ margin: 35 }}/>
                    <div className="modal_title">“ 학교생활을 하면서 불편한 점을 청원해주세요 ! ”</div>
                <div className="input-wrapper">
                    <img src={Email} alt="이메일" style={{ marginLeft: 5 }} />
                    <input className="email-input" placeholder="이메일"/>
                </div>
                <div className="input-wrapper">
                    <img src={key} alt="패스워드" style={{ marginLeft: 5 }} />
                    <input className="email-input" placeholder="비밀번호"/>
                </div>
                <div className="Google-login">구글 계정으로 로그인 할거임</div>
                <div className="modal_footer">
                    <div className="forgot_password">비밀번호를 잊으셨나요 ?</div>
                    <div className="modal-login--button">로그인</div>
                </div>
            </>
    );
}

export default LoginPopUp;