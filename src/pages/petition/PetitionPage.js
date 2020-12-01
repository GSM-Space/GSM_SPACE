import React from "react";
import PetitionTemplate from "components/petition/PetitionTemplate";
import Header from "components/header/Header";
import "./PetitionPage.css";

const PetitionPage = () => {
  return (
    <div className="petition-background">
      <Header isLogin={true} />
      <PetitionTemplate />
    </div>
  );
};

export default PetitionPage;
