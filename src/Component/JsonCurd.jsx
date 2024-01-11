import React, {useState} from 'react'

export default function JsonCurd() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleBtnClick = () => {
    console.log('clicked');
    
    // setTodos([input]);
    // setTodos([...todos, input]);

    let newTodo = {
        id : crypto.randomUUID(),
        title : input,
        isCompleted : false
    }
    console.log(newTodo)
    setInput("");
    setTodos([...todos, newTodo]);
}

console.log(input);
console.log(todos);

  return (
    <div>
      <h1>JsonCurd</h1>
      <input type="text" onChange={handleInputChange}/>
      <button onClick={handleBtnClick}>Add value in Array</button>
      <pre>
        {JSON.stringify(todos, true, 2)}
      </pre>
    </div>
  )
}