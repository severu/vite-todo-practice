import React from "react";
import "./TodoList.modules.scss";
import classNames from "classnames";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

function TodoList({ todos, handleCheck, handleDelete, handleEdit }) {
  return (
    <div className="todo">
      <ul className="todo__list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={classNames("todo__list__item", { done: todo.isDone })}
          >
            <label className="todo__list__item__input-container" >
              <input
                className="todo__list__item__input-container__checkbox"
                type="checkbox"
                checked={todo.isDone}
                onChange={() => handleCheck(todo.id)}
              />
              <span className="todo__list__item__input-container__checkmark"></span>
              {todo.task}
            </label>
            <div className="todo__list__btn-container">
              <button
                className="todo__list__item__edit-btn"
                onClick={() => handleEdit(todo)}
              >
                <PencilSquareIcon />
              </button>
              <button
                className="todo__list__item__del-btn"
                onClick={() => handleDelete(todo.id)}
              >
                <TrashIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
