import React, { useState } from "react";
import "./Add.css";

function Add({ todo, setTodo }) {
  const [value, setValue] = useState("");
  const [idCounter, setIdCounter] = useState(1);
  const [isFocused, setIsFocused] = useState(false);

  function Save() {
    if (value.trim() !== "") {
      const newTodo = {
        id: idCounter,
        title: value,
        status: true,
      };
      setTodo([...todo, newTodo]);
      setValue("");
      setIdCounter(idCounter + 1);
    } else {
      alert("Поле не должно быть пустым!");
    }
  }

  return (
    <div>
      <input
        className={`Task_text ${isFocused ? "focused" : ""}`}
        placeholder="Enter task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button className="save_button" onClick={Save}>
        Save
      </button>
    </div>
  );
}
export default Add;
