import React from "react";
import Logo from "assets/svg/Logo.js";
import Key from "assets/svg/Key.js";
import Email from "assets/svg/Email.js";
import "./LoginPopUp.css";
import { Link } from "react-router-dom";

const LoginPopUp = () => {
  return (
    <>
      <Logo style={{ margin: 35 }} />
      <div className="modal_title">
        “ 학교생활을 하면서 불편한 점을 청원해주세요 ! ”
      </div>
      <div className="input-wrapper">
        <Email style={{ marginLeft: 5 }} />
        <input className="email-input" placeholder="이메일" />
      </div>
      <div className="input-wrapper">
        <Key style={{ marginLeft: 5 }} />
        <input className="email-input" placeholder="비밀번호" />
      </div>
      <div className="Google-login">구글 계정으로 로그인 할거임</div>
      <div className="modal_footer">
        <div className="forgot_password">비밀번호를 잊으셨나요 ?</div>
        <Link to="/petition/ongoing" className="modal-login--button">
          <div>로그인</div>
        </Link>
      </div>
    </>
  );
};

export default LoginPopUp;
