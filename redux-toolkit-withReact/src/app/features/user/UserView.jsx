import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
export const UserView = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  console.log(users, loading, error);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {loading && <div>Loading</div>}
      {!loading && error ? <div>{error}</div> : null}
      {!loading && users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
