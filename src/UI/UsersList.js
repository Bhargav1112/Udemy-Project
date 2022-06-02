import React from "react";
import Card from "./Card";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.user.map((u) => (
                    <li key={u.id}>{`${u.name} (${u.age} years old)`}</li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
