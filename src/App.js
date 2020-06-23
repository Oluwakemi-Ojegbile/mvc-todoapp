import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ActiveTodos from "./components/ActiveTodos";
import CompletedTodos from "./components/CompletedTodos";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  console.log("todo", todos);

  const addTodo = (todo) => {
    const newTodo = [
      ...todos,
      { id: Math.random(), content: todo, isCompleted: false },
    ];
    setTodos(newTodo);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = newTodos[index].isCompleted ? false : true;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const index = todos.filter((todo) => todo.isCompleted === true);
    const newTodo = todos.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="todos_collection">
          <AddTodo addTodo={addTodo} todos={todos} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <TodoList
                  {...props}
                  todos={todos}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              )}
            />
            <Route
              exact
              path="/todos/active-todos"
              render={(props) => (
                <ActiveTodos
                  {...props}
                  todos={todos}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              )}
            />
            <Route
              exact
              path="/todos/completed-todos"
              render={(props) => (
                <CompletedTodos
                  {...props}
                  todos={todos}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              )}
            />
          </Switch>
          {todos.length > 0 ? (
            <Navbar clearCompleted={clearCompleted} todos={todos} />
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
