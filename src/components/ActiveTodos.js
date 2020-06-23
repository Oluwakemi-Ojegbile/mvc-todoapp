import React from "react";
import Todo from "./Todo";

export default function ActiveTodos({ todos, completeTodo, deleteTodo }) {
  console.log("ActiveTodo=", todos);
  const activeList = todos.map((todo, index) => {
    if (todo.isCompleted === false) {
      return <Todo todo={todo} index={index} completeTodo={completeTodo} deleteTodo={deleteTodo} />;
    }
    return null;
  });
  return <ul className="todos_collection">{activeList}</ul>;
}
