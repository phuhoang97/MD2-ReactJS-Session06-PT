import React, { Component } from "react";

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "", course: "ReactJS" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const objUser = {
      Name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      course: this.state.course,
    };
    let userArr = JSON.parse(localStorage.getItem("user"));
    if (userArr == null) {
      userArr = [];
    }
    userArr.push(objUser);
    localStorage.setItem("user", JSON.stringify(userArr));
  };

  render() {
    return (
      <>
        <form>
          <label>Name: </label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />

          <label>Email: </label>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />

          <label>Password: </label>
          <input
            type='text'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />

          <label>Course: </label>
          <select
            value={this.state.course}
            name={"course"}
            onChange={this.handleChange}
          >
            <option value={"reactjs"}>ReactJS</option>
            <option value={"javascript"}>Javascript</option>
            <option value={"nodejs"}>NodeJS</option>
          </select>
          <br />

          <input type='submit' value='Submit' onClick={this.handleSubmit} />
        </form>
      </>
    );
  }
}

export default DemoForm;
