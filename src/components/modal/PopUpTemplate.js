import React from 'react';
import LoginPopUp from './Auth/LoginPopUp';
import './PopUpTemplate.css';

const PopUpTemplate = ( props ) => {
    
    const ClosePopUp = () => {
        props.toggle();
    }
    
    const Modal = ( current ) => {
        switch(current) {
            case "logout":
                return <LoginPopUp/>;
            case "petition":
                return 
            default:
        }
    }
    return (
        <div className="modal" onClick={ClosePopUp}>
            <div className="modal_content" onClick={Event => Event.stopPropagation()}>
                {Modal(props.currentState)}
            </div>
        </div>
    );
}

export default PopUpTemplate;