import React, { useState } from "react";

import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const User = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const changedNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const changedAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length > 0 && +age > 0) {
      let user = {
        id: Math.random().toString(),
        name: username,
        age: +age,
      };

      props.onSubmitForm(user);
      setUsername("");
      setAge("");
    } else if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    } else if (+age <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (positive number).",
      });
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <div className={styles["username-row"]}>
            <label>Username</label>
            <input
              value={username}
              type="text"
              onChange={changedNameHandler}
            ></input>
          </div>
          <div className={styles["age-row"]}>
            <label>Age(Years)</label>
            <input
              value={age}
              type="number"
              onChange={changedAgeHandler}
            ></input>
          </div>
          <div className={styles["button-container"]}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default User;
