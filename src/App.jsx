import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import ListStats from "./components/ListStats/ListStats";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { todos } from "./data/todos";
import "./App.modules.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function App() {
  const [tasks, setTasks] = useState(todos);
  const [currentInput, setCurrentInput] = useState("");
  const [editID, setEditID] = useState(0); //this is important to control the flow of the handleAdd function

  const handleAdd = (e) => {
    e.preventDefault();
    if (currentInput !== "") {
      const task = { id: tasks.length + 1, task: currentInput, isDone: false };
      setTasks((prev) => [task, ...prev]);
      setCurrentInput("");
    }
    //temporary solution... I prefer the pop-up one.
    if (editID) {
      //store the object with the same id as the one being edited
      const editTask = tasks.find((t) => t.id === editID);
      //store the new task list to a variable
      const updatedTask = tasks.map((t) =>
        //if the id of the object is the same as the id of the item being edited...
        //set the specific object's task item's value to the one inside currentInput
        t.id === editTask.id
          ? { id: t.id, task: currentInput, isDone: t.isDone }
          : { id: t.id, task: t.task, isDone: t.isDone }
      );
      //update the Tasks object with the new one
      setTasks(updatedTask);
      //setting editID to 0 everytime you enter the 2nd if block is important...
      //because you don't want to get inside the second if block if you are...
      //just trying to add another todo item right after editing an item.
      setEditID(0);
    }
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
      iconColor: "#e77575",
      position: "top",
      width: "20em",
      background: "#F9F8F8",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        setEditID(0);
        MySwal.fire({
          title: "Deleted!",
          text: "The task has been deleted.",
          icon: "success",
          iconColor: "#7ff5a6",
          width: "20em",
          position: "top",
        });
      }
    });
  };

  const handleEdit = (todo) => {
    setCurrentInput(todo.task);
    setEditID(todo.id);
  };

  return (
    <div className="app">
      <h1 className="app__title">TO-DO LIST</h1>
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
        handleEdit={handleEdit}
      />
      <ListStats />
    </div>
  );
}

export default App;
