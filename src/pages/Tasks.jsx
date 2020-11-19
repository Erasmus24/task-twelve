import React from "react";
import { Link } from "react-router-dom";
import "./Tasks.css";

const Tasks = () => {
  return (
    <div className="grid-container">
      <Link to="/task1" className="card">
        <h1>Task 1</h1>
      </Link>
      <Link to="/task2" className="card">
        <h1>Task 2</h1>
      </Link>
      <Link to="/task3" className="card">
        <h1>Task 3</h1>
      </Link>
      <Link to="/task4" className="card">
        <h1>Task 4</h1>
      </Link>
      <Link to="task5" className="card">
        <h1>Task 5</h1>
      </Link>
      <Link to="task6" className="card">
        <h1>Task 6</h1>
      </Link>
      <Link to="/task7" className="card">
        <h1>Task 7</h1>
      </Link>
      <Link to="/task8" className="card">
        <h1>Task 8</h1>
      </Link>
      <Link to="/task9" className="card">
        <h1>Task 9</h1>
      </Link>
    </div>
  );
};

export default Tasks;
