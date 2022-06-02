import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Incorrect Input",
                message: "Please make sure Username and Age filled",
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Incorrect Age",
                message: "Please enter Valid Age ( > 0 )",
            });
            return;
        }
        const userInfo = {
            name: enteredName,
            age: enteredAge,
            id: (Math.random() * 100 + 1).toFixed(0).toString(),
        };
        props.onAddUser(userInfo);
        setEnteredAge("");
        setEnteredName("");
    };

    const errorHandler = () => {
        setError();
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    onConfirm={errorHandler}
                    title={error.title}
                    message={error.message}
                />
            )}
            <Card className={styles.formControl}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        value={enteredName}
                        type="text"
                        id="username"
                        onChange={nameChangeHandler}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input
                        value={enteredAge}
                        type="number"
                        id="age"
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add Data</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
