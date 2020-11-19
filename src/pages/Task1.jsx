import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Task1 extends React.Component {
  state = {
    x: 4,
    y: "",
    answer: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.setState({
      answer:
        parseInt(this.state.y) +
        parseInt(this.state.x) +
        " is the final y value",
    });
  };

  render() {
    return (
      <div>
        <form>
          <h1>Hello this is task 1</h1>
          <p>x = 0</p>
          <p>y = 1</p>
          <p>x = x + 3</p>
          <p>y = y + x</p>
          <h3>
            Enter a number and click on the ANSWER button to get the final y
            answer
          </h3>
          <h3 className="answers">{this.state.answer}</h3>
          <TextField
            id="y"
            label="change the final y value"
            onChange={this.handleChange}
            color="default"
          />
          <br /> <br />
          <Button
            variant="contained"
            style={{ color: "teal", backgroundColor: "#b2dfdb" }}
            onClick={this.handleSubmit}
          >
            final answer
          </Button>
        </form>
      </div>
    );
  }
}

export default Task1;
