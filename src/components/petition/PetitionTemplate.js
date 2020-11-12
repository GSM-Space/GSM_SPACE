import React from 'react';
import './PetitionTemplate.css';

const PetitionTemplate = () => {
    return (
        <div className="body-container">
            <div className="list-container">
                <div className="list-header">
                    <div className="kind-of-petition--selected">
                        <div style={{ marginBottom: 17 }}>진행중인 청원</div>
                    </div>
                    <div className="kind-of-petition">만료된 청원</div>
                    <div className="kind-of-petition">답변 대기중인 청원</div>
                    <div className="kind-of-petition">답변된 청원</div>
                </div>
                <div className="petition-list">

                </div>
            </div>
            <div className="sidebar-container">
            
            </div>
        </div>
    );
}
;
export default PetitionTemplate;