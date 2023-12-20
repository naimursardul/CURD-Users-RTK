/*
 * Title: Search Box
 * Description: Search Box for User list
 * Author: Naimur Rahman
 * Date: 2023-12-17
 *
 */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUser, getSingleUser } from "../../features/slice/curdSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState();
  const getInputData = (e) => {
    setInputData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData) {
      dispatch(getSingleUser(inputData));
    } else {
      dispatch(getAllUser());
    }
    console.log(inputData);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form-inline my-4 d-flex justify-content-start gap-2"
      >
        <div className="h3 flex-grow-1">User List</div>
        <input
          className="form-control w-25"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={getInputData}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
