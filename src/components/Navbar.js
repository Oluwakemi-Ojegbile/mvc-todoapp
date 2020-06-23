import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ clearCompleted, todos }) {
  return (
    <div className="footer_nav">
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
      <div>
        <button onClick={clearCompleted} className="clear_btn">
          Clear completed
        </button>
      </div>
    </div>
  );
}
