import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>TASK TWELVE</h1>
      <h3>This is the User Interface that I came up with.</h3>
      <h3>I hope that you like it and may you have a great </h3>

      <h3>experience while going through the different items.</h3>
      <h3>
        To access the tasks you can click on {""}
        <Link to="/tasks" style={{ textDecoration: "none" }}>
          'Tasks'
        </Link>
      </h3>
      <h3>which is also on the Navbar.</h3>
    </div>
  );
};

export default Home;
