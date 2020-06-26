import React from "react";
import { motion } from "framer-motion";

export default function Todo({
  todo,
  index,
  deleteTodo,
  completeTodo,
  updateTodo,
}) {
  return (
    <motion.li positionTransition className="list_item" key={todo}>
      <label>
        <input
          onChange={() => completeTodo(index)}
          type="checkbox"
          checked={todo.isCompleted}
        />
        <div className="mark_text"></div>
        <form onChange={(e) => updateTodo(e, index)}>
          <input
            type="text"
            className="todo_text"
            style={{
              textDecoration: todo.isCompleted === true ? "line-through" : "",
            }}
            defaultValue={todo.content}
          />
        </form>
      </label>
      <span onClick={deleteTodo} className="del_todo">
        X
      </span>
    </motion.li>
  );
}
