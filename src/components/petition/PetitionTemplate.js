import React from "react";
import AnsweredPetition from "./answered/AnsweredPetition";
import ExpiredPetition from "./expired/ExpriedPetition";
import OngoingPetition from "./ongoing/OngoingPetition";
import PendingPetition from "./pending/PendingPetition";
import Sidebar from "../sidebar/Sidebar";
import "./PetitionTemplate.css";

const PetitionList = [
  {
    id: 20,
    title: "전공동아리 시간을 좀 더 늘려주세요!",
    agreed: 85,
    end_at: "2020.11.09",
  },
  {
    id: 20,
    title: "전공동아리 시간을 좀 더 늘려주세요!",
    agreed: 85,
    end_at: "2020.11.09",
  },
  {
    id: 20,
    title: "전공동아리 시간을 좀 더 늘려주세요!",
    agreed: 85,
    end_at: "2020.11.09",
  },
  {
    id: 20,
    title: "전공동아리 시간을 좀 더 늘려주세요!",
    agreed: 85,
    end_at: "2020.11.09",
  },
  {
    id: 20,
    title: "전공동아리 시간을 좀 더 늘려주세요!",
    agreed: 85,
    end_at: "2020.11.09",
  },
];

const CurrentPath = () => {
  const pathName = window.location.pathname;
  const path = pathName.split("/");

  switch (path[2]) {
    case "ongoing":
      return <OngoingPetition />;
    case "expired":
      return <ExpiredPetition />;
    case "pending":
      return <PendingPetition />;
    case "answered":
      return <AnsweredPetition />;
    default:
      return <OngoingPetition />;
  }
};

const PetitionTemplate = () => {
  // const MappingPetitionList = () => {
  //   PetitionList.map((list, idx) => (

  //   ))
  // }
  return (
    <div className="body-container">
      <div className="list-container">
        <div className="list-header">{CurrentPath()}</div>
        <div className="petition-list-wrapper">
          <div className="petition-list-header"></div>
          <div className="petition-list"></div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};
export default PetitionTemplate;
