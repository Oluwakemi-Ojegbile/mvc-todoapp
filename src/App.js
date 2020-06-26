import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ActiveTodos from "./components/ActiveTodos";
import CompletedTodos from "./components/CompletedTodos";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import useLocalStorage from "./hooks/localStorage";

function App() {
  const [todos, setTodos] = useLocalStorage("todo", []);
  const [selected, setSelected] = useState(false);

  const addTodo = (todo) => {
    localStorage.setItem("todo", JSON.stringify([...todos, todo]));
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
    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const selectAllFalse = () => {
    const newTodos = todos.map((todo) => {
      return {
        ...todo,
        isCompleted: false,
      };
    });
    setTodos(newTodos);
  };

  const selectAllTrue = () => {
    const newTodos = todos.map((todo) => {
      return {
        ...todo,
        isCompleted: true,
      };
    });
    setTodos(newTodos);
  };

  const handleSelectAll = (e) => {
    setSelected(!selected);
    selected ? selectAllTrue() : selectAllFalse();
  };

  const clearCompleted = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.isCompleted === false;
      })
    );
  };

  function updateTodo(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="todos_collection">
          <AddTodo
            addTodo={addTodo}
            todos={todos}
            handleSelectAll={handleSelectAll}
          />
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
                  updateTodo={updateTodo}
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
