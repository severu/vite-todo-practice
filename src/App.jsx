import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { todos } from "./data/todos";
import "./App.modules.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function App() {
  const [tasks, setTasks] = useState(todos);
  const [currentInput, setCurrentInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const task = { id: tasks.length + 1, task: currentInput, isDone: false };
    setTasks((prev) => [task, ...prev]);
    setCurrentInput("");
  };

  const handleCheck = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      position: "top",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        MySwal.fire({
          title: "Deleted!",
          text: "The task has been deleted.",
          icon: "success",
          position: "top",
        });
      }
    });
  };

  return (
    <div className="app">
      <h1 className="app__title">TODO LIST</h1>
      <div className="app__form">
        <form id="form-input" onSubmit={handleAdd}>
          <label htmlFor="input">
            <input
              required
              className="app__form__input"
              value={currentInput}
              id="input"
              onChange={(e) => setCurrentInput(e.target.value)}
            />
          </label>
        </form>
        <button className="app__form__add-btn" type="submit" form="form-input">
          <ArrowDownTrayIcon className="h-6 w-6 text-blue-500" />
        </button>
      </div>
      <TodoList
        todos={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
