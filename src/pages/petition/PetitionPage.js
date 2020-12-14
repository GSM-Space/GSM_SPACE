import React from "react";
import PetitionTemplate from "components/petition/PetitionTemplate";
import Header from "components/header/Header";
import "./Petition.css";

const PetitionPage = ({ match }) => {
  return (
    <div className="petition-background">
      <Header isLogin={true} />
      <PetitionTemplate match={match} />
    </div>
  );
};

export default PetitionPage;