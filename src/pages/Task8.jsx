import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";

class Task8 extends React.Component {
  state = {
    a: "",
    time: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    let hrs = Math.floor(this.state.a / 60);
    let mins = this.state.a % 60;
    this.setState({
      time:
        hrs <= 1
          ? hrs + " Hour, " + mins + " Minutes"
          : hrs + " Hours, " + mins + " Minutes",
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello this is task 8</h1>
        <h3>Enter a number to convert that number to hours and minutes </h3>
        <h3>then click on the time button and the hours and minutes will</h3>
        <h3>be displayed</h3>
        <h3 className="answers">{this.state.time} </h3>

        <form>
          <TextField
            id="a"
            label="Convert to time"
            name="a"
            onChange={this.handleChange}
          />
          <br /> <br />
          <Button
            variant="contained"
            style={{ color: "teal", backgroundColor: "#b2dfdb" }}
            onClick={this.handleSubmit}
          >
            time
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default Task8;
