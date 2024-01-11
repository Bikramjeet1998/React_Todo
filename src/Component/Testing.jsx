import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      let oldTaskList = state.taskList;

      let newTask = {
        id: crypto.randomUUID(),
        title: action.payload,
      };

      let newTaskList = [...oldTaskList, newTask];

      return {
        taskList: newTaskList,
      };

    default:
      return state;
  }
};
const initialState = {
  taskList: [],
};
export default function Testing() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  console.log(todos);

  const handleAddBtnClick = () => {
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleAddBtnClick}>ADD</button>
      <div>
        <h4>Todo List</h4>
        <ul>
          {todos.taskList?.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
