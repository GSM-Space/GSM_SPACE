import React from "react";
import { Link } from "react-router-dom";
import Pending from "assets/svg/Pending";

const PendingPetition = () => {
  return (
    <>
      <Link to="/petition/ongoing" className="kind-of-petition">
        <div style={{ marginBottom: 17, fontSize: 16 }}>진행중인 청원</div>
      </Link>
      <Link to="/petition/expired" className="kind-of-petition">
        <div style={{ marginBottom: 17, fontSize: 16 }}>만료된 청원</div>
      </Link>
      <div className="kind-of-petition--selected">
        <Pending style={{ marginBottom: 17, marginRight: 7 }} />
        <div style={{ marginBottom: 17, fontSize: 18 }}>답변 대기중인 청원</div>
      </div>
      <Link to="/petition/answered" className="kind-of-petition">
        <div style={{ marginBottom: 17, fontSize: 16 }}>답변된 청원</div>
      </Link>
    </>
  );
};

export default PendingPetition;
