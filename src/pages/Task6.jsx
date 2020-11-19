import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";

class Task6 extends React.Component {
  state = {
    a: "",
    b: "",
    c: "",
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
        (parseInt(this.state.a) > parseInt(this.state.b) &&
          parseInt(this.state.a) > parseInt(this.state.c)) ||
        parseInt(this.state.a) === parseInt(this.state.b)
          ? parseInt(this.state.a) + " is the maximum number"
          : (parseInt(this.state.b) > parseInt(this.state.a) &&
              parseInt(this.state.b) > parseInt(this.state.c)) ||
            parseInt(this.state.b) === parseInt(this.state.c)
          ? parseInt(this.state.b) + " is the maximum number"
          : (parseInt(this.state.c) > parseInt(this.state.b) &&
              parseInt(this.state.c) > parseInt(this.state.a)) ||
            parseInt(this.state.c) === parseInt(this.state.a)
          ? parseInt(this.state.c) + " is the maximum number"
          : "",
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello this is task 6</h1>
        <h3>Enter three numbers and click on the MAXIMUM button</h3>
        <h3>then the maximum number will be displayed.</h3>

        <h3 className="answers">{this.state.answer} </h3>
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
            label="Second Side"
            name="b"
            onChange={this.handleChange}
          />
          <br /> <br />
          <TextField
            id="c"
            label="Third Side"
            name="c"
            onChange={this.handleChange}
          />
          <br /> <br />
          <Button
            variant="contained"
            style={{ color: "teal", backgroundColor: "#b2dfdb" }}
            onClick={this.handleSubmit}
          >
            maximum
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default Task6;
