import React from "react";
import "./Backdrop.css";
const Backdrop = props => {
    return <div className="backdrop" onClick={props.clickBackdrop} />;
};

export default Backdrop;