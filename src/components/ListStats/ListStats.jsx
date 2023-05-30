import React from "react";
import "./ListStats.modules.scss";

function ListStats({ remaining, doneTasks, totalTasks }) {
  return (
    <div className="stat-container">
      <div className="stat-container__stats">
        <span className="stat-container__stats__number">{remaining}</span>
        <span className="stat-container__stats__text">Remaining</span>
      </div>
      <div className="stat-container__stats">
        <span className="stat-container__stats__number">{doneTasks}</span>
        <span className="stat-container__stats__text">Done Tasks</span>
      </div>
      <div className="stat-container__stats">
        <span className="stat-container__stats__number">{totalTasks}</span>
        <span className="stat-container__stats__text">Total Tasks</span>
      </div>
    </div>
  );
}

export default ListStats;
