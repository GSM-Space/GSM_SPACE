import React from "react";
import Header from "components/header/Header";
import "./PetitionPage.css";

const PetitionPostPage = ({ match }) => {
  return (
    <div className="petition-background">
      <Header isLogin={true} />
    </div>
  );
};

export default PetitionPostPage;
