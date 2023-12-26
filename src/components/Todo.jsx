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
        task: [...state.task, { id: Date.now(), title: state.inputValue }],
        inputValue: "",
      };
    case "DELETE":
      return {
        ...state,
        task: state.task.filter((item) => item.id !== action.payload),
      }
    

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
              type="text"
              value={state.inputValue}
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: e.target.value,
                })
              }
            />
            <button className="add-btn" onClick={() => dispatch({ type: "ADD" })}>ADD</button>
          </div>

          <div>
            <h4>List of all Todos</h4>
            <ul>
              {state.task.map((item, index) => {
                return (
                  <li key={index}>
                    {item.title}
                    <button classsname="del-btn" onClick={() => handle_delete(item.id)}>
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
