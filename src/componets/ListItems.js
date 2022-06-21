import React from "react";

const ListItems = ({ item }) => {
  return (
    <li className="list-group-item d-flex justify-content-between mt-1">
      <h3>{item}</h3>
      {/* <button type="button" className="btn btn-danger">
        Delete
      </button> */}
    </li>
  );
};

export default ListItems;
