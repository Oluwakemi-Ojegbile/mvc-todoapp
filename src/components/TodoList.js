import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todos,
  deleteTodo,
  completeTodo,
  updateTodo,
}) {
  const todoList = todos ? (
    todos?.map((todo, index) => {
      return (
        <Todo
          key={todo.id}
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
