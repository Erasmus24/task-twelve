import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";

class Task5 extends React.Component {
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
    e.preventDefault();
    var s =
      0.5 *
      (parseInt(this.state.a) +
        parseInt(this.state.b) +
        parseInt(this.state.c));
    var area = Math.round(
      Math.sqrt(
        s *
          (s - parseInt(this.state.a)) *
          (s - parseInt(this.state.b)) *
          (s - parseInt(this.state.c))
      )
    );
    this.setState({
      answer: area + " square units (Rounded off to the nearest number)",
    });
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello this is task 5</h1>
        <h3>Enter three numbers. Each number represents a side length</h3>
        <h3>of a triangle. When you click on the AREA button, </h3>
        <h3>then the area of the trianlge will be displayed.</h3>
        <h3 className="answers">{this.state.answer} </h3>
        <form>
          <TextField
            id="a"
            label="First Side"
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
            area
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default Task5;
