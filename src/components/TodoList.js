import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, deleteTodo, completeTodo, updateTodo }) {
  console.log("todoje", todos);
  const todoList = todos ? (
    todos?.map((todo, index) => {
      return (
        <Todo
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          updateTodo={updateTodo}
        />
      );
    })
  ) : (
    <span></span>
  );
  return <ul className="todos_collection">{todoList}</ul>;
}
