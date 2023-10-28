import React, { useState } from "react";
import "./List.css";

function List({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [showCompleted, setShowCompleted] = useState(false); // Состояние для фильтрации
  const [showNotCompleted, setShowNotCompleted] = useState(false); // Состояние для фильтрации невыполненных задач

  function deleteButton(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }
  function handleCheckboxChange(id) {
    const updatedTodos = todo.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodo(updatedTodos);
  }

  function editButton(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }
  function filterCompleted() {
    setShowCompleted(!showCompleted); // Переключение фильтрации
  }
  function filterNotCompleted() {
    setShowNotCompleted(!showNotCompleted);
    setShowCompleted(false); // Сбросить фильтрацию выполненных задач
  }

  let filteredTodos = todo;

  if (showCompleted) {
    filteredTodos = todo.filter((item) => item.completed);
  } else if (showNotCompleted) {
    filteredTodos = todo.filter((item) => !item.completed);
  }

  return (
    <div>
      <div className="filter-container">
        <button className="button" onClick={filterCompleted}>
          {showCompleted ? "Show All" : "Completed"}
        </button>
        <button className="button" onClick={filterNotCompleted}>
          {showNotCompleted ? "Show All" : "Not Completed"}
        </button>
      </div>

      {filteredTodos.map((item) => (
        <div key={item.id} className="ListItems">
          {edit == item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div className={item.completed ? "crossout" : ""}>{item.title}</div>
          )}
          {edit == item.id ? (
            <div>
              <button className="button" onClick={() => saveTodo(item.id)}>
                Save
              </button>
            </div>
          ) : (
            <div>
              <button className="button" onClick={() => deleteButton(item.id)}>
                Delete
              </button>

              <button
                className="button"
                onClick={() => editButton(item.id, item.title)}
              >
                Edit
              </button>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default List;
