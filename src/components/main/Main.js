import React from "react";
import StudentMain from "./student/StudentMain";
import Header from "../Header/Header";
import "./Main.css";

const Main = (props) => {
  const { email, setEmail, name, setName, requestSocialLogin } = props;

  return (
    <div className="Background">
      <Header
        isLogin={false}
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        requestSocialLogin={requestSocialLogin}
      />
      <StudentMain />
    </div>
  );
};

export default Main;
