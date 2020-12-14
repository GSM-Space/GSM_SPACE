import React from "react";
import Side from "../sidebar/Sidebar";
import "./PetitionPost.css";

const PetitionPost = () => {
  return (
    <div className="post-container">
      <div className="petition-post-wrapper">
        <div className="petition-post"></div>
      </div>
      <Side className="post-sidebar" />
    </div>
  );
};

export default PetitionPost;
