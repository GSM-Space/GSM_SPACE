import React from "react";
import PetitionTemplate from "components/petition/PetitionTemplate";
import Header from "components/header/Header";

const PetitionPage = () => {
  return (
    <>
      <Header isLogin={true} />
      <PetitionTemplate />
    </>
  );
};

export default PetitionPage;
