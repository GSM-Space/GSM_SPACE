import React from "react";
import logo from "assets/logo.png";
import trash from "assets/trash.png";
import edit from "assets/edit.png";
import filter from "assets/filter.png";
import "./Management.css";

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
  return (
    <>
      <div className="management_header">
        <img src={logo} alt="logo" />
        <div className="management_title">청원 관리</div>
      </div>
      <div className="border_header">
        <button className="filter">
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
          <div style={{ marginLeft: 35 }}>번호</div>
          <div>제목</div>
          <div>참여인원</div>
          <div>청원 만료일</div>
          <div>청원상태</div>
          <div>답변/삭제</div>
        </div>
      </div>
      <div className="management_board">
        <div className="management_board_content">
          {ongoinglist.map((list) => (
            <>
              <div className="management_content_list">
                <div style={{ marginLeft: 35 }}>{list.num}</div>
                <div>{list.title}</div>
                <div style={{ color: "#6372A8" }}>{list.person}명</div>
                <div style={{ color: "#949494" }}>{list.end_date}</div>
                <div>{list.state}</div>
                <div style={{ marginRight: 25 }}>
                  <button className="edit_btn">
                    <img src={edit} alt="edit" />
                  </button>
                  <button className="trash_btn">
                    <img src={trash} alt="trash" />
                  </button>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Management;
