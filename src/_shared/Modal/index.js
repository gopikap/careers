import React from "react";
import './index.scss';

export const Modal = (props) => {
    const {show, close}    = props;
    if (!show) {
        return null;
    }
    return (
        <>
            { show ? <div onClick={close} className="back-drop"></div> : null }
            <div className="modal">
                {props.children}
            </div>
        </>
    );
  
}