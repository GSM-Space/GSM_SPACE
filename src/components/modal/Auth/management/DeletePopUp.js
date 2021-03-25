import React from "react";
import './DeletePopUp.css';

const DeletePopUp = () => {
    return(
        <>
            <div className="delete_petition_title">
                청원을 삭제하시겠습니까?
            </div>
            <button className="delete_petition_btn">확인</button>
        </>
    )
}
export default DeletePopUp;