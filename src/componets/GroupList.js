import React from "react";
import ListItems from "./ListItems";

const GroupList = ({ todoList }) => {
  return (
    <ul className="list-group" style={{ width: "500px" }}>
      {todoList.map((item, i) => (
        <ListItems key={i} item={item} />
      ))}
    </ul>
  );
};

export default GroupList;
