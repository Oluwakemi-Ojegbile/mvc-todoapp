import React, { useState } from "react";
import down from "../../assets/down.svg";
import { AddTodoStyle } from "./AddTodo.style";

export default function AddTodo({ addTodo, todos, handleSelectAll }) {
  const [todoInput, setTodoInput] = useState("");

  function handleChange(e) {
    setTodoInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(todoInput);
    setTodoInput("");
  }
  console.log("todos==", todos);

  return (
    <AddTodoStyle>
      <p className="title">todos</p>
      <form onSubmit={(e) => handleSubmit(e)} className="todo_box">
        <div
          onClick={(e) => handleSelectAll(e)}
          className={`hide_icon ${todos.length > 0 && " show_icon"}`}
        >
          <img src={down} alt="down icon" />
        </div>
        <input
          className="input_box"
          name="todo"
          defaultValue={todoInput.todo}
          onChange={handleChange}
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </AddTodoStyle>
  );
}
