import React from "react";
import FilterPopUp from './FilterPopUp';
import "./PopUpTemplate.css";

const PopUpTemplate = (props) => {
  const ClosePopUp = () => {
    props.toggle();
  };

  const Modal = (current) => {
    switch (current) {
      case "filter":
        return <FilterPopUp />;
      case "":
        return ;
      default:
    }
  };
  return (
    <div className="filter_modal" onClick={ClosePopUp}>
      <div
        className="filter_modal_content"
        onClick={(Event) => Event.stopPropagation()}
      >
        {Modal(props.currentState)}
      </div>
    </div>
  );
};

export default PopUpTemplate;
