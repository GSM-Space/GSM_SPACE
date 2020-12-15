import React from "react";
import "./MemberManagement.css";
import MemberManagement_img from "assets/MemberManagement.png";
import { Link } from "react-router-dom";

const MemberManagement = () => {
  return (
    <Link to="/" className="MemberManagement">
      <div className="MemberManagement_h1">회원 관리</div>
      <img
        src={MemberManagement_img}
        className="MemberManagement-img"
        alt="이미지"
      ></img>
    </Link>
  );
};

export default MemberManagement;
