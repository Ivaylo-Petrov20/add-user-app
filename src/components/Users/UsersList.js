import React from "react";

import Card from "../UI/Card";
import User from "./User";

const UsersList = (props) => {

  const onRemoveUser = (userId) => {
    props.onDelete(userId);
  };


  return (
    <Card>
      {props.users.map((user) => (
        <User onRemove={onRemoveUser} key={user.id}  id={user.id} name={user.name}  age={user.age}/>
      ))}
    </Card>
  );
};

export default UsersList;
