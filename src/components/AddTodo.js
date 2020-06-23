import React, { useState } from "react";
import down from "../assets/down.svg";

export default function AddTodo({ addTodo, todos }) {
  const [todoInput, setTodoInput] = useState("");

  function handleChange(e) {
    setTodoInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(todoInput);
  }

  return (
    <div className="app_wrapper">
      <p className="title">todos</p>
      <div className="todo_box">
        <div className={`hide_icon ${todos.length > 0 && " show_icon"}`}>
          <img src={down} alt="down icon" />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="input_box">
          <input
            name="todo"
            value={todoInput.todo}
            onChange={handleChange}
            placeholder="What needs to be done?"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
