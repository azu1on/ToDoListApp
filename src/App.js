import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Add from "./components/Add/Add";
import List from "./components/List/List";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <div className="todo_sidebar">
        <Header />
        <Add todo={todo} setTodo={setTodo} />
        <List todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
