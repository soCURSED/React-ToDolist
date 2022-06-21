import "../App.css";
import Navbar from "./Navbar";
import GroupList from "./GroupList";
import ListItems from "./ListItems";
import { useState } from "react";

const App = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodo] = useState([]);
  const onClick = (e) => {
    console.log(todoItem);
    setTodo([...todoList, todoItem]);
  };
  const onChange = (e) => {
    setTodoItem(e.target.value);
  };

  return (
    <>
      {/* <Navbar projectname="To - Do List" /> */}
      <div className="container">
        <h1>ToDo List!</h1>
        <GroupList todoList={todoList} />
        <input
          onChange={onChange}
          type="text"
          className="form-control mt-5 p-2"
          placeholder="Enter your task"
          value={todoItem}
        />
        <button
          onClick={onClick}
          type="button"
          className="btn btn-info mt-1 p-1 w-100"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default App;
