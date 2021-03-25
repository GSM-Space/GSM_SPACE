import React from "react";
import DeletetPopUp from "./DeletePopUp";
import EditPopUp from './EditPopUp';
import "./PopUpTemplate.css";

const PopUpTemplate = (props) => {
  const ClosePopUp = () => {
    props.toggle();
  };

  const Modal = (current) => {
    switch (current) {
      case "delete":
        return <DeletetPopUp />;
      case "edit":
        return <EditPopUp/>;
      default:
    }
  };
  return (
    <div className="petition_edit_modal" onClick={ClosePopUp}>
      <div
        className="petition_edit_modal_content"
        onClick={(Event) => Event.stopPropagation()}
      >
        {Modal(props.currentState)}
      </div>
    </div>
  );
};

export default PopUpTemplate;
