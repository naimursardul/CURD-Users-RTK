/*
 * Title: User list
 * Description: User list
 * Author: Naimur Rahman
 * Date: 2023-12-18
 *
 */

import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteForm from "../../DeleteForm/DeleteForm";
import { getAllUser, updateSelectedUser } from "../../features/slice/curdSlice";
import UpdateForm from "../UpdateForm/UpdateForm";
import SearchBox from "../SearchBox/SearchBox";

const UserList = () => {
  const [isUpdateTrue, setIsUpdateTrue] = useState(false);
  const [isDeleteTrue, setIsDeleteTrue] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const { users, loading } = useSelector((state) => state.userDetails);

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="m-5 ">
      <SearchBox />

      {isUpdateTrue && <UpdateForm setIsUpdateTrue={setIsUpdateTrue} />}
      {isDeleteTrue && <DeleteForm setIsDeleteTrue={setIsDeleteTrue} />}

      <Table striped="columns">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th></th>
          </tr>
        </thead>
        {users ? (
          users.map((user) => (
            <tbody key={user.id}>
              <tr>
                <td>{user.id}</td>
                <td>{user.firstName + " " + user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.gender}</td>
                <td className="d-flex gap-2 justify-content-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setIsUpdateTrue(true);
                      dispatch(updateSelectedUser(user));
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setIsDeleteTrue(true);
                      dispatch(updateSelectedUser(user));
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody>
            <tr>
              <td colSpan="6">
                <h3 className=" d-flex justify-content-center align-items-center">
                  No users found!
                </h3>
              </td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default UserList;
