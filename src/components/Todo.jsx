import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "ADD":
      return {
        task: [
          ...state.task,
          { id: Date.now(), title: state.inputValue, completed: false },
        ],
        inputValue: "",
      };
    case "DELETE":
      return {
        ...state,
        task: state.task.filter((item) => item.id !== action.payload),
      };
    case "Selected":
      return {
        ...state,
        task: state.task.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

const initialState = {
  inputValue: "",
  task: [],
};

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handle_delete(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }
  console.log(state);
  return (
    <>
      <div className="container">
        <div className="main-todo">
          <div className="">
            <input
              className="input"
              type="text"
              value={state.inputValue}
              placeholder="Enter Todo"
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: e.target.value,
                })
              }
            />
            <button
              className="add-btn"
              onClick={() => dispatch({ type: "ADD" })}
            >
              ADD
            </button>
          </div>

          <div>
            <h4>List of all Todos</h4>
            <ul>
              {state.task.map((item, index) => {
                return (
                  <li key={index}>
                    <span>
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() =>
                          dispatch({ type: "Selected", payload: item.id })
                        }
                      />
                      <span className={item.completed ? "marked" : ""}>
                        {item.title}
                      </span>
                    </span>
                    <button
                      classsname="del-btn"
                      onClick={() => handle_delete(item.id)}
                    >
                      delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
