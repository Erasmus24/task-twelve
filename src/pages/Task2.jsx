import React from "react";

import Button from "@material-ui/core/Button";
import "../App.css";

class Task2 extends React.Component {
  state = {
    x: "",
    y: "",
    z: "",
    a: "",
    b: "",
  };

  handleClick = (e) => {
    let numX = 1 + 1 * 2;
    let numY = (1 + 1) * 2;
    let numZ = 1 + 1 * 2;
    let numA = 1 + (1 * 2) / 2;
    let numB = (1 + 1 * 2) / 2;
    console.log(this.state);
    this.setState({
      x: numX,
      y: numY,
      z: numZ,
      a: numA,
      b: numB,
    });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Hello this is task 2</h1>
        <form>
          <h2>What are the answers to the following equations?</h2>
          <p>
            x = 1 + 1 <span>&#215;</span> 2
          </p>
          <p>
            y = (1 + 1) <span>&#215;</span> 2
          </p>
          <p>
            z = 1 + (1 <span>&#215;</span> 2)
          </p>
          <p>
            a = 1 + 1 <span>&#215;</span> 2 <span>&#247;</span> 2
          </p>
          <p>
            b = (1 + 1 <span>&#215;</span> 2) <span>&#247;</span> 2
          </p>
          <br />
          <div className="answers">
            <span>x = {this.state.x};</span>
            <span> y = {this.state.y};</span>
            <span> z = {this.state.z};</span>
            <span> a = {this.state.a}; </span>
            <span> b = {this.state.b};</span>
          </div>
          <br /> <br />
          <Button
            variant="contained"
            style={{ color: "teal", backgroundColor: "#b2dfdb" }}
            onClick={this.handleClick}
          >
            Results
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default Task2;
