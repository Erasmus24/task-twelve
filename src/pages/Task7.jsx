import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";

class Task7 extends React.Component {
  state = {
    cel: "",
    fah: "",
    fahValue: "",
    celValue: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let fahrenhiet = parseInt(this.state.cel) * 1.8 + 32;
    this.setState({
      fahValue: fahrenhiet + " degrees Fahrenhiet",
    });
  };

  handleSubmitCel = (e) => {
    e.preventDefault();
    let celsius = (parseInt(this.state.fah) - 32) * 1.8;
    this.setState({
      celValue: celsius + " degrees Celsius",
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello this is task 7</h1>
        <h3>Enter a number to convert that number to Degrees Celsius </h3>
        <h3>Or Degrees Fahrenhiet </h3>

        <h3 className="answers">{this.state.fahValue} </h3>
        <h3 className="answers">{this.state.celValue}</h3>
        <form>
          <TextField
            id="cel"
            label="Celsius"
            name="cel"
            onChange={this.handleChange}
          />
          <br /> <br />
          <TextField
            id="fah"
            label="Fahrenhiet"
            name="fah"
            onChange={this.handleChange}
          />
          <br /> <br />
          <Button
            variant="contained"
            style={{ color: "teal", backgroundColor: "#b2dfdb" }}
            onClick={this.handleSubmit}
          >
            fahrenhiet
          </Button>
          <br />
          <br />
          <Button
            variant="contained"
            style={{ color: "teal", backgroundColor: "#b2dfdb" }}
            onClick={this.handleSubmitCel}
          >
            celsius
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default Task7;
