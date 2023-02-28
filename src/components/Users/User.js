import React from 'react';

import styles from './User.module.css';

const User = (props) => {
  const removeUser = () => {
    props.onRemove(props.id);
  };

  return (
    <div className={styles["user-container"]}>
      <p onClick={removeUser}>{props.name} ({props.age} years old)</p>
    </div>
  );
}

export default User;