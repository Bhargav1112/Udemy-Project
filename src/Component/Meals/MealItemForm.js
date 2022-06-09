import React, { useRef, useState } from "react";

import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const itemAmountRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = itemAmountRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                ref={itemAmountRef}
                lable="amount"
                id={props.id}
                input={{
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;
