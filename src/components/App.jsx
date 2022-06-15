import React, { useState } from "react";

function App() {
  const [input, setInput] = useState(""); //variable to capture input typed by user
  const [addedItem, setAddedItem] = useState(""); //variable to display list item

  function handleChange(event) {
    const newItem = event.target.value;
    setInput(newItem); //updates the input variable
  }

  function addItem() {
    setAddedItem(input); //pushes the input to the list
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{addedItem}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
