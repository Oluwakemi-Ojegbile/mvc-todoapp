import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarStyle } from "./Navbar.style";
import { motion } from "framer-motion";

export default function Navbar({ clearCompleted, todos }) {
  return (
    <NavbarStyle>
      <div className="left_item">{todos.length} item left</div>
      <div className="navbar_links">
        <NavLink exact activeClassName="is-active" to="/">
          All
        </NavLink>
        <NavLink activeClassName="is-active" to="/todos/active-todos">
          Active
        </NavLink>
        <NavLink activeClassName="is-active" to="/todos/completed-todos">
          Completed
        </NavLink>
      </div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button onClick={clearCompleted} className="clear_btn">
          Clear completed
        </button>
      </motion.div>
    </NavbarStyle>
  );
}
