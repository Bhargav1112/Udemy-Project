import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlay-root");

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackDrop onClick={props.cartHide} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default Modal;
