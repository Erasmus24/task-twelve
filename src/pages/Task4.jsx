import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";

class Task4 extends React.Component {
  state = {
    a: "",
    b: "",
    c: 3,
    answer: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var sum = parseInt(this.state.a) + parseInt(this.state.b);
    var sumString = sum.toString();
    this.setState({
      answer:
        (parseInt(this.state.a) === this.state.c ||
          parseInt(this.state.b) === this.state.c) &&
        sumString.includes("3")
          ? "true"
          : "false",
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello this is task 4</h1>
        <h3>Enter two numbers. If one of the numbers is 3</h3>
        <h3>and when you add the two numbers, the answer has a 3 </h3>
        <h3>then I will return TRUE or else I will return FALSE.</h3>
        <h3 className="answers">{this.state.answer}</h3>
        <form>
          <TextField
            id="a"
            label="First Number"
            name="a"
            onChange={this.handleChange}
          />
          <br /> <br />
          <TextField
            id="b"
            label="Second Number"
            name="b"
            onChange={this.handleChange}
          />
          <br /> <br />
          <Button
            variant="contained"
            style={{ color: "teal", backgroundColor: "#b2dfdb" }}
            onClick={this.handleSubmit}
          >
            I say...
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default Task4;
