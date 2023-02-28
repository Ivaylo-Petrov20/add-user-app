import React, { useState } from "react";

import styles from "./App.module.css";
import UserForm from "./components/Users/UserForm";
import UsersList from "./components/Users/UsersList";

const users = [
];

function App() {
  const [storedUsers, setStoredUsers] = useState(users);

  const submitFormHandler = (userData) => {
    setStoredUsers((prevUsers) => {
      return [...prevUsers, userData];
    });
  };

  const onDeleteUser = (userId) => {
    const filteredUserList = storedUsers.filter(user => user.id !== userId);
    setStoredUsers(filteredUserList);
  }

  return (
    <div>
      <section className={styles["user-form"]}>
        <UserForm onSubmitForm={submitFormHandler} />
      </section>
      <section className={styles.users}>
        {storedUsers.length > 0 && <UsersList onDelete={onDeleteUser} users={storedUsers} />}
      </section>
    </div>
  );
}

export default App;
