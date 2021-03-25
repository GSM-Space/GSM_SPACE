import React from "react";
import Header from "components/Header/Header";
import PetitionPost from "components/post/PetitionPost";
import "./Petition.css";

const PetitionPostPage = ({ match }) => {
  return (
    <div className="petition-post-background">
      <Header isLogin={true} />
      <PetitionPost match={match} />
    </div>
  );
};

export default PetitionPostPage;
