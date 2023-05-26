import React from "react";
import "./TodoList.modules.scss";
import classNames from "classnames";

function TodoList({ todos, handleCheck, handleDelete }) {
  return (
    <div className="todo">
      <ul className="todo__list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={classNames("todo__list__item", { done: todo.isDone })}
          >
            <label>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => handleCheck(todo.id)}
              />
              {todo.task}
            </label>
            <button
              className="todo__list__item__del-btn"
              onClick={() => handleDelete(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
