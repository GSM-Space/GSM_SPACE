import React from "react";
import "./FilterPopUp.css";

const sort_content = ["전체", "최신순", "인기순"];
const state = ["진행 중", "대기 중", "청원종료", "답변완료"];

const FilterPopUp = () => {
  
  return (
    <div>
        <div className="filter_title">정렬</div>
          {sort_content.map((list) => (
            <label className="radioContainer" >{list}
              <input type="radio" />
              <span className="circle"></span>
            </label>
          ))}
        </div>
      
  );
};
export default FilterPopUp;
