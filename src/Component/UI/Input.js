import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.lable}</label>
            <input ref={ref} id={props.id} {...props.input} />
        </div>
    );
});

export default Input;
