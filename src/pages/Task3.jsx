import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";

class Task3 extends React.Component {
  state = {
    a: "",
    b: "",
    answer: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      answer:
        parseInt(this.state.a) === 65 ||
        parseInt(this.state.b) === 65 ||
        parseInt(this.state.a) + parseInt(this.state.b) === 65
          ? "true"
          : "false",
    });
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello this is task 3</h1>
        <h3>Enter two numbers. If one of the numbers is 65</h3>
        <h3>or when you add the two numbers you get 65 </h3>
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

export default Task3;
