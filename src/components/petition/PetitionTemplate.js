import React from 'react';
import AnsweredPetition from './answered/AnsweredPetition';
import ExpiredPetition from './expired/ExpriedPetition';
import OngoingPetition from './ongoing/OngoingPetition';
import PendingPetition from './pending/PendingPetition';
import Sidebar from '../sidebar/Sidebar';
import './PetitionTemplate.css';


const CurrentPath = () => {
    const pathName = window.location.pathname;
    const path = pathName.split('/');
    
    switch(path[2]) {
        case "ongoing":
            return <OngoingPetition/>;
        case "expired":
            return <ExpiredPetition/>;
        case "pending":
            return <PendingPetition/>;
        case "answered":
            return <AnsweredPetition/>;
        default:
            return <OngoingPetition/>;
    }
}

const PetitionTemplate = () => {
    return (
        <div className="body-container">
            <div className="list-container">
                <div className="list-header">
                    {CurrentPath()}
                </div>
                <div className="petition-list">
                    
                </div>
            </div>
            <div className="sidebar-container">
                <Sidebar/>
            </div>
        </div>
    );
}
;
export default PetitionTemplate;