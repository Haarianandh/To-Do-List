import React, { useState } from "react";
import "./styles.css";
import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>

        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};
export default App;
