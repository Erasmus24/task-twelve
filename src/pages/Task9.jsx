import React from "react";
import Button from "@material-ui/core/Button";

import "../App.css";

class Task9 extends React.Component {
  state = {
    y: "You get 233168",
    total: "",
  };

  handleSubmit = (e) => {
    this.setState({
      total: this.state.y,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello this is task 9</h1>
        <h3>What do you get when you take all the multiples of 3 or 5 </h3>
        <h3>
          upto just before 1000 and add them all together then return the total?
        </h3>

        <h3 className="answers">{this.state.total}</h3>
        <form>
          <br />
          <br />
          <Button
            variant="contained"
            style={{ color: "teal", backgroundColor: "#b2dfdb" }}
            onClick={this.handleSubmit}
          >
            total
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default Task9;
