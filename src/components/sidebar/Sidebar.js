import React from "react";
import Side from "assets/svg/Side.js";
import "./Sidebar.css";

function side() {
  return (
    <div className="article">
      <div className="header">
        <div className="h1">
          “ 학교생활에 불편한 점을 <br />
          <span className="GSM">GSM SPACE</span>로 청원해주세요 !”
        </div>
      </div>
      <Side style={{ flex: 4 }} />
      <div className="section">
        <div className="section_h1">총 청원 수</div>
        <div className="unit">
          <span className="all_petitions">324 </span> 건
        </div>
        <div className="gray_box">
          <div>
            답변 완료 <span className="gray-fir-ch">112 </span>건
          </div>
          <div>
            답변 대기 <span className="gray-sec-ch">12 </span>건
          </div>
        </div>
      </div>
      <button>지금 청원하기</button>
    </div>
  );
}

export default side;
