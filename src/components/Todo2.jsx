import { React, useReducer } from "react";
import  "./Todo2.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "Input":
      return {
        ...state,
        inputvalue: action.payload,
      };
    case "ADD":
      return {
        task: [
          ...state.task,
          {
            id: Date.now(),
            title: state.inputvalue,
          },
        ],
        inputvalue: "",
      };
    case "Del":
      return {
        ...state,
        task: state.task.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

const initialState = {
  inputvalue: "",
  task: [],
};

export default function Todo2() {
  const [show, dispatch] = useReducer(reducer, initialState);

  function handel(id) {
    dispatch({
      type: "Del",
      payload: id,
    });
  }

  return (
    <>
      <input
        type="text"
        value={show.inputvalue}
        onChange={(e) =>
          dispatch({
            type: "Input",
            payload: e.target.value,
          })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
          })
        }
      >
        ADD
      </button>
      <h4>List of task</h4>
      <ul>
        {show.task.map((value, index) => {
          return (
            <li key={index}>
              {value.title}
              <button onClick={() => handel(value.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
