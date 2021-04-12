import React from "react";
import Logo from "assets/svg/Logo.js";
import Key from "assets/svg/Key.js";
import Email from "assets/svg/Email.js";
import GoogleLogin from "react-google-login";
import "./LoginPopUp.css";
import { Link } from "react-router-dom";

// const saveAsFile = (str, filename) => {
//   var hiddenElement = document.createElement("a");
//   hiddenElement.href = "data:attachment/text," + encodeURI(str);
//   hiddenElement.target = "_blank";
//   hiddenElement.download = filename;
//   hiddenElement.click();
// };

const responseSuccess = (res) => {
  sessionStorage.setItem("petitions-token", res.tokenId);
};

const responseFail = (err) => {
  console.error(err);
};

const LoginPopUp = (props) => {
  const { email, setEmail, name, setName, requestSocialLogin } = props;
  return (
    <>
      <Logo className="popup-logo" />
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
      <GoogleLogin
        className="Google-login"
        clientId="171117162418-7r68jqp88ifvrrkihodu48ur2lvjg1va.apps.googleusercontent.com"
        buttonText="Google 아이디로 로그인"
        onSuccess={responseSuccess(email, setEmail, name, setName)}
        onFailure={responseFail}
      />
      <div className="modal_footer">
        <div className="forgot_password">비밀번호를 잊으셨나요 ?</div>
        <div onClick={() => requestSocialLogin()}>로그인</div>
      </div>
    </>
  );
};

export default LoginPopUp;
