import React from "react";
import Todo from "./Todo";

export default function CompletedTodos({ todos, completeTodo, deleteTodo }) {
  const completedList = todos.map((todo, index) => {
    if (todo.isCompleted === true) {
      return (
        <Todo
          todo={todo}
          index={index}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      );
    }
    return null;
  });
  return <ul className="todos_collection">{completedList}</ul>;
}
