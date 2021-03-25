import React, { useState } from "react";
import Logo from "assets/svg/Logo";
import trash from "assets/trash.png";
import edit from "assets/edit.png";
import filter from "assets/filter.png";
import "./Management.css";
import FilterPopUpTemplate from "components/modal/Auth/filter/PopUpTemplate.js";
import DeletePopUpTemplate from "components/modal/Auth/management/PopUpTemplate.js";

const ongoinglist = [
  {
    num: 20,
    title: "전공동아리 시간을 늘려주세요",
    person: 65,
    end_date: "2020.11.09",
    state: "진행 중",
  },
  {
    num: 19,
    title: "전공동아리 시간을 늘려주세요",
    person: 85,
    end_date: "2020.11.09",
    state: "청원종료",
  },
];

const Management = () => {
  const [PopUp, setPopUp] = useState(false);
  const [DeletePopUp, setDeletePopUp] = useState(false);

  const CheckPopUp = () => {
    setPopUp(!PopUp);
  };

  const DeleteCheckPopUp = () => {
    setDeletePopUp(!DeletePopUp);
  };
  return (
    <>
      <div className="management_header">
        <Logo />
        <div className="management_title">청원 관리</div>
      </div>
      <div className="deleted_petition">삭제된 청원보기</div>
      <div className="border_header">
        <button className="filter" onClick={CheckPopUp}>
          <img src={filter} alt="filter" className="filter_img" />
          <span className="filter_text">Filter</span>
        </button>
        <input
          className="management_search"
          placeholder="검색어를 입력하세요"
        ></input>
        <button className="management_btn">검색</button>
      </div>
      <div className="sort_bar">
        <div className="sort_bar_title">
          <div style={{ width: "20%", paddingLeft: 35 }}>번호</div>
          <div style={{ width: "17%" }}>제목</div>
          <div style={{ width: "17%" }}>참여인원</div>
          <div style={{ width: "17%" }}>청원 만료일</div>
          <div style={{ width: "20%" }}>청원상태</div>
          <div>답변/삭제</div>
        </div>
      </div>
      <div className="management_board">
        <div className="management_board_content">
          {ongoinglist.map((list) => (
            <>
              <div className="management_content_list">
                <div style={{ width: "15.5%", paddingLeft: 45 }}>
                  {list.num}
                </div>
                <div style={{ width: "22%" }}>{list.title}</div>
                <div style={{ color: "#6372A8", width: "16.5%" }}>
                  {list.person}명
                </div>
                <div style={{ color: "#949494", width: "16.5%" }}>
                  {list.end_date}
                </div>
                <div style={{ width: "18%" }}>{list.state}</div>
                <div style={{ marginRight: 25 }}>
                  <button className="edit_btn" onClick={DeleteCheckPopUp}>
                    <img src={edit} alt="edit" style={{ marginLeft: 0 }} />
                  </button>
                  <button className="trash_btn">
                    <img src={trash} alt="trash" style={{ marginLeft: 0 }} />
                  </button>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
        {PopUp ? (
          <FilterPopUpTemplate toggle={CheckPopUp} currentState="filter" />
        ) : null}
        {DeletePopUp ? (
          <DeletePopUpTemplate
            toggle={DeleteCheckPopUp}
            currentState="delete"
          />
        ) : null}
      </div>
    </>
  );
};

export default Management;
