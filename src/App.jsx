import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [task, settask] = useState([]);

  function Addtask() {
    settask([...task, count]);
  }

  return (
    <>
      <div className="container">
        <div className="main-todo">
          <div className="">
            <input type="text" onChange={(e) => setCount(e.target.value)} />
            <button onClick={Addtask}>Add</button>
          </div>

          <div>
            <h4>List of all Todos</h4>
            <ul>
              {task.map((item, index) => (
                <li key={index}> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
