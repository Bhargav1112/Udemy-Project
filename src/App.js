import React, { useState } from "react";
import UsersList from "./UI/UsersList";
import AddUser from "./Users/AddUser";

function App() {
    const [users, setUsers] = useState([]);

    const onUserAddSaveData = (info) => {
        setUsers((prevUser) => [info, ...prevUser]);
    };

    return (
        <div>
            <AddUser onAddUser={onUserAddSaveData} />
            <UsersList user={users} />
        </div>
    );
}

export default App;
