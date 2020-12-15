import React from 'react';
import './WarningPopUp.css';

const steplist = [
    {
        id:1,
        content:"청원 글쓰기"
    },
    {
        id:2,
        content:"학생 투표"
    },
    {
        id:3,
        content:"1차 가능 여부 확인"
    },
    {
        id:4,
        content:"교장선생님께 전달"
    },
    {
        id:5,
        content:"청원 내용 가능 여부 판단"
    }
]


const WarningPopUp = () => {
    return(
        <>
          
            <span className="warning_head_title">청원 절차 안내</span>
                <div className="petition_step">{
                    steplist.map((steps)=>(
                        <div className="steps">
                            <button className="steps_id">{steps.id}</button>
                            <div className="steps_content">{steps.content}</div>
                        </div>
                    ))}
                </div>
                    <div className="warning_text">
                        <span className="warning_text_title">유의사항</span>
                        <p>- 학생 청원은 학생 수 1/2이상 동의하면 1차 가능 여부를 판단합니다,</p>
                        <p>- 청원 내용을 올릴 때 허무 맹랑한 소리는 올리지 말아주세요. (ex 학교에 수영장을 설치해주세요)</p>
                    </div>
            
          
        </>
    )
}
export default WarningPopUp;