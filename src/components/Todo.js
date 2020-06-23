import React from "react";

export default function Todo({ todo, index, deleteTodo, completeTodo }) {
  return (
    <li className="list_item" key={todo}>
      <label>
        <input
          onChange={() => completeTodo(index)}
          type="checkbox"
          checked={todo.isCompleted}
        />
        <div className="mark_text"></div>
        <span
          className="todo_text"
          style={{
            textDecoration: todo.isCompleted === true ? "line-through" : "", 
          }}
        >
          {todo.content}
        </span>
      </label>
      <span onClick={deleteTodo} className="del_todo">
        X
      </span>
    </li>
  );
}
