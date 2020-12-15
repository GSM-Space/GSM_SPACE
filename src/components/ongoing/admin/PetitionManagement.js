import React from "react";
import "./PetitionManagement.css";
import PetitionManagement_img from "assets/PetitionManagement.png";
import { Link } from "react-router-dom";

const PetitionManagement = () => {
  return (
    <Link to="/ongoing/management" className="PetitionManagement">
      <div className="PetitionManagement_h1">청원 관리</div>
      <img
        src={PetitionManagement_img}
        className="PetitionManagement-img"
        alt="이미지"
      ></img>
    </Link>
  );
};

export default PetitionManagement;
